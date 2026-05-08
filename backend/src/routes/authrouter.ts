import Router from "express";
import { userLogin, userRegister } from "../controllers/authcontroller";
export const authrouter = Router();

authrouter.post("/register", userRegister);
authrouter.post("/login", userLogin);
