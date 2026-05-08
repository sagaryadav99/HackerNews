import Router from "express";
import { scrapeStories } from "../services/scrapper";
import { scrapeStoriesController } from "../controllers/scrapecontroller";
export const scraperouter = Router();
scraperouter.post("/", scrapeStoriesController);
