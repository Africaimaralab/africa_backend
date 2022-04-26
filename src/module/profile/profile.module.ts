import { method, Route } from '../../contract/route.contract';
import { Module } from '../../contract/module.contract';
import { UpdateProfileCommand } from './command/update_profile.command';
import { GetProfileCommand } from './command/get_profile.command';
import { GetCompletedProfilesCommand } from './command/get_completed_profiles.command';

export class ProfileModule implements Module {
    basePath = '/profile';

    routes: Route[] = [
        {
            method: method.POST,
            path: '/update_profile',
            command: UpdateProfileCommand,
        },
        {
            method: method.GET,
            path: '/get_profile',
            command: GetProfileCommand,
        },
        {
            method: method.GET,
            path: '/get_completed_profiles',
            command: GetCompletedProfilesCommand,
        },
    ];
}