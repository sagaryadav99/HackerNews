import mongoose from "mongoose";

export async function dbconnect() {
  const dbstring = process.env.DB_STRING;
  if (!dbstring) {
    throw new Error("db string not provided");
  } else {
    try {
      await mongoose.connect(dbstring);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
