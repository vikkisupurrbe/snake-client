// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true);
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = function (key) {
  // code handling the key press will go here
    if (key === "\u0003") { // ctrl + c to exit;
      process.exit();
    }

    if (key === "\u0077") { // W
      connection.write("Move: up");
    }

    if (key === "\u0061") { // A
      connection.write("Move: left");
    }

    if (key === "\u0073") { // S
      connection.write("Move: down");
    }

    if (key === "\u0064") { // D
      connection.write("Move: right");
    }
};

module.exports = setupInput;