import { method, Route } from '../../contract/route.contract';
import { Module } from '../../contract/module.contract';
import { CreateItemCommand } from './command/create_item.command';
import { GetItemByIdCommand } from './command/get_item_by_id.command';
import { GetItemsByWalletCommand } from './command/get_items_by_wallet.command';

export class ItemModule implements Module {
    basePath = '/items';

    routes: Route[] = [
        {
            method: method.POST,
            path: '/create_item',
            command: CreateItemCommand,
        },
        {
            method: method.GET,
            path: '/get_item_by_id',
            command: GetItemByIdCommand,
        },
        {
            method: method.GET,
            path: '/get_items_by_wallet',
            command: GetItemsByWalletCommand,
        }

    ];
}