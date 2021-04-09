const express = require("express");
const mongoose = require("mongoose");
const Anime = require("../database/model");
const route = express.Router();
const app = express();

route.post("/", async (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }
  const { animeName, animeDescription } = req.body;
  let anime = {};
  anime.animeName = animeName;
  anime.animeDescription = animeDescription;

  let animeModel = new Anime(anime);
  await animeModel.save();
  res.json(animeModel);
});

route.get("/", async (req, res) => {
  const animes = await Anime.find();
  res.status(200).json(animes);
});

route.put("/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: " empty data " });
  }

  const id = req.params.id;
  Anime.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
    (data) => {
      console.log(data)
      if (!data) {
        res.status(404).send({ message: "cannot update anime" });
      } else {
        res.send(data);
      }
    }
  );
});

route.delete("/:id", (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: " empty data " });
  }

  const id = req.params.id;
  Anime.findByIdAndDelete(id).then((data) => {
    if (!data) {
      res.status(404).send({ message: "cant delete" });
    } else {
      res.send({ message: "deleted" });
    }
  });
});

module.exports = route;
