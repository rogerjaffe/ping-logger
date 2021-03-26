'use strict';
const ping = require('ping');
const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
const MONITOR_IP = '8.8.8.8';

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
    log(isAlive ? 'Up' : 'Down');
  })
}

log(`Pinging ${MONITOR_IP}!`);
setInterval(pingMe(MONITOR_IP), 5000);
