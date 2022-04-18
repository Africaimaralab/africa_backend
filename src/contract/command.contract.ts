import { Request, Response } from 'express';

declare module 'express-serve-static-core' {
    interface Request {
      storage?: Map<any, any>
    }
}

const stor = new Map();

export abstract class Command {

    abstract run(req: Request, res?: Response): Promise<any>;

    async runExternal(req: Request, res: Response): Promise<void> {
        try {
            req.storage = stor;
            res.status(200);
            const response = await this.run(req, res);
            res.send(response);
            
        } catch (e) {
            console.error(e);
            res.send({
                message: (<Error>e).message,
            });
        }
    }

    private static getHttpCodeByErrorCode(code): number {
        if (code && typeof code === 'number' && code >= 200 && code < 600) {
            return code;
        }

        return 500;
    }
}
