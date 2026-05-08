import Router from "express";
import { userRegister } from "../controllers/authcontroller";
import {
  bookmarkStory,
  deleteBookmark,
  getStories,
  getStoryById,
  getUserStory,
} from "../controllers/storycontroller";
import { usermiddleware } from "../middlewares/usermiddleware";
export const storyrouter = Router();

storyrouter.get("/", getStories);
storyrouter.get("/:id", getStoryById);
storyrouter.post("/:id/bookmark", usermiddleware, bookmarkStory);
storyrouter.delete("/:id/bookmark", usermiddleware, deleteBookmark);
storyrouter.get("/user/bookmarks", usermiddleware, getUserStory);
