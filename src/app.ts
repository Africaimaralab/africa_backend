import express, { NextFunction, Request, Response } from 'express';
import { router } from './app-routing';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { globals } from './config/globals';
import errorMiddleware from './module/common/middlewares/error-middleware';

declare module 'express-serve-static-core' {
    interface Request {
      storage?: Map<any, any>
    }
}

const app = express();
const storage = new Map()
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(fileUpload({
    createParentPath: true,
}));
app.use(globals.BASE_PATH, express.static(globals.PUBLIC_ROOT));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

app.use(router);
app.use((req: Request, res: Response, next: NextFunction) => {
    req.storage = storage;
    next();
})
app.use((req: Request, res: Response) => {
    res.status(404);
    res.json({ error: 'Not found'});
});

app.listen(globals.APP_PORT, () => {
    console.log(`Running on PORT ${ globals.APP_PORT }.`);
});

app.use(errorMiddleware);
