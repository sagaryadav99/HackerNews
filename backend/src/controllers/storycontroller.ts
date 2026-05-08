import { Story } from "../models/storymodel";
import { Request, Response } from "express";
import { User } from "../models/usermodel";
export async function getStories(req: Request, res: Response) {
  const storyarr = await Story.find().sort({ score: -1 });
  console.log(storyarr);
  res.json({ stories: storyarr });
}
export async function getStoryById(req: Request, res: Response) {
  const storyid = req.params;
  const result = await Story.findById(storyid.id);
  if (!result) {
    res.status(404).json({ message: "no story found by this id" });
    return;
  }
  res.json(result);
}
export async function bookmarkStory(req: Request, res: Response) {
  const userid = req.userid;
  const bookmarkstory = req.params;
  await User.findByIdAndUpdate(userid, {
    $addToSet: { bookmarks: bookmarkstory.id },
  });
  res.json({ message: "added to bookmarks" });
}
