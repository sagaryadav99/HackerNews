import axios from "axios";
import * as cheerio from "cheerio";
import { StoryType } from "../types/storytype";
export async function scrapeStories() {
  const arr: StoryType[] = [];
  const result = await axios.get("https://news.ycombinator.com");
  const $ = cheerio.load(result.data);
  $(".athing.submission").each((i, el) => {
    const id = $(el).attr("id");
    if (!id) {
      return;
    }
    const title = $(el).find(".titleline").text();
    const url = $(el).find(".titleline").find("a").attr("href");
    const nextRow = $(el).next();
    const score = $(nextRow).find(".score").text();
    const hnuser = $(nextRow).find(".hnuser").text();
    const age = $(nextRow).find(".age").attr("title");
    arr.push({
      id,
      title,
      url: url ?? "no link",
      score,
      hnuser,
      age: new Date(age?.split(" ")[0] ?? new Date()),
    });
  });
  return arr;
}
