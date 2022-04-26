import { method, Route } from '../../contract/route.contract';
import { Module } from '../../contract/module.contract';
import { AddAgreementCommand } from './command/add_agreement.command';
import { GetAgreementsCommand } from './command/get_agreements.command';
import { GetTextByTypeCommand } from './command/get_text.command';
export class AgreementModule implements Module {
    basePath = '/agreement';

    routes: Route[] = [
        {
            method: method.POST,
            path: '/add',
            command: AddAgreementCommand,
        },
        {
            method: method.GET,
            path: '/get_text',
            command: GetTextByTypeCommand,
        },
        {
            method: method.GET,
            path: '/get_agreements',
            command: GetAgreementsCommand,
        },
    ];
}