import { GraphQLClient } from 'graphql-request'
import { globals } from '../../../config/globals';
import fs from 'fs';
import path from "path";
import { createClient, TonContract } from "@rsquad/ton-utils";
const { exec } = require("child_process");
import { Account } from "@tonclient/appkit"
import { libNode } from "@tonclient/lib-node";
import {
  signerKeys,
  TonClient,
  MessageBodyType,
  signerNone,
  abiContract,
} from "@tonclient/core"

TonClient.useBinaryLibrary(libNode); 
export class GetTokensList {

     async getTokensList() {
        const endpoint = 'https://net.ton.dev/graphql'
      
        const graphQLClient = new GraphQLClient(endpoint, {
          credentials: 'include',
          mode: 'cors',
        })
      
        const query = `{ accounts( filter: { code_hash: { eq: "5fed879a1f60253e0538aba276787146ec85f29c925a0ab824b0e9e2b6090b3d" } } ) { id } }`
        const data = await graphQLClient.request(query)
        let items = data.accounts;
        for (let index = 0; index < items.length; ++index) {
                let res = await this.runLocalGetAddrData(items[index].id)
                let link = await this.runLocalGetLink(res)
                link = Buffer.from(link, 'hex').toString('utf8');
                console.log(link)
        }
     }

    async runLocalGetAddrData(address: string): Promise<string> {
        const client = new TonClient({
          network: {
            endpoints: ['net.ton.dev']
          }
        });
        const TokenRootLabs = {
          abi: JSON.parse(fs.readFileSync(globals.ABI_PATH + "\\Index.abi.json").toString()),
          tvc: fs.readFileSync(globals.ABI_PATH + "\\Index.tvc").toString("base64")
        }
        const tip3create = new Account(
        TokenRootLabs,
          {
            address:address,
            client}
          );
        const name = await(tip3create.runLocal("getInfo",{}).catch(e => console.log("ERROR:", e)))
        
        let res = name?.decoded?.output?.addrData;
        return res;
        
    }

    async runLocalGetLink(address: string): Promise<string> {
        const client = new TonClient({
          network: {
            endpoints: ['net.ton.dev']
          }
        });
        const TokenRootLabs = {
          abi: JSON.parse(fs.readFileSync(globals.ABI_PATH + "\\Data.abi.json").toString()),
          tvc: fs.readFileSync(globals.ABI_PATH + "\\Data.tvc").toString("base64")
        }
        const tip3create = new Account(
        TokenRootLabs,
          {
            address:address,
            client}
          );
        const name = await(tip3create.runLocal("getInfo",{}).catch(e => console.log("ERROR:", e)))
        console.log(name)
        let res = name?.decoded?.output?.descriprion
        return res
    }
}