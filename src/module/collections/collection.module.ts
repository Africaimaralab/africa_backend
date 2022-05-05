import { method, Route } from '../../contract/route.contract';
import { Module } from '../../contract/module.contract';
import { CreateCollectionCommand } from './command/create_collection.command';
import { GetCollectionsByWalletCommand } from './command/get_collections_by_wallet.command';
import { GetCollectionByIdCommand } from './command/get_collection_by_id.command';
import { GetCollectionsCommand } from './command/get_collections.command';
import { GetCollectionTokensByIdCommand } from './command/get_collection_tokens_by_id.command';

export class CollectionModule implements Module {
    basePath = '/collections';

    routes: Route[] = [
        {
            method: method.POST,
            path: '/create_collection',
            command: CreateCollectionCommand,
        },
        {
            method: method.GET,
            path: '/get_collections',
            command: GetCollectionsCommand,
        },
        {
            method: method.GET,
            path: '/get_collection_by_id',
            command: GetCollectionByIdCommand,
        },
        {
            method: method.GET,
            path: '/get_collections_by_wallet',
            command: GetCollectionsByWalletCommand,
        },
        {
            method: method.GET,
            path: '/get_collection_tokens_by_id',
            command: GetCollectionTokensByIdCommand,
        }
    ];
}