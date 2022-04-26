
import { ErrorDTO } from '../../common/dto/error.dto';
import { Request, Response, response } from 'express';
export class ApiError extends Error {
    errorMessage;

    constructor(message: string) {
        super(message)
        this.errorMessage = message;
    }

    static UnauthorizedError() {
        throw new ApiError('User is not authorized!')
    }

    static BadRequest(message) {
        throw new ApiError(message);
    }

    static UnknownError(errorMessage, err: any, res: Response) {
        let result = <ErrorDTO>err;

        if (!result.errorMessage) {
            res.status(400);
            const apiError: ErrorDTO = {
                errorMessage: "Bad Request: " + errorMessage,
                error: result.toString(),
                description: err
            };
            return apiError;
        }
        else if (result.errorMessage == "User is not authorized!") {
            res.status(401);
        }

        return err;
    }
}


