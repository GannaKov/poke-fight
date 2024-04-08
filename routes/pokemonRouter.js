const express = require("express");

pokemonRouter = express.Router();
const {
  getAllPokemons,
  getPokemonById,
  getPokemonInfoById,
} = require("../controllers/pokemonController");

pokemonRouter.get("/", getAllPokemons);
pokemonRouter.get("/:id", getPokemonById);
pokemonRouter.get("/:id/:info", getPokemonInfoById);

module.exports = pokemonRouter;
