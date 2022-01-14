const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

//import data from db.json
const fortunes = require("./db.json");

//display fortune
app.get("/api/fortune", (req, res) => {
  const fortune = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A fresh start will put you on your way.",
    "A friend asks only for your time not your money.",
    "A friend is a present you give yourself.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

//change fortune minus
app.put("/api/minus", (req, res) => {
  let { id } = req.params;
  let { type } = req.body;
  let index = 1;

  if (type === "minus") {
    fortunes[0].fortune -= 1;
    res.status(200).send(fortunes);
  }
});

//change fortune plus
app.put("/api/add", (req, res) => {
  let { id } = req.params;
  let { type } = req.body;
  let index = 1;

  if (type === "plus") {
    fortunes[0].fortune += 1;
    res.status(200).send(fortunes);
  }
});

app.listen(4001, () => console.log("Server running on 4001"));
