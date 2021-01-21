const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "Setup is required for a joke!"],
    minlenth: [10, "Must be greater than 10 characters"]
  },
  punchline: {
    type: String,
    required: [true, "Where's the punchline at?"],
    minlength: [3, "Must be greater than 3 characters"]
  }
})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;