import express from 'express';
const app = express();
import { createServer } from 'http';
const server = createServer(app);
import { Server } from "socket.io";
import path from "path"

const __dirname = path.resolve()

const io = new Server(server);
io.on('connection', socket => {
    socket.on('chat message', (msg, username) => {
      io.emit('chat message', username + ": " + msg);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});