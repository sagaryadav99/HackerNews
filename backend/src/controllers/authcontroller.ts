import { User } from "../models/usermodel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;
export async function userRegister(req: Request, res: Response) {
  const { username, name, password } = req.body;
  try {
    const result = await User.findOne({ username });
    if (result) {
      res.status(401).json({ message: "user already exists,please login" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, name, password: hashedPassword });
    res.json({ message: "user registered" });
  } catch (e) {
    console.log(e);
  }
}
export async function userLogin(req: Request, res: Response) {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ message: "user doesn't exist, please register " });
      return;
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(401).json({ message: "invalid credentials" });
      return;
    }
    if (!secret) {
      throw new Error("no jwt secret provided");
    }
    const token = jwt.sign({ id: user._id }, secret);
    res.status(200).json({ message: "logged in", token: token });
  } catch (e) {
    console.log(e);
  }
}
