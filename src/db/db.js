import mongoose from "mongoose";
import environment from "../config/config.js";
import userSchema from "./schemas/user.js";
const env = process.env.NODE_ENV || "development";
/**
 * Mongoose Connection
 **/

mongoose.connect(environment[env].dbString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db = mongoose.connection;
db.on("error", () => {
  console.error("Error while connecting to DB");
});

const User = mongoose.model("Users", userSchema);

export default { User };
