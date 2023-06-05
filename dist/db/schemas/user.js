"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String,
    },
    age: {
        type: Number,
    },
    language: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
});
