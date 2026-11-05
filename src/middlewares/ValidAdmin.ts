import { Request, Response, NextFunction } from "express";
import { CommonError } from "error-common";

export const ValidAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const currentUser = (
      req as Request & { currentUser?: { id: string; role: string } }
    ).currentUser;
    console.log("Current User details", currentUser);

    if (currentUser?.role !== "admin") {
      throw new CommonError("Admin access required");
    }

    next();
  } catch (err) {
    next(err); // forwards errors to your error handler instead of hanging
  }
};
