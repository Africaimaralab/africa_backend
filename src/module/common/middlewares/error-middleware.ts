import { ApiError } from '../../common/services/api-error.service';

export default function (err, req, res, next) {
    console.log(err);
    if (err instanceof ApiError) {
        return res.status(400).json({message: err.message})
    }
    return res.status(500).json({message: 'Error!'})

};
