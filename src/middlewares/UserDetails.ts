import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

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

interface JwtPayload {
  id: string;
  name: string;
  email: string;
}

export const userDetails = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req?.session?.token;
    const payload = jwt.verify(token!, process.env.TOKEN_SECRET!);
    req.currentUser = payload as JwtPayload;
    next();
  } catch (error) {
    next(error);
  }
};
