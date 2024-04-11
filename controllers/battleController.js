const mongoose = require("mongoose");
const { getAllBattlesQuery } = require("../services/queries/queries");

const Battle = require("../models/battleModel");

const getGameResults = async (req, res, next) => {
  try {
    const result = await getAllBattlesQuery();

    // if (result.length === 0) {
    //   throw { status: 404, message: "No battle found" };
    // }
    res.status(200).json({
      status: "success",
      code: 200,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const postGameResult = async (req, res, next) => {
  try {
    console.log("postGameResult");
    const { participents, winner, pokWinner, score } = req.body;
    const newBattle = new Battle({ participents, winner, pokWinner, score });
    const result = await newBattle.save();
    if (!result) {
      throw { status: 500, message: "Failed to create country" };
    }
    res.status(201).json({ status: "Created ", code: 201, data: result });
  } catch (err) {
    next(err);
  }
};

module.exports = { postGameResult, getGameResults };
