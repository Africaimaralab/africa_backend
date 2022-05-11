export default {"abi":{
	"ABI version": 2,
	"version": "2.2",
	"header": ["time"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
				{"name":"name","type":"string"},
				{"name":"descriprion","type":"string"},
				{"name":"addrOwner","type":"address"},
				{"name":"addrAuthor","type":"address"},
				{"name":"contentHash","type":"uint256"},
				{"name":"mimeType","type":"string"},
				{"name":"chunks","type":"uint8"},
				{"name":"chunkSize","type":"uint128"},
				{"name":"size","type":"uint128"},
				{"components":[{"name":"height","type":"uint128"},{"name":"width","type":"uint128"},{"name":"duration","type":"uint128"},{"name":"extra","type":"string"},{"name":"json","type":"string"}],"name":"meta","type":"tuple"},
				{"name":"codeIndex","type":"cell"},
				{"name":"codeDataChunk","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "setRoyalty",
			"inputs": [
				{"name":"royalty","type":"uint128"},
				{"name":"royaltyMin","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "putOnSale",
			"inputs": [
				{"name":"price","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "putOnAuction",
			"inputs": [
				{"name":"initPrice","type":"uint128"},
				{"name":"time","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "endAuction",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "auction",
			"inputs": [
				{"name":"price","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "stopAuction",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "removeFromSale",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "buy",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "transfer",
			"inputs": [
				{"name":"addrTo","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "deployDataChunk",
			"inputs": [
				{"name":"chunk","type":"bytes"},
				{"name":"chunkNumber","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getInfo",
			"inputs": [
			],
			"outputs": [
				{"name":"version","type":"string"},
				{"name":"name","type":"string"},
				{"name":"descriprion","type":"string"},
				{"name":"addrOwner","type":"address"},
				{"name":"addrAuthor","type":"address"},
				{"name":"createdAt","type":"uint128"},
				{"name":"addrRoot","type":"address"},
				{"name":"contentHash","type":"uint256"},
				{"name":"mimeType","type":"string"},
				{"name":"chunks","type":"uint8"},
				{"name":"chunkSize","type":"uint128"},
				{"name":"size","type":"uint128"},
				{"components":[{"name":"height","type":"uint128"},{"name":"width","type":"uint128"},{"name":"duration","type":"uint128"},{"name":"extra","type":"string"},{"name":"json","type":"string"}],"name":"meta","type":"tuple"},
				{"name":"royalty","type":"uint128"},
				{"name":"royaltyMin","type":"uint128"},
				{"name":"onSale","type":"bool"},
				{"name":"price","type":"uint128"},
				{"name":"auctionLider","type":"address"},
				{"name":"onAuction","type":"bool"},
				{"name":"auctionPrice","type":"uint128"},
				{"name":"endAuctionTimestamp","type":"uint256"}
			]
		},
		{
			"name": "getMoney",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "resolveDataChunk",
			"inputs": [
				{"name":"addrData","type":"address"},
				{"name":"chunkNumber","type":"uint128"}
			],
			"outputs": [
				{"name":"addrDataChunk","type":"address"}
			]
		},
		{
			"name": "resolveCodeHashIndex",
			"inputs": [
				{"name":"addrRoot","type":"address"},
				{"name":"addrOwner","type":"address"}
			],
			"outputs": [
				{"name":"codeHashIndex","type":"uint256"}
			]
		},
		{
			"name": "resolveIndex",
			"inputs": [
				{"name":"addrRoot","type":"address"},
				{"name":"addrData","type":"address"},
				{"name":"addrOwner","type":"address"}
			],
			"outputs": [
				{"name":"addrIndex","type":"address"}
			]
		},
		{
			"name": "_id",
			"inputs": [
			],
			"outputs": [
				{"name":"_id","type":"uint256"}
			]
		},
		{
			"name": "_deployed",
			"inputs": [
			],
			"outputs": [
				{"name":"_deployed","type":"bool"}
			]
		}
	],
	"data": [
		{"key":1,"name":"_id","type":"uint256"}
	],
	"events": [
	],
	"fields": [
		{"name":"_pubkey","type":"uint256"},
		{"name":"_timestamp","type":"uint64"},
		{"name":"_constructorFlag","type":"bool"},
		{"name":"_codeIndex","type":"cell"},
		{"name":"_codeDataChunk","type":"cell"},
		{"name":"_devProfitAddress","type":"address"},
		{"name":"_customerProfitAddress","type":"address"},
		{"name":"_version","type":"string"},
		{"name":"_name","type":"string"},
		{"name":"_descriprion","type":"string"},
		{"name":"_addrOwner","type":"address"},
		{"name":"_addrAuthor","type":"address"},
		{"name":"_createdAt","type":"uint128"},
		{"name":"_addrRoot","type":"address"},
		{"name":"_contentHash","type":"uint256"},
		{"name":"_mimeType","type":"string"},
		{"name":"_chunks","type":"uint8"},
		{"name":"_chunkSize","type":"uint128"},
		{"name":"_size","type":"uint128"},
		{"components":[{"name":"height","type":"uint128"},{"name":"width","type":"uint128"},{"name":"duration","type":"uint128"},{"name":"extra","type":"string"},{"name":"json","type":"string"}],"name":"_meta","type":"tuple"},
		{"name":"_id","type":"uint256"},
		{"name":"_deployed","type":"bool"},
		{"name":"_royalty","type":"uint128"},
		{"name":"_royaltyMin","type":"uint128"},
		{"name":"_onSale","type":"bool"},
		{"name":"_price","type":"uint128"},
		{"name":"_auctionLider","type":"address"},
		{"name":"_onAuction","type":"bool"},
		{"name":"_auctionPrice","type":"uint128"},
		{"name":"_endAuctionTimestamp","type":"uint256"}
	]
}


,"image":"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"}