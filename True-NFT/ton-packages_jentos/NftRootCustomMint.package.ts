export default {
    "abi": {
    	"ABI version": 2,
    	"version": "2.2",
    	"header": ["time", "expire"],
    	"functions": [
    		{
    			"name": "constructor",
    			"inputs": [
    				{"name":"mintType","type":"uint8"},
    				{"name":"fee","type":"uint128"},
    				{"name":"name","type":"string"},
    				{"name":"description","type":"string"},
    				{"name":"icon","type":"bytes"},
    				{"name":"addrAuthor","type":"address"}
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
    				{"name":"mintType","type":"uint8"},
    				{"name":"fee","type":"uint128"},
    				{"name":"name","type":"string"},
    				{"name":"description","type":"string"},
    				{"name":"icon","type":"bytes"},
    				{"name":"totalSupply","type":"uint128"},
    				{"name":"addrAuthor","type":"address"},
    				{"name":"addrOwner","type":"address"}
    			]
    		},
    		{
    			"name": "setCodeIndex",
    			"inputs": [
    				{"name":"code","type":"cell"}
    			],
    			"outputs": [
    			]
    		},
    		{
    			"name": "setCodeIndexBasis",
    			"inputs": [
    				{"name":"code","type":"cell"}
    			],
    			"outputs": [
    			]
    		},
    		{
    			"name": "setCodeData",
    			"inputs": [
    				{"name":"code","type":"cell"}
    			],
    			"outputs": [
    			]
    		},
    		{
    			"name": "mintNft",
    			"inputs": [
    				{"name":"meta","type":"string"}
    			],
    			"outputs": [
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
    			"name": "resolveCodeHashData",
    			"inputs": [
    			],
    			"outputs": [
    				{"name":"codeHashData","type":"uint256"}
    			]
    		},
    		{
    			"name": "resolveData",
    			"inputs": [
    				{"name":"addrRoot","type":"address"},
    				{"name":"id","type":"uint256"}
    			],
    			"outputs": [
    				{"name":"addrData","type":"address"}
    			]
    		},
    		{
    			"name": "_inited",
    			"inputs": [
    			],
    			"outputs": [
    				{"name":"_inited","type":"bool"}
    			]
    		}
    	],
    	"data": [
    		{"key":1,"name":"_addrOwner","type":"address"}
    	],
    	"events": [
    	],
    	"fields": [
    		{"name":"_pubkey","type":"uint256"},
    		{"name":"_timestamp","type":"uint64"},
    		{"name":"_constructorFlag","type":"bool"},
    		{"name":"_codeData","type":"cell"},
    		{"name":"_codeIndex","type":"cell"},
    		{"name":"_checkList","type":"uint8"},
    		{"name":"_addrOwner","type":"address"},
    		{"name":"_addrAuthor","type":"address"},
    		{"name":"_addrBasis","type":"address"},
    		{"name":"_version","type":"string"},
    		{"name":"_totalSupply","type":"uint128"},
    		{"name":"_name","type":"string"},
    		{"name":"_description","type":"string"},
    		{"name":"_icon","type":"bytes"},
    		{"name":"_inited","type":"bool"},
    		{"name":"_codeIndexBasis","type":"cell"},
    		{"name":"_mintType","type":"uint8"},
    		{"name":"_fee","type":"uint128"}
    	]
    },
    "image": "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"
}
