import Router from "express";
export const storyrouter = Router();

storyrouter.get("/");
storyrouter.get("/:id");
storyrouter.post("/:id/bookmark");
