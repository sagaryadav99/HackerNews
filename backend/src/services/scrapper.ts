import axios from "axios";
import * as cheerio from "cheerio";
export async function scrapeStories() {
  const result = await axios.get("https://news.ycombinator.com");
  const $ = cheerio.load(result.data);
  $(".athing.submission").each((i, el) => {
    const id = $(el).attr("id");
    const title = $(el).find(".titleline").text();
    const url = $(el).find(".titleline").find("a").attr("href");
    const nextRow = $(el).next();
    const score = $(nextRow).find(".score").text();
    const hnuser = $(nextRow).find(".hnuser").text();
    const age = $(nextRow).find(".age").attr("title");
    console.log({ id, title, url, score, hnuser, age: age?.split(" ")[0] });
  });
}
