import { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            session?: {
                token?: string;
            };
            currentUser?: {
                id: string;
                name: string;
                email: string;
            };
        }
    }
}
export declare const userDetails: (req: Request, res: Response, next: NextFunction) => Promise<void>;
