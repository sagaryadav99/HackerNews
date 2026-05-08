import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import { scrapeStories } from "./services/scrapper";
import { authrouter } from "./routes/authrouter";
import { storyrouter } from "./routes/storyrouter";
import { dbconnect } from "./config/db";
import { scraperouter } from "./routes/scraperouter";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authrouter);
app.use("/api/stories", storyrouter);
app.use("/api/scrape", scraperouter);

async function startServer() {
  const PORT = process.env.PORT;
  if (!PORT) {
    console.log("no port provided");
    return;
  }
  try {
    await dbconnect();
    scrapeStories();
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
    console.log("something went wrong");
  }
}
startServer();
