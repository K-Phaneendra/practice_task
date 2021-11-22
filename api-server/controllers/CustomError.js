'use strict'

module.exports = class CustomError {
  constructor(jsError) {
    this.message = jsError.message;
    this.name = jsError.name;
    this.stack = jsError.stack;
  }

  // get error body
  body() {
    try {
      const errorBody = {
        message: this.message,
        name: this.name,
        stack: this.stack
      };
      return errorBody;
    } catch (err) {
      return new Error(err.message);
    }
  }

}
