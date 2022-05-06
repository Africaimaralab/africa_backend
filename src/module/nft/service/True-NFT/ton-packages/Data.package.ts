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