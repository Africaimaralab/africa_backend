import { method, Route } from '../../contract/route.contract';
import { Module } from '../../contract/module.contract';
import { DownloadCommand } from './command/download.command';
import { UploadCommand } from './command/upload.command';

export class IpfsModule implements Module {
    basePath = '/ipfs';

    routes: Route[] = [
        {
            method: method.POST,
            path: '/upload',
            command: UploadCommand,
        },
        {
            method: method.GET,
            path: '/download',
            command: DownloadCommand,
        }
    ];
}