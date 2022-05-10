## Description of contracts
<details>
<summary>
Data.sol
</summary>
Data.sol is a token contract that defines token parameters and implements token management methods.
  
To implement the necessary logic, the following fields were added to the contract of the TrueNFT-2 standard, which uniquely determine the state of the token:
  
  ```
    bool _onSale;
    uint128 _price;
    address _auctionLider;
    bool _onAuction;
    uint128 _auctionPrice;
    uint256 _endAuctionTimestamp;
  ```
  Let's take a closer look at the changes in the methods of the original contract. Below is the function of putting up for sale, first we check that the actions are performed by the owner, then we check whether enough gas has been attached and whether we can put it up for sale. If all conditions are met, the price and the sale status flag are set.
  
 ```
  
    function putOnSale(uint128 price) public override {
        require(msg.sender == _addrOwner, Errors.INVALID_CALLER);
        require(msg.value >= Constants.PROCESS_MIN, Errors.INVALID_VALUE);
        require(_onAuction == false, 302, "Nft already on auction");
        _price = price;
        _onSale = true;
        msg.sender.transfer({ value: 0, flag: 64 });
    }
```
The removeFromSale() method is similar to putting up for sale. Only the owner of the contract can also call it.
  
  
Any user can invoke the token purchase method by attaching a sufficient number of tokens for payment. If the token is on sale and all conditions are met, the token becomes unavailable for sale, the value of the token is transferred to the owner. Next, the token owner changes, for which the transferAfterBuy method was written, similar to the transfer method from the original contract. The difference is that this method is called upon purchase and is available for calls only within the contract, and the transfer method is available only for calls on behalf of the owner.
  
```
  function buy() public override {
        require(msg.sender != address(0), Errors.INVALID_CALLER);
        uint128 cost = (uint256(_price * _royalty / 100000) < _royaltyMin ? _royaltyMin : _price * _royalty / 100000) + Constants.PROCESS_MIN + _price*1_000_000_000;
        require(
            msg.value >= cost, Errors.INVALID_VALUE
        );
        require(_onSale == true, Errors.CONTRACT_IS_NOT_ON_SALE);
        _onSale = false;
        _addrOwner.transfer({value: _price*1_000_000_000, flag: 0});
        _price = 0;
        transferAfterBuy(msg.sender);
        msg.sender.transfer({ value:  msg.value - cost , flag: 0 });
    }
 ```
  The contract also contains all the necessary methods for conducting an auction. The owner can put the token up for auction with a set price and time limit. The method of putting up for auction is similar to the method of putting up for sale.
  
  To participate in the auction, it is necessary that the offered price is higher than the current price and that the auction is active. If all conditions are met, the previous bet is returned to the player, the current lot price and the current leader change. The remaining funds, unspent for payment and execution, are returned to the player.
  
  
  ```
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
  ```
                                                    
 Anyone can complete the auction. If the auction time is over and the winner is determined, the funds will be transferred to the owner of the token, after which it will be transferred to the possession of the winner.
 Separately, it is worth noting the stopAuction() method, available only to the owner. The method is available at any time until the endAuction() method is called, summing up the auction results. This method completely cancels the current auction results, the token remains with the owner, and the deposited funds are returned. After summing up the auction results, this method becomes unavailable.


</details>


## Delpoy
<details>
<summary>
  Deploy
  
</summary>
The deployment of the contract is carried out by means of a script. Packages containing the contract abi and image. Image - base64 decoded contract .tvc file are used for deployment.
  
 After the compiled files have been encoded and placed in packages, you can call the root contract deployment script. After the deployment, we get the address of the contract that we need to get the `codeHashData`.
  
 `tonos-cli run 0:337c4eda51efcdf3c8fee2ad6065bf33b9e5f5b23f0ba518f2063e21f7a8c777 getInfo input.json --abi NftRootCustomMint.abi.json`
  
  
  Calling this method at the address of the assigned contract allows you to get `addrIndexBasis`.
 
  
  At the received address `addrIndexBasis` we can call the getInfo method again: 
  
  
  `tonos-cli run 0:544bde5ed29403f004086cf286776b28b7b5b8ccfc9b355377e582ad4066da9a getInfo input.json --abi IndexBasis.abi.json`
  
  
  So we get the `codeHashData`, the same for all tokens, which allows us to get the addresses of all tokens through a GraphQL query.
  


</details>

  
