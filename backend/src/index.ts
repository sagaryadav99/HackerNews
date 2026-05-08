import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import { scrapeStories } from "./services/scrapper";
import { authrouter } from "./routes/authrouter";
import { storyrouter } from "./routes/storyrouter";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authrouter);
app.use("/api/stories", storyrouter);

app.listen(3000, () => {
  scrapeStories();
});
