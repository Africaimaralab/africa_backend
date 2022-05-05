import { KeyPair, TonClient } from "@tonclient/core";
import pkgSafeMultisigWallet from "../ton-packages/SCMS.package";
import pkgNftRoot from "../ton-packages/NftRootCustomMint.package";
import pkgIndexBasis from "../ton-packages/IndexBasis.package";
import pkgData from "../ton-packages/Data.package";
import pkgIndex from "../ton-packages/Index.package";
import pkgDataChunk from "../ton-packages/DataChunk.package";
import { createClient, TonContract } from "@rsquad/ton-utils";
import { hexToUtf8, utf8ToHex } from "@rsquad/ton-utils/dist/convert";
import {
  callThroughMultisig,
  sendThroughMultisig,
} from "@rsquad/ton-utils/dist/net";
import { TonPackage } from "@rsquad/ton-utils/dist/ton-contract";
import config from "../configs/deploy-collection.config";

export class Deploy {
      async deploy()
      {
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
    console.log(keys);

    console.log("deploy and init collection");

    const smcNftRoot: TonContract = new TonContract({
      client,
      name: "NftRoot",
      tonPackage: pkgNftRoot,
      keys,
    });

    console.log("step1");

    await smcNftRoot.calcAddress({
      initialData: {
        _addrOwner: smcWallet.address,
      },
    });

    console.log("step2");

    await sendThroughMultisig({
      smcSafeMultisigWallet: smcWallet,
      dest: <string> smcNftRoot.address,
      value: 1_000_000_000,
    });

    await smcNftRoot.deploy({
      input: {
        mintType: config.mintType,
        fee: config.fee,
        name: utf8ToHex(config.name),
        descriprion: utf8ToHex(config.description),
        icon: utf8ToHex(config.icon.type == "base64" ? config.icon.value : ""),
        addrAuthor: smcWallet.address,
      },
      initialData: {
        _addrOwner: smcWallet.address,
      },
    });

    const setCode = async (fnName: string, pkg: TonPackage) => {
      await callThroughMultisig({
        client,
        smcSafeMultisigWallet: smcWallet,
        abi: pkgNftRoot.abi,
        functionName: fnName,
        input: await client.boc.get_code_from_tvc({
          tvc: pkg.image,
        }),
        dest: <string>smcNftRoot.address,
        value: 200_000_000,
      });
    };

    await setCode("setCodeIndex", pkgIndex);
    await setCode("setCodeIndexBasis", pkgIndexBasis);
    await setCode("setCodeData", pkgData);
    await setCode("setCodeDataChunk", pkgDataChunk);

    console.log(`collection address: ${smcNftRoot.address}`);

    const info = (await smcNftRoot.run({ functionName: "getInfo" })).value;
    console.log(`collection info: `, {
      ...info,
      name: hexToUtf8(info.name),
      descriprion: hexToUtf8(info.descriprion),
    });
 
  } catch (err) {
    console.log("Error! ", err);

  }
};
}
