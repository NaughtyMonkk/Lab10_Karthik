const mongoose = require("mongoose");
const model = require("./models/model");

const controller = require("./controllers/controller");
const express = require("express"),
  app = express();
app.set("view engine", "ejs");

app.set("port", process.env.PORT || 3000);

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
require("dotenv").config();
const uri = process.env.ATLAS_URI;

console.log(uri);

mongoose.connect(uri, { useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.get("/home", controller.getbooks, (req, res, next) => {
      
  });
app.get("/books/:number", controller.getbook, (req, res, next) => {
  
  
});
  
app.listen(app.get("port"), () => {
  console.log(`Server Running on http://localhost:${app.get("port")}`);
});
  
