const express = require("express");
const newconnction = require("../../db/connection");
const newsoperations = require("../../services/news/index,js");
const router = express.Router();
newconnction.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});
router.get("/all", (req, res) => {
    newsoperations
        .getAllNews()
        .then((result) => {
        res.send(result);
        })
        .catch((err) => {
        res.send(err);
        });
});

router.post("/add", (req, res) => {
  newsoperations
    .addNews(req)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;

//  path should be great if not great it will cause some o is if not can be manupulatd one o
