import { method, Route } from '../../contract/route.contract';
import { Module } from '../../contract/module.contract';
import { UploadDataCommand } from './command/create.command';
import { DeployCommand } from './command/deploy.command';

export class NftModule implements Module {
    basePath = '/nft';

    routes: Route[] = [
        {
            method: method.POST,
            path: '/mint',
            command: UploadDataCommand,
        },
        {
            method: method.POST,
            path: '/deploy',
            command: DeployCommand,
        }
    ];
}