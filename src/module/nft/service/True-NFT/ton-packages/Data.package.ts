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