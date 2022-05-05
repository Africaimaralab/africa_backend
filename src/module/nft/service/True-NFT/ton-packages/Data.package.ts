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