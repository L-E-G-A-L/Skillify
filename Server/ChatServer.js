const express = require("express");
const http = require("http");

const cors = require("cors");
const app = express();
const server = http.createServer(app);

app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "https://sxt7404.uta.cloud",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (client) => {
  client.on("send_message", (data) => {
    io.sockets.emit("receive_message", data);
  });
});

server.listen(process.env.PORT || 3002);
