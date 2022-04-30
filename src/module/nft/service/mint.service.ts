import { Mint } from "./True-NFT/scripts/mint";
export class MintService {

    sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    async minting (url : string, addrToTransfer: string) {

        console.log("тута1111 блять")
        const mint = new Mint();
        // console.log("минтинг")
        let address = await mint.minting(url, addrToTransfer);
        return address;
    } 

}