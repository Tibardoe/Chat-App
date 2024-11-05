import express from "express";
import { Server } from "socket.io";

const port = 3000
const app = express();

app.use(express.static("public"))

const server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

const io = new Server(server);

io.on("connection", (Socket) => {
    console.log("A user is connected");

    Socket.on("chat message", (message) => {
        io.emit("chat message", message)
    });



    Socket.on("disconnect", () => {
        console.log("A User disconnected");

    });

});