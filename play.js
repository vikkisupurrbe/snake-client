const connect = require("./client");
const setupInput = require("./input");
console.log("Connecting ...");
const conn = connect(); // Store the connection object
setupInput(conn); // Pass it to setupInput