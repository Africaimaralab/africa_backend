import { Mint } from "./True-NFT/scripts/mint";
export class MintService {

    sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    async minting (url : string, addrToTransfer: string) {

        const mint = new Mint();
        let address = await mint.minting(url, addrToTransfer);
        return address;
    } 

}