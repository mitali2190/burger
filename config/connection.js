// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "v02yrnuhptcod7dk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "rgllq39xwgovyfiz",
    password: "u6wyj3sook3y0qrs",
    database: "mw6ll6x2z26n2i7y"
  });
}

connection.config.typeCast = function (field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};
// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

