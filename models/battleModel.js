const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const Pokemon = require("./pokemonModels");

const battleSchema = new Schema(
  {
    participents: {
      pok1: {
        name: { type: String, required: true },
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Pokemon",
          required: true,
        },
      },

      pok2: {
        name: { type: String, required: true },
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Pokemon",
          required: true,
        },
      },
    },
    winner: { type: String, required: true },
    pokWinner: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pokemon",
        required: true,
      },
    },
    score: [{ type: Number, required: true }],
  },
  { collection: "battles" }
);

const Battle = model("Battle", battleSchema);

module.exports = Battle;
