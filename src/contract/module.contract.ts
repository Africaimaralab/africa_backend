import { Route } from './route.contract';

export interface Module {
    basePath: string;
    routes: Route[];
}
