export default {
  collection:
    "0:28e28ca0a62fbdb8f49a632488c68cc58f06cd55c1ad4d5c81d29b63543b97cb", // collection address where to mint
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
