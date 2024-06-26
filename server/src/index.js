import express from 'express';
import { createServer } from 'node:http';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import cors from 'cors';
const PORT = process.env.SERVER_PORT || 8080;
dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173'
    }
});


app.use(cors());
app.get('/', (req, res) => {
    res.status(201).json({
        message: 'Welcome to the backend of Dialog Den! Didn\'t expect you to be here 🤔'
    });
});

io.on('connection', (socket) => {
    console.log(`👋 - Client connected: ${socket.id}`);

    socket.on('disconnect', (reason) => {
        console.log(`⚠️ - Disconnected due to: ${reason}`)
    });

    // Getting the message from client and sending it back
    socket.on('send_message', (message) => {
        // console.log(message);
        socket.broadcast.emit('receive_message', message);
    })
})

server.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});

