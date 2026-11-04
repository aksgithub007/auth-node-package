"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const error_common_1 = require("error-common");
const validateUser = (req, res, next) => {
    const token = req.session?.token;
    if (!token) {
        throw new error_common_1.UnauthorizeError();
    }
    next();
};
exports.validateUser = validateUser;
