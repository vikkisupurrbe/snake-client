// establishes a connection with the game server
const connect = function () {
  const net = require("net");
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", () => {console.log("you ded cuz you idled");})
  return conn;
};

module.exports = connect;