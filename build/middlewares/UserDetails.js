import jwt from "jsonwebtoken";
export const userDetails = async (req, res, next) => {
    try {
        const token = req?.session?.token;
        const payload = jwt.verify(token, process.env.TOKEN_SECRET);
        req.currentUser = payload;
        next();
    }
    catch (error) {
        next(error);
    }
};
