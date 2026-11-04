import { Request, Response, NextFunction } from "express";
import { User } from "../model/UserModal";
import { CommonError } from "../errors/CommonError";

export const ValidAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = await User.findById(req.currentUser?.id);
  if (!user || user.role !== "admin") {
    throw new CommonError("Admin access required");
  }
  next();
};
