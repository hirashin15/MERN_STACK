const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const server = app.listen(8000, () => console.log("Listening on port 8000"));

const io = require('socket.io')(server, { cors: true });


io.on("connection", socket => {
  console.log("Nice to meet you.");
  socket.emit('welcome', "Welcome to the dumbest program to scam the face of the earth.")
  socket.on("event_from_client", data => {
    socket.broadcast.emit("send_data_to_all_other_clients", data);
  });
});