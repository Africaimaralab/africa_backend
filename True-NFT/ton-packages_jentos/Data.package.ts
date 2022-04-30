export default {
    "abi": {
    	"ABI version": 2,
    	"version": "2.2",
    	"header": ["time"],
    	"functions": [
    		{
    			"name": "constructor",
    			"inputs": [
    				{"name":"addrOwner","type":"address"},
    				{"name":"addrAuthor","type":"address"},
    				{"name":"meta","type":"string"},
    				{"name":"codeIndex","type":"cell"}
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
    			"name": "getInfo",
    			"inputs": [
    			],
    			"outputs": [
    				{"name":"version","type":"string"},
    				{"name":"addrOwner","type":"address"},
    				{"name":"addrAuthor","type":"address"},
    				{"name":"createdAt","type":"uint128"},
    				{"name":"addrRoot","type":"address"},
    				{"name":"meta","type":"string"},
    				{"name":"royalty","type":"uint128"},
    				{"name":"royaltyMin","type":"uint128"}
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
    		{"name":"_version","type":"string"},
    		{"name":"_addrOwner","type":"address"},
    		{"name":"_addrAuthor","type":"address"},
    		{"name":"_createdAt","type":"uint128"},
    		{"name":"_addrRoot","type":"address"},
    		{"name":"_meta","type":"string"},
    		{"name":"_id","type":"uint256"},
    		{"name":"_deployed","type":"bool"},
    		{"name":"_royalty","type":"uint128"},
    		{"name":"_royaltyMin","type":"uint128"},
    		{"name":"_onSale","type":"bool"},
    		{"name":"_price","type":"uint128"}
    	]
    },
    "image": "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"
}
