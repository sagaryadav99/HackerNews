import { Schema, model } from "mongoose";

const storySchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String },
  url: { type: String },
  points: { type: Number },
  author: { type: String },
  postedAt: { type: Date },
});
export const Story = model("Story", storySchema);
