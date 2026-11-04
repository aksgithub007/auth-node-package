import { NextFunction, Request, Response } from "express";
import { UnauthorizeError } from "error-common";

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.session?.token;
  if (!token) {
    throw new UnauthorizeError();
  }
  next();
};
