const Battle = require("../../models/battleModel");
const Pokemon = require("../../models/pokemonModels");

const getAllBattlesQuery = async () => {
  return Battle.find();
};

const getAllPokemonsQuery = async () => {
  return Pokemon.find();
};

const getPokemonsByIdQuery = (id) => {
  return Pokemon.findById(id);
};

const getByIdByPokemonInfoQuery = (id, info) => {
  return Pokemon.findById(id, { [info]: 1, _id: 0 });
};

module.exports = {
  getAllPokemonsQuery,
  getPokemonsByIdQuery,
  getByIdByPokemonInfoQuery,
  getAllBattlesQuery,
};
