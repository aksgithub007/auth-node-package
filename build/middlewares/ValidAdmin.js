"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidAdmin = void 0;
const error_common_1 = require("error-common");
const ValidAdmin = async (req, res, next) => {
    try {
        const currentUser = req.currentUser;
        console.log("Current User details", currentUser);
        if (currentUser?.role !== "admin") {
            throw new error_common_1.CommonError("Admin access required");
        }
        next();
    }
    catch (err) {
        next(err); // forwards errors to your error handler instead of hanging
    }
};
exports.ValidAdmin = ValidAdmin;
