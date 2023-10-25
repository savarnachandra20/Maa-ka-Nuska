const express = require("express");
const { dbConnection } = require("./db/server");
const review = require("./db/schema");
const app = express();
const path = require("path");

app.use(express.json());

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

dbConnection();

app.post("/review", async (req, res) => {
  try {
    console.log(req.body);
    const reviewData = new review(req.body);
    await reviewData.save();
    res.status(201).send(reviewData);
  } catch (e) {
    res.status(400).send(e);
  }
});
