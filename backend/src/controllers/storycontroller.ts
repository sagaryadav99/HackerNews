import { Story } from "../models/storymodel";
import { Request, Response } from "express";
import { User } from "../models/usermodel";
import { scrapeStories } from "../services/scrapper";
export async function getStories(req: Request, res: Response) {
  await scrapeStories();
  const storyarr = await Story.find().sort({ points: -1 });
  const twentyfourhourfilter = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const todayarr = storyarr.filter(function (x) {
    if (!x.postedAt) return false;
    return new Date(x.postedAt) >= twentyfourhourfilter;
  });
  res.json({ stories: todayarr });
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
export async function deleteBookmark(req: Request, res: Response) {
  const userid = req.userid;
  const bookmarkstory = req.params;
  await User.findByIdAndUpdate(userid, {
    $pull: { bookmarks: bookmarkstory.id },
  });
  res.json({ message: "removed successfully" });
}
export async function getUserStory(req: Request, res: Response) {
  const userid = req.userid;
  const user = await User.findById(userid).populate("bookmarks");
  res.json({ stories: user?.bookmarks });
}
