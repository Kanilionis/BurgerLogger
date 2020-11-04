// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "h3uvbtns5g81yhyh",
  password: "eygouyt5j4kknlfm",
  database: "ql2td4j9pshnjm3x"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
