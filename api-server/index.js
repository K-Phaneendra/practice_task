const dotenv = require('dotenv');
dotenv.config();
var express = require("express");
var cors = require('cors')

const CustomError = require('./controllers/CustomError');
const Pages = require('./controllers/pages');

var app = express();
app.use(cors())

app.get("/pages", (req, res, next) => {
  try {
    const pages = new Pages();
    const records = pages.getAllPages();
    res.status(200).send(records);
  } catch (err) {
    const errorBody = new CustomError(err).body();
    res.status(400).send(errorBody);
  }
});

app.get("/active-pages", (req, res, next) => {
  try {
    const pages = new Pages();
    const records = pages.getActivePages();
    res.status(200).send(records);
  } catch (err) {
    const errorBody = new CustomError(err).body();
    res.status(400).send(errorBody);
  }
});

app.listen(process.env.PORT, () => {
 console.log(`Server running on port ${process.env.PORT}`);
});
