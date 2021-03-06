import { KeyPair, TonClient } from "@tonclient/core";
import pkgSafeMultisigWallet from "../ton-packages/SCMS.package";
import pkgNftRoot from "../ton-packages/NftRootCustomMint.package";
import pkgData from "../ton-packages/Data.package";
import pkgDataChunk from "../ton-packages/DataChunk.package";
import { createClient, sleep, TonContract } from "@rsquad/ton-utils";
import {
  base64ToHex,
  hexToBase64,
  hexToUtf8,
  utf8ToHex,
} from "@rsquad/ton-utils/dist/convert";
import { callThroughMultisig, sendThroughMultisig} from "@rsquad/ton-utils/dist/net";
import config from "../configs/mint.config";
import { sha256 } from "js-sha256";
import * as fs from "fs";
import { globals } from "../../../../../config/globals";
import path from "path";

export class Mint {



  async minting(description: string, addrToTransfer: string) {
    try {

      const client: TonClient = createClient();

      const smcWallet: TonContract = new TonContract({
        client,
        name: "SafeMultisigWallet",
        tonPackage: pkgSafeMultisigWallet,
        address: "0:0eb093156b485497001f06cf5332861b34f306963c2476af5f433fe7050da0a0",
        keys: {
          public: "4ba7586a7bc1e621b3dc0630c7562434a0052c592c1a63ea18a85496d7ff6b1a",
          secret: "d30409bdc0d1669ff818013240f254895e8854b4f8ba7367daf6c59d6cdd8fe0",
        },
      });

      
      let keys: KeyPair;

      keys = await client.crypto.generate_random_sign_keys();

      

      console.log("deploy and init collection");

      const smcNftRoot: TonContract = new TonContract({
        client,
        name: "NftRoot",
        tonPackage: pkgNftRoot,
        address: config.collection,
      });

      await sendThroughMultisig({
        smcSafeMultisigWallet: smcWallet,
        dest: <string> "0:9098321675efecaead91d6a8f034e7efc513a3779b4fb29797c8ffd297c23ed2",
        value: 1_000_000_000,
      });

      console.log(`collection address: ${smcNftRoot.address}`);

      const info = (await smcNftRoot.run({ functionName: "getInfo" })).value;
      console.log(`collection info: `, {
        ...info,
        name: hexToUtf8(info.name),
        descriprion: hexToUtf8(info.descriprion),
      });

      for (let j = 0; j < config.items.length; j++) {
        console.log(`mint NFT ${j + 1} of ${config.items.length}`);

        const item = config.items[j];

        const content = fs.readFileSync(path.join(globals.ABI_PATH, "test.jpg"));
        const chunkSize = 15600;

        const bufferChunks: any[] = [];
        let i = 0;

        while (i < content.length) {
          bufferChunks.push(
            content.slice(
              i,
              (i +=
                content.length - i > chunkSize ? chunkSize : content.length - i)
            )
          );
        }

        const contentHash = `0x${sha256(content)}`;
        const size = content.length;
        const chunks = bufferChunks.map((chunk) => chunk.toString("base64"));

        const nftId = (
          await smcNftRoot.run({
            functionName: "getInfo",
            input: {},
          })
        ).value.totalSupply;

        await callThroughMultisig({
          client,
          smcSafeMultisigWallet: smcWallet,
          abi: pkgNftRoot.abi,
          functionName: "mintNft",
          input: {
            wid: "0",
            name: "0",
            descriprion: utf8ToHex(description),
            contentHash: "0",
            mimeType: "0",
            chunks: "0",
            chunkSize: "0",
            size: "0",
            meta: {
              height: "0",
              width: "0",
              duration: "0",
              extra: "0",
              json: "0",
            },
          },
          dest: <string>smcNftRoot.address,
          value: 1_000_000_000,
        });

        const addrData = (
          await smcNftRoot.run({
            functionName: "resolveData",
            input: {
              addrRoot: smcNftRoot.address,
              id: nftId,
            },
          })
        ).value.addrData;

        if (process.env.NETWORK !== "LOCAL") await sleep(60000);

        const smcData = new TonContract({
          client,
          name: "Data",
          tonPackage: pkgData,
          address: addrData,
        });

        console.log("Your NFT address: ", smcData.address);
        console.log("Your NFT id: ", nftId);

        await callThroughMultisig({
          client,
          smcSafeMultisigWallet: smcWallet,
          abi: pkgData.abi,
          functionName: "setRoyalty",
          input: {
            royalty: item.royalty,
            royaltyMin: item.royaltyMin,
          },
          dest: <string>smcData.address,
          value: 500_000_000,
        });

        let addrDataChunk: string;
        const addrsDataChunk: any[] = [];
        for (let i = 0; i < chunks.length; i++) {
          addrDataChunk = (
            await smcData.run({
              functionName: "resolveDataChunk",
              input: {
                addrData: smcData.address,
                chunkNumber: i,
              },
            })
          ).value.addrDataChunk;

          addrsDataChunk.push(addrDataChunk);

          console.log(`deploy chunk ${i + 1} of ${chunks.length}`);

          await callThroughMultisig({
            client,
            smcSafeMultisigWallet: smcWallet,
            abi: pkgData.abi,
            functionName: "deployDataChunk",
            input: {
              chunk: base64ToHex(chunks[i]),
              chunkNumber: i,
            },
            dest: <string>smcData.address,
            value: 500_000_000,
          });

        console.log(`chunks: `, addrsDataChunk);
        console.log("to: " + addrToTransfer)
          await callThroughMultisig({
            client,
            smcSafeMultisigWallet: smcWallet,
            abi: pkgData.abi,
            functionName: "transfer",
            input: {
              addrTo: addrToTransfer
            },
            dest: <string>smcData.address,
            value: 1_000_000_000,
          });
        }
        return smcData.address;

      }

    } catch (err) {
      console.log("Error! ", err);

    }

  }
};