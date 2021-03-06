'use strict';
const MONITOR_IP = '8.8.8.8';       // IP to ping
const DELAY = 5000;                 // milliseconds

const ping = require('ping');
const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
let wasDown = false;

const logFormat = winston.format.printf(
  ({ timestamp, status }) => {
    return `${timestamp}: ${status}`;
  }
);

let logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    logFormat
  ),
  transports: [
    new DailyRotateFile({
      maxFiles: 10,
      dirname: "logs/",
      filename: "%DATE%.log",
      datePattern: "YYYY-MM-DD",
    }),
    new winston.transports.Console(),
  ],
});

const log = status => {
  logger.log({level: 'info', status});
}

const pingMe = ip => () => {
  ping.sys.probe(ip, isAlive => {
    if (isAlive) {
      if (wasDown) {
        log("Connection restored");
      }
      wasDown = false;
    } else {
      if (!wasDown) {
        log("Connection lost");
      }
      wasDown = true;
    }
  })
}

log(`Pinging ${MONITOR_IP}!`);
setInterval(pingMe(MONITOR_IP), DELAY);
