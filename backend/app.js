const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const Post = require('./model/post');
const postsRoutes = require("./routes/posts");

mongoose.connect('mongodb+srv://srs:mYhCid7zPjXTAw4r@cluster0-r5sgz.mongodb.net/node-angular?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to Database!');
  })
  .catch(() => {
    console.log('Error Connecting to database!');
  });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
