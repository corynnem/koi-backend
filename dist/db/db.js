"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose = require("mongoose");
const { environment } = require("../config/config");
const { userSchema } = require("./schema");
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
exports.User = User;
