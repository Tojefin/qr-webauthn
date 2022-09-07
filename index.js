import express from "express";
import {createServer} from "http";
import task from "./server/router/task.js";

const app = express();
app.use(express.json())
app.use('/', express.static('client'));
app.use('/api/task/', task);

const httpServer = createServer(app);
httpServer.listen(80);