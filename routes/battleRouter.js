const express = require("express");
const {
  postGameResult,
  getGameResults,
} = require("../controllers/battleController");

battleRouter = express.Router();

battleRouter.get("/", getGameResults);
battleRouter.post("/save", postGameResult);

module.exports = battleRouter;
