export default {"abi":{"ABI version":2,"version":"2.2","header":["time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"mintType","type":"uint8"},{"name":"fee","type":"uint128"},{"name":"name","type":"string"},{"name":"descriprion","type":"string"},{"name":"icon","type":"bytes"},{"name":"addrAuthor","type":"address"}],"outputs":[]},{"name":"getInfo","inputs":[],"outputs":[{"name":"version","type":"string"},{"name":"mintType","type":"uint8"},{"name":"fee","type":"uint128"},{"name":"name","type":"string"},{"name":"descriprion","type":"string"},{"name":"icon","type":"bytes"},{"name":"totalSupply","type":"uint128"},{"name":"addrAuthor","type":"address"},{"name":"addrOwner","type":"address"}]},{"name":"setCodeIndex","inputs":[{"name":"code","type":"cell"}],"outputs":[]},{"name":"setCodeIndexBasis","inputs":[{"name":"code","type":"cell"}],"outputs":[]},{"name":"setCodeData","inputs":[{"name":"code","type":"cell"}],"outputs":[]},{"name":"setCodeDataChunk","inputs":[{"name":"code","type":"cell"}],"outputs":[]},{"name":"mintNft","inputs":[{"name":"wid","type":"int8"},{"name":"name","type":"string"},{"name":"descriprion","type":"string"},{"name":"contentHash","type":"uint256"},{"name":"mimeType","type":"string"},{"name":"chunks","type":"uint8"},{"name":"chunkSize","type":"uint128"},{"name":"size","type":"uint128"},{"components":[{"name":"height","type":"uint128"},{"name":"width","type":"uint128"},{"name":"duration","type":"uint128"},{"name":"extra","type":"string"},{"name":"json","type":"string"}],"name":"meta","type":"tuple"}],"outputs":[]},{"name":"resolveCodeHashIndex","inputs":[{"name":"addrRoot","type":"address"},{"name":"addrOwner","type":"address"}],"outputs":[{"name":"codeHashIndex","type":"uint256"}]},{"name":"resolveIndex","inputs":[{"name":"addrRoot","type":"address"},{"name":"addrData","type":"address"},{"name":"addrOwner","type":"address"}],"outputs":[{"name":"addrIndex","type":"address"}]},{"name":"resolveCodeHashData","inputs":[],"outputs":[{"name":"codeHashData","type":"uint256"}]},{"name":"resolveData","inputs":[{"name":"addrRoot","type":"address"},{"name":"id","type":"uint256"}],"outputs":[{"name":"addrData","type":"address"}]},{"name":"_inited","inputs":[],"outputs":[{"name":"_inited","type":"bool"}]}],"data":[{"key":1,"name":"_addrOwner","type":"address"}],"events":[],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"_codeData","type":"cell"},{"name":"_codeIndex","type":"cell"},{"name":"_checkList","type":"uint8"},{"name":"_addrOwner","type":"address"},{"name":"_addrAuthor","type":"address"},{"name":"_addrBasis","type":"address"},{"name":"_version","type":"string"},{"name":"_totalSupply","type":"uint128"},{"name":"_name","type":"string"},{"name":"_descriprion","type":"string"},{"name":"_icon","type":"bytes"},{"name":"_inited","type":"bool"},{"name":"_codeDataChunk","type":"cell"},{"name":"_codeIndexBasis","type":"cell"},{"name":"_mintType","type":"uint8"},{"name":"_fee","type":"uint128"}]},"image":"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"}