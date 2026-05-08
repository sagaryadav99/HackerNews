import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;
export async function usermiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers["authorization"];
  try {
    if (!secret) {
      throw new Error("no jwt secret provided");
    }
    if (!token) {
      res.status(401).json({ message: "please signin first" });
      return;
    }
    const decoded = jwt.verify(token, secret);
    if (!decoded) {
      res.status(401).json({ message: "please signin first" });
      return;
    }
    if (typeof decoded === "string") {
      return;
    }
    req.userid = decoded.id;
    next();
  } catch (e) {
    console.log(e);
  }
}
