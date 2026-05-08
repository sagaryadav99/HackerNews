import { Request, Response } from "express";
import { dbconnect } from "../config/db";
import { scrapeStories } from "../services/scrapper";
export async function scrapeStoriesController(req: Request, res: Response) {
  await dbconnect();
  scrapeStories();
  res.json({ message: "scraped successfully" });
}
