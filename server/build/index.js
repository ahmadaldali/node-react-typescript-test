"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var partners_1 = __importDefault(require("./routes/partners"));
var cors = require('cors');
require("dotenv").config();
var port = process.env.SERVER_PORT || 5000;
console.log(process.env.SERVER_PORT);
var server = (0, express_1.default)();
server.use(cors());
server.use('/api', partners_1.default);
module.exports = server;
server.listen(port, function () { return console.log("Listening on port " + port); });
