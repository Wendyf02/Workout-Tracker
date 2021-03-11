const mongoose = require("mongoose");
const { workout } = require(".");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type:Date,
        default: Date.now,
    }
  title: String,
  body: String


















});

const Note = mongoose.model("workout", workoutSchema);

module.exports = workout;