import { UnauthorizeError } from "error-common";
export const validateUser = (req, res, next) => {
    const token = req.session?.token;
    if (!token) {
        throw new UnauthorizeError();
    }
    next();
};
