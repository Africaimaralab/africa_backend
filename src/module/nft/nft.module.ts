import { method, Route } from '../../contract/route.contract';
import { Module } from '../../contract/module.contract';
import { UploadDataCommand } from './command/create.command';

export class NftModule implements Module {
    basePath = '/nft';

    routes: Route[] = [
        {
            method: method.POST,
            path: '/upload_data',
            command: UploadDataCommand,
        },
    ];
}