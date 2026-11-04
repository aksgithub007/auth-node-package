"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetails = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userDetails = async (req, res, next) => {
    try {
        const token = req?.session?.token;
        const payload = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        req.currentUser = payload;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.userDetails = userDetails;
