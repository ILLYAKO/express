import colors from 'colors'
// var colors = require("colors");

export function requestTime(req, res, next) {
  req.requestTime = Date.now();
  next()
}

export function logger(req, res, next) {
    console.log(colors.bgGreen.black(`Req.time: ${req.requestTime}`));
  next();
}