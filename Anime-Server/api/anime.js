const express = require("express");
const mongoose = require("mongoose");
const Anime = require("../database/model");
const route = express.Router();
const app = express();


route.post("/", async (req, res) => {
  const { animeName, animeDescription } = req.body;
  let anime = {};
  anime.animeName = animeName;
  anime.animeDescription = animeDescription;

  let animeModel = new Anime(anime);
  await animeModel.save();
  res.json(animeModel);
});

route.get("/",async (req,res)=>{
    const animes=await Anime.find();
    res.status(200).json(animes);
})

module.exports = route;
