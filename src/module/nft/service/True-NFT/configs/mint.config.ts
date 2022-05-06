export default {
  collection:
    "0:337c4eda51efcdf3c8fee2ad6065bf33b9e5f5b23f0ba518f2063e21f7a8c777", // collection address where to mint
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
