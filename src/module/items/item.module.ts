import { method, Route } from '../../contract/route.contract';
import { Module } from '../../contract/module.contract';
import { GetItemByAddressCommand } from './command/get_item_by_address.command';
import { GetItemsCommand } from './command/get_items.command ';

export class ItemModule implements Module {
    basePath = '/items';

    routes: Route[] = [
        {
            method: method.GET,
            path: '/get_item_by_address',
            command: GetItemByAddressCommand,
        },
        {
            method: method.GET,
            path: '/get_items',
            command: GetItemsCommand,
        }

    ];
}