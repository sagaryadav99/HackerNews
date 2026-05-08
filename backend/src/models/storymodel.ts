import { Schema, model } from "mongoose";

const storySchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String },
  url: { type: String },
  score: { type: Number },
  hnuser: { type: String },
  age: { type: Date },
});
export const Story = model("Story", storySchema);
