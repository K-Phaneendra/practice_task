'use strict'

const fs = require('fs');
var path = require('path');

const CustomError = require("./CustomError")

module.exports = class Pages {
  constructor() {}

  // get all pages
  getAllPages() {
    try {
      const filePath = path.join(__dirname, '..', 'data.json');
      const json = fs.readFileSync(filePath, 'utf8');
      const parsedJson = JSON.parse(json);
      return parsedJson;
    } catch (err) {
      const error = new CustomError(err);
      return error.body();
    }
  }

  // get active pages
  getActivePages() {
    try {
      const filePath = path.join(__dirname, '..', 'data.json');
      const json = fs.readFileSync(filePath, 'utf8');
      const parsedJson = JSON.parse(json);
      const activeRecords = parsedJson.filter(each => each.isActive);
      return activeRecords;
    } catch (err) {
      const error = new CustomError(err);
      return error.body();
    }
  }

}
