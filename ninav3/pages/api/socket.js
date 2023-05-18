import { Server } from "socket.io"



const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
  } else {
    const io = new Server(res.socket.server, {path:'/api/socketio',  addTrailingSlash: false});
    io.on("connection", ()=>{console.log("hi")})
    res.socket.server.io = io
  }
  res.end()
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default SocketHandler;