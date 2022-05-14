pragma ton-solidity >= 0.52.0;

import './resolvers/IndexResolver.sol';
import './resolvers/DataChunkResolver.sol';

import './interfaces/IData.sol';

import './libraries/Errors.sol';
import './libraries/Constants.sol';


contract Data is IData, IndexResolver, DataChunkResolver {

    address _devProfitAddress = address(0x0eb093156b485497001f06cf5332861b34f306963c2476af5f433fe7050da0a0);
    address _customerProfitAddress = address(0x9098321675efecaead91d6a8f034e7efc513a3779b4fb29797c8ffd297c23ed2);
    string _version = "2";
    string _name;
    string _descriprion;
    address _addrOwner;
    address _addrAuthor;
    uint128 _createdAt;
    address _addrRoot;
    uint256 _contentHash;
    string _mimeType;
    uint8 _chunks;
    uint128 _chunkSize;
    uint128 _size;
    Meta _meta;

    uint256 static public _id;

    bool public _deployed;

    uint128 _royalty;
    uint128 _royaltyMin;

    bool _onSale;
    uint128 _price;
    address _auctionLider;
    bool _onAuction;
    uint128 _auctionPrice;
    uint256 _endAuctionTimestamp;


    constructor(
        string name,
        string descriprion,
        address addrOwner,
        address addrAuthor,
        uint256 contentHash,
        string mimeType,
        uint8 chunks,
        uint128 chunkSize,
        uint128 size,
        Meta meta,
        TvmCell codeIndex,
        TvmCell codeDataChunk
    ) public {
        optional(TvmCell) optSalt = tvm.codeSalt(tvm.code());
        require(optSalt.hasValue(), Errors.CONTRACT_CODE_NOT_SALTED);
        (address addrRoot) = optSalt.get().toSlice().decode(address);
        require(msg.sender == addrRoot, Errors.INVALID_CALLER);
        require(msg.value >= Constants.DEPLOY_SM, Errors.INVALID_VALUE);

        _name = name;
        _descriprion = descriprion;
        _addrOwner = addrOwner;
        _addrAuthor = addrAuthor;
        _createdAt = uint128(now);
        _addrRoot = addrRoot;
        _contentHash = contentHash;
        _mimeType = mimeType;
        _chunks = chunks;
        _chunkSize = chunkSize;
        _size = size;
        _meta = meta;
        _onSale = false;
        _price = 0;
        _auctionLider = address(0);
        _onAuction = false;
        _auctionPrice = 0;
        

        _codeIndex = codeIndex;
        _codeDataChunk = codeDataChunk;

        deployIndex(addrOwner);
    }

    function setRoyalty(uint128 royalty, uint128 royaltyMin) public override {
        require(msg.sender == _addrAuthor, Errors.INVALID_CALLER);
        require(msg.value >= Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        require(_royalty <= 100000, Errors.INVALID_ARGUMENTS);
        require(_royalty == 0 && _royaltyMin == 0, Errors.ROYALTY_ALREADY_SET);

        _royalty = royalty;
        _royaltyMin = royaltyMin;

        msg.sender.transfer({ value: 0, flag: 64 });
    }



    function putOnSale(uint128 price) public override {
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);
        require(msg.value >= Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        require(_onAuction == false, 302, "Nft already on auction");
        _price = price;
        _onSale = true;
        msg.sender.transfer({ value: 0, flag: 64 });
    }

    function putOnAuction(uint128 initPrice, uint256 time) public  {
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);
        require(msg.value >= Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        require(_onSale == false, 301, "Nft on sale");
        require(_onAuction == false, 302, "Nft already on auction");
        _auctionPrice = initPrice;
        _onAuction = true;
        _auctionLider = address(0);
        _endAuctionTimestamp = uint128(now) + time;
        msg.sender.transfer({ value: 0, flag: 64 });
    }

    function endAuction() public {
        require(msg.value >= Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        require(_onAuction == true, 301, "Nft not on auction");
        require(uint128(now) >  _endAuctionTimestamp, 303, "The auction time has not come out" );
        _onAuction = false;
        if(_auctionLider != address(0)){

            uint128 commission =  _auctionPrice*25_000_000; // 2.5 percents
            uint128 sent =  _auctionPrice*1_000_000_000 - commission;
            _customerProfitAddress.transfer({ value: commission, flag: 0 });
            _addrOwner.transfer({ value: sent, flag: 0 });
            transferAfterBuy(_auctionLider);
        }
        _auctionLider = address(0);
        _endAuctionTimestamp = 0;
        msg.sender.transfer({ value: 0, flag: 64 });
    }

    function auction(uint128 price) public {
        require(msg.value >= Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        require(price > _auctionPrice, 304, "You offered too small a price");
        uint128 cost = Constants.PROCESS_MIN + price*1_000_000_000;
        require(
            msg.value >= cost, Errors.INVALID_VALUE
        );
        require(_onAuction == true, 301, "Nft not on auction");
        require(uint128(now) <  _endAuctionTimestamp, 305, "The auction time has come out" );
        uint128 sent = _auctionPrice*1_000_000_000;
        _auctionPrice = price;
        _auctionLider.transfer({ value: sent, flag: 0 });
        _auctionLider = msg.sender;
        uint128 resent =  msg.value - cost;
        msg.sender.transfer({ value:  resent , flag: 0 });
    }

    function stopAuction() public {
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);
        require(msg.value >= Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        require(_onAuction == true, 301, "Nft not on auction");
        _onAuction = false;
        if(_auctionLider != address(0))
        {
        _auctionLider.transfer({ value: _auctionPrice *1_000_000_000, flag: 0 });
        _auctionLider = address(0);
        }
        _endAuctionTimestamp = 0;
        msg.sender.transfer({ value: 0, flag: 64 });
    }

    function removeFromSale() public override {
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);
        require(msg.value >= Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        require(_onSale == true, Errors.CONTRACT_IS_NOT_ON_SALE);

        _price = 0;
        _onSale = false;

        msg.sender.transfer({ value: 0, flag: 64 });
    }

    function buy() public override {
        require(msg.sender != address(0), Errors.INVALID_CALLER);
        uint128 cost = (uint256(_price * _royalty / 100000) < _royaltyMin ? _royaltyMin : _price * _royalty / 100000) + Constants.PROCESS_MIN + _price*1_000_000_000;
        require(
            msg.value >= cost, Errors.INVALID_VALUE
        );
        require(_onSale == true, Errors.CONTRACT_IS_NOT_ON_SALE);
        _onSale = false;
        uint128 commission =  _price*25_000_000; // 2.5 percents
        uint128 sent = _price*1_000_000_000 - commission;
        _customerProfitAddress.transfer({ value: commission, flag: 0 });
        _addrOwner.transfer({value: sent, flag: 0});
        _price = 0;
        transferAfterBuy(msg.sender);
        msg.sender.transfer({ value:  msg.value - cost , flag: 0 });
    }

    function transfer(address addrTo) public override {
        transferValidation();
        transferLogic();

        address oldIndexOwner = resolveIndex(
            _addrRoot,
            address(this),
            _addrOwner
        );
        IIndex(oldIndexOwner).destruct();
        address oldIndexOwnerRoot = resolveIndex(
            address(0),
            address(this),
            _addrOwner
        );
        IIndex(oldIndexOwnerRoot).destruct();

        _addrOwner = addrTo;

        deployIndex(addrTo);
    }

    function transferAfterBuy(address addrTo) private {

        address oldIndexOwner = resolveIndex(
            _addrRoot,
            address(this),
            _addrOwner
        );
        IIndex(oldIndexOwner).destruct();
        address oldIndexOwnerRoot = resolveIndex(
            address(0),
            address(this),
            _addrOwner
        );
        IIndex(oldIndexOwnerRoot).destruct();

        _addrOwner = addrTo;

        deployIndex(addrTo);
    }

    function transferValidation() internal virtual inline {
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);
        require(msg.value >= Constants.DEPLOY_SM, Errors.INVALID_VALUE);
        require(_onSale != true, Errors.CONTRACT_IS_ON_SALE);
    }

    function transferValidationWithoutOwner() internal virtual inline {
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);
        require(msg.value >= Constants.DEPLOY_SM, Errors.INVALID_VALUE);
        require(_onSale != true, Errors.CONTRACT_IS_ON_SALE);
    }

    function transferLogic() internal virtual inline {
    }

    function deployIndex(address owner) internal {
        TvmCell codeIndexOwner = _buildIndexCode(_addrRoot, owner);
        TvmCell stateIndexOwner = _buildIndexState(codeIndexOwner, address(this));
        new Index{stateInit: stateIndexOwner, value: Constants.DEPLOY_MIN}(_addrRoot);

        TvmCell codeIndexOwnerRoot = _buildIndexCode(address(0), owner);
        TvmCell stateIndexOwnerRoot = _buildIndexState(codeIndexOwnerRoot, address(this));
        new Index{stateInit: stateIndexOwnerRoot, value: Constants.DEPLOY_MIN}(_addrRoot);
    }

    function deployDataChunk(bytes chunk, uint128 chunkNumber) public override {
        require(msg.sender == _addrAuthor, Errors.INVALID_CALLER);
        require(msg.value >= Constants.DEPLOY_MIN + Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        TvmCell state = _buildDataChunkState(address(this), chunkNumber);

        new DataChunk
            {stateInit: state, value: Constants.DEPLOY_MIN}
            (chunk);

        // msg.sender.transfer({ value: 0, flag: 64 });
    }
    

    function getInfo() public view returns (
        string version,
        string name,
        string descriprion,
        address addrOwner,
        address addrAuthor,
        uint128 createdAt,
        address addrRoot,
        uint256 contentHash,
        string mimeType,
        uint8 chunks,
        uint128 chunkSize,
        uint128 size,
        Meta meta,
        uint128 royalty,
        uint128 royaltyMin,
        bool onSale,
        uint128 price,
        address auctionLider,
        bool onAuction,
        uint128 auctionPrice,
        uint256 endAuctionTimestamp

    ) {
        version = _version;
        name = _name;
        descriprion = _descriprion;
        addrOwner = _addrOwner;
        addrAuthor = _addrAuthor;
        createdAt = _createdAt;
        addrRoot = _addrRoot;
        contentHash = _contentHash;
        mimeType = _mimeType;
        chunks = _chunks;
        chunkSize = _chunkSize;
        size = _size;
        meta = _meta;
        royalty = _royalty;
        royaltyMin = _royaltyMin;
        onSale = _onSale;
        price = _price;
        auctionLider = _auctionLider;
        onAuction = _onAuction;
        auctionPrice = _auctionPrice;
        endAuctionTimestamp =  _endAuctionTimestamp;
    }


    
    function getMoney() public {
        require(msg.sender == _devProfitAddress, Errors.INVALID_CALLER);
        msg.sender.transfer({ value: 0, flag: 128 });
    }
}
