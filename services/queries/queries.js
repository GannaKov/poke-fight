const Pokemon = require("../../models/pokemonModels");

const getAllData = async () => {
  return Pokemon.find();
};

const getDataById = (id) => {
  return Pokemon.findById(id);
};

const getByIdByInfo = (id, info) => {
  return Pokemon.findById(id, { [info]: 1, _id: 0 });
};

module.exports = { getAllData, getDataById, getByIdByInfo };
