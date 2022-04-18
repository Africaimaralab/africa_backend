import { Module } from '../contract/module.contract';
import { Type } from '../contract/type.contract';
import { AuthModule } from '../module/auth/auth.module';
import { ProfileModule } from '../module/profile/profile.module';


const moduleClasses: Array<Type<Module>> = [
    AuthModule,
    ProfileModule
];

export const modules = moduleClasses.map(moduleClass => new moduleClass());
