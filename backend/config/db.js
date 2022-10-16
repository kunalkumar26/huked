require('dotenv').config()
const mongoose = require("mongoose");

const db_link = process.env.MONGO_URI

mongoose
.connect(db_link)
.then((db) => {
  console.log("DB connected");
})
.catch((err) => {
  console.log(err.message);
});