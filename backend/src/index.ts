import express from "express";
import cors from "cors";

import { scrapeStories } from "./services/scrapper";
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  scrapeStories();
});
