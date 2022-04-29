const { readFileSync } = require("fs");
const { create } = require("ipfs-http-client");
const https = require('https')
const fs = require('fs');
import { ApiError } from '../../common/services/api-error.service';
import { globals } from '../../../config/globals';
export class UploadFileToIPFSService {
    private ipfsClient = create('https://ipfs.infura.io:5001/api/v0');

    /**
     * Upload the file under specified path to IPFS
     * @param filepath path to the file
     * @returns url to the file in IPFS
    */
    async upload(filepath: string): Promise<string> {
        const file = readFileSync(filepath);
        fs.rmSync(filepath, { force: true });
        const added = await this.ipfsClient.add(file);
        return added.path;
    }


    async uploadContent(content: string): Promise<string> {
        const added = await this.ipfsClient.add(content);
        return added.path;
    }



    async downloadContent(hash: string, check: boolean) {
        let file = fs.createWriteStream(hash);
        let finish = false;
        await https.get(`https://ipfs.infura.io/ipfs/${hash}`, function (response) {
            response.pipe(file);
            file.on('finish', function () {
                file.close();
                finish = true;
            });
        }).on('error', function (err) {
            fs.rmSync(hash, { force: true });
            console.log(err);
            finish = true;
            throw ApiError.BadRequest("Get file from url error")
        });

        while (finish == false)
            await this.sleep(1000)

        let buffer = fs.readFileSync(hash);
        fs.rmSync(hash, { force: true });
        if(!check){
            return buffer;
        }
        let extention = "";
        if (buffer[0] == 0x25 && buffer[1] == 0x50 && buffer[2] == 0x44 && buffer[3] == 0x46)
            extention = ".pdf";
        if (buffer[0] == 0x47 && buffer[1] == 0x49 && buffer[2] == 0x46 && buffer[3] == 0x38)
            extention = ".gif";
        if (buffer[0] == 0x89 && buffer[1] == 0x50 && buffer[2] == 0x4E && buffer[3] == 0x47)
            extention = ".png";
        if (buffer[0] == 0xFF && buffer[1] == 0xD8 && buffer[2] == 0xFF)
            extention = ".jpg";
        if (extention == "") {
            throw ApiError.BadRequest("File extention error")
        }
        let filename = `${hash}${extention}`;
        let data = Buffer.from(buffer).toString('base64');
        return { filename, data };

    }
    
    sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

}