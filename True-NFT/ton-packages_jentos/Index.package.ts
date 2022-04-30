export default {
    "abi": {
    	"ABI version": 2,
    	"version": "2.2",
    	"header": ["time", "expire"],
    	"functions": [
    		{
    			"name": "constructor",
    			"inputs": [
    				{"name":"root","type":"address"}
    			],
    			"outputs": [
    			]
    		},
    		{
    			"name": "getInfo",
    			"inputs": [
    			],
    			"outputs": [
    				{"name":"addrRoot","type":"address"},
    				{"name":"addrOwner","type":"address"},
    				{"name":"addrData","type":"address"}
    			]
    		},
    		{
    			"name": "destruct",
    			"inputs": [
    			],
    			"outputs": [
    			]
    		}
    	],
    	"data": [
    		{"key":1,"name":"_addrData","type":"address"}
    	],
    	"events": [
    	],
    	"fields": [
    		{"name":"_pubkey","type":"uint256"},
    		{"name":"_timestamp","type":"uint64"},
    		{"name":"_constructorFlag","type":"bool"},
    		{"name":"_addrRoot","type":"address"},
    		{"name":"_addrOwner","type":"address"},
    		{"name":"_addrData","type":"address"}
    	]
    },
    "image": "te6ccgECGgEAArQAAgaK2zUZAQQkiu1TIOMDIMD/4wIgwP7jAvILFgMCGAOa7UTQ10nDAfhmifhpIds80wABn4ECANcYIPkBWPhC+RDyqN7TPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwH4I7zyudMfAds88jwQDQQDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8FRUEAzwgghAV78DauuMCIIIQR1ZU3LrjAiCCEEfGLdq64wIRBwUDJjD4RvLgTPhCbuMA0ds8MNs88gAUBgkANPhJ+EzHBfLgZPhMyM+FCM6Ab89AyYEAoPsABIAw+EJu4wD4RvJzIZPU0dDe+kDR+EGIyM+OK2zWzM7J2zwgbvLQZSBu8n/Q+kD6QDD4SfhMxwXy4GT4ACH4avhrDRkKCAIaiccFkyD4at4w2zzyABAJADr4TPhL+Er4Q/hCyMv/yz/Pg85ZyM4ByM7NzcntVAIY0CCLOK2zWMcFioriCwwBCtdN0Ns8DABC10zQiy9KQNcm9AQx0wkxiy9KGNcmINdKwgGS102SMG3iAhbtRNDXScIBjoDjDQ4UAkpw7UTQ9AWJIHEjgED0Do6A3/hs+Gv4aoBA9A7yvdcL//hicPhjEA8BAokQAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA4Iw+Eby4Ez4Qm7jANHbPCOOKCXQ0wH6QDAxyM+HIM5xzwthXiDIz5JXvwNqzlnIzgHIzs3Nzclw+wCSXwPi4wDyABQTEgAo7UTQ0//TPzH4Q1jIy//LP87J7VQADPhK+Ev4TABC7UTQ0//TP9MAMfpA1NHQ+kDU0dD6QNH4bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEYFwAUc29sIDAuNTkuNAAAAAwg+GHtHtk="
}
