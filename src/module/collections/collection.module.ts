import { method, Route } from '../../contract/route.contract';
import { Module } from '../../contract/module.contract';
import { CreateCollectionCommand } from './command/create_collection.command';
import { GetCollectionCommand } from './command/get_collections.command';

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
            command: GetCollectionCommand,
        }
    ];
}