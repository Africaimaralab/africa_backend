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
import { IPFSService } from '../../ipfs/services/ipfs.service';
import { ItemDTO } from '../dto/item.dto';
var fetch = require('node-fetch');

var fetch = require('node-fetch');

TonClient.useBinaryLibrary(libNode); 
export class GetTokensList {

     async getTokensList() {
        const endpoint = 'https://net.ton.dev/graphql'
      
        const graphQLClient = new GraphQLClient(endpoint, {
          credentials: 'include',
          mode: 'cors',
        })
      //"0xfe0dc6a66bc3ede907b47ee040dbec1babc042646745dd90b2d38a099abae4f8"
        const query = `{ accounts( filter: { code_hash: { eq: "fe0dc6a66bc3ede907b47ee040dbec1babc042646745dd90b2d38a099abae4f8" } } ) { id } }`
        const data = await graphQLClient.request(query);
        let items = data.accounts;
        let itemsInfo: ItemDTO[] = [];
        for (let index = 0; index < items.length; ++index) {
                let res = await this.runLocalGetAddrData(items[index].id)
                let item = await this.runLocalGetLink(res)
                itemsInfo.push(item);

        }
        return itemsInfo;
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

    // async runLocalGetLink(address: string): Promise<ItemDTO> {
        async runLocalGetLink(address: string){
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
        const tokenInfo = await(tip3create.runLocal("getInfo",{}).catch(e => console.log("ERROR:", e)))
    
        let res = tokenInfo?.decoded?.output?.descriprion
        let link = Buffer.from(res, 'hex').toString('utf8');
        let data;
      

        await fetch("https://" + link)
                .then(res => res.text())
                .then(text => data = text)


        let item: ItemDTO = JSON.parse(data);
        item.address = address;
        item.owner = tokenInfo?.decoded?.output?.addrOwner;
        item.creator = tokenInfo?.decoded?.output?.addrAuthor;
        item.createdAt = tokenInfo?.decoded?.output?.createdAt;



        return item;
    }
}