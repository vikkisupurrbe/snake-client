// establishes a connection with the game server
const connect = function (host, port) {
  const net = require("net");
  const { IP, PORT } = require("./constants");
  const conn = net.createConnection({
    host: IP, 
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: VK6");
  })
  
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  return conn;

};

module.exports = connect;