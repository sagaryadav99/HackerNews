import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  bookmarks: { type: Schema.Types.ObjectId, ref: "Story" },
});
export const User = model("User", userSchema);
