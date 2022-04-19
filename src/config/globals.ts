const path = require('path');

const APP_ROOT = __dirname + '/../..';

export const globals = {
    APP_PORT: process.env.PORT || 4002,
    APP_ROOT,
    PUBLIC_ROOT: path.join(APP_ROOT, 'public'),
    BASE_PATH: process.env.BASE_PATH || '',
};
