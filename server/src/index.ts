import express from "express";
import routes from './routes/partners';
var cors = require('cors')
require("dotenv").config();


const port = process.env.SERVER_PORT || 5000;
console.log(process.env.SERVER_PORT)
const server = express();
server.use(cors())
server.use('/api' ,routes)

server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;

