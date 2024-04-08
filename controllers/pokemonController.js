const mongoose = require("mongoose");

const {
  getAllData,
  getDataById,
  getByIdByInfo,
} = require("../services/queries/queries");

const getAllPokemons = async (req, res, next) => {
  try {
    const result = await getAllData();

    if (result.length === 0) {
      throw { status: 404, message: "No pokemon found" };
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getPokemonById = async (req, res, next) => {
  try {
    //const id = req.params.id;
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw { status: 400, message: "Invalid ObjectId" };
    }
    const result = await getDataById(id);

    if (!result) {
      throw { status: 404, message: "Pokemon not found" };
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getPokemonInfoById = async (req, res, next) => {
  try {
    const { id, info } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw { status: 400, message: "Invalid ObjectId" };
    }
    if (!["type", "name", "base"].includes(info)) {
      throw { status: 400, message: "Bad Request. Wrong type" };
    }
    const result = await getByIdByInfo(id, info);
    if (!result) {
      throw { status: 404, message: "Pokemon not found" };
    }
    res.status(200).json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllPokemons, getPokemonById, getPokemonInfoById };
