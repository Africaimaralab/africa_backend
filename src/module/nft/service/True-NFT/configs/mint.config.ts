export default {
  collection:
    "0:140ec03af0a4f0acaf95bfa930a99a449455011ebabb62372f3ec91922c8c838", // collection address where to mint
  // array of NFTs
  items: [
    {
      wid: 0, // NFT content workchainId
      name: "Poha", // name of NFT
      descriprion: "bafybeifh6psa7izsamo4qwii6gesqcf5652yck5jipqiayizrkna4twvsu.ipfs.infura-ipfs.io", // description of NFT
      mimeType: "image/jpg", // mimeType of NFT content
      royalty: 100, // royalty part, range between 0 and 100000, where 100000 is 100.000%
      royaltyMin: 1, // minimum recieve in grams (author will recieve biggest part)
      meta: {
        height: 0, // optional
        width: 0, // optional
        duration: 0, // optional
        extra: "", // optional
        json: "", // optional
      },
      content: "../configs/test.jpg",
    },
  ],
} as const;
