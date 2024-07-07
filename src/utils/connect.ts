import config from "config";
import mongoose from "mongoose";

async function connect() {
  const dbUri = config.get<string>("dbUri");
  try {
    await mongoose.connect(dbUri);
  } catch (error) {
    console.log("Connected to MongoDB");
    console.log("Error connecting to MongoDB", error);
    process.exit(1);
  }
}
