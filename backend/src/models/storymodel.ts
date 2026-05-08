import { Schema, model } from "mongoose";

const storySchema = new Schema({
  _id: { type: String, unique: true, required: true },
  title: { type: String },
  url: { type: String },
  hnuser: { type: String },
  age: { type: Date },
});
export const Story = model("Story", storySchema);
