import { Module } from '../../contract/module.contract';
import { method, Route } from '../../contract/route.contract';
import { LoginCommand } from './command/login.command';
import { LogoutCommand } from './command/logout.command';
import { RefreshCommand } from './command/refresh.command';

export class AuthModule implements Module {
    basePath = '/auth';

    routes: Route[] = [
        {
            method: method.POST,
            path: '/login',
            command: LoginCommand,
        },
        {
            method: method.POST,
            path: '/logout',
            command: LogoutCommand,
        },
        {
            method: method.POST,
            path: '/refresh',
            command: RefreshCommand,
        }
    ];
}