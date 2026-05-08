import axios from "axios";
import * as cheerio from "cheerio";
import { Story } from "../models/storymodel";
export async function scrapeStories() {
  const result = await axios.get("https://news.ycombinator.com");
  const $ = cheerio.load(result.data);
  const rows = $(".athing.submission").toArray();

  for (const el of rows) {
    const id = $(el).attr("id");
    if (!id) {
      continue;
    }
    const title = $(el).find(".titleline").text();
    const url = $(el).find(".titleline").find("a").attr("href");
    const nextRow = $(el).next();
    let scoreText = $(nextRow).find(".score").text();
    const score = parseInt(scoreText) || 0;
    const hnuser = $(nextRow).find(".hnuser").text();
    const ageText = $(nextRow).find(".age").attr("title");
    const age = ageText?.split(" ")[0];
    await Story.findByIdAndUpdate(
      id,
      { title, url, score, hnuser, age },
      { upsert: true },
    );
  }
}
