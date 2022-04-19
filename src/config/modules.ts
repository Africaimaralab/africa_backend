import { Module } from '../contract/module.contract';
import { Type } from '../contract/type.contract';
import { AuthModule } from '../module/auth/auth.module';
import { ProfileModule } from '../module/profile/profile.module';
import { CollectionModule } from '../module/collections/collection.module';
import { ItemModule } from '../module/items/item.module';


const moduleClasses: Array<Type<Module>> = [
    AuthModule,
    ProfileModule,
    CollectionModule,
    ItemModule
];

export const modules = moduleClasses.map(moduleClass => new moduleClass());
