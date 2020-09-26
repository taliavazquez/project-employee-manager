var mysql = require('mysql');

var con = mysql.createConnection({
  host: "Localhost",
    port: "8889",
    user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


var mysql = require("mysql");


// below is class version, above is google version

// var connection = mysql.createConnection({
//   host: "Localhost",

//   // Your port; if not 3306
//   port: 8889,

//   // Your username
//   user: "root",

//   // Your password
//   password: "root",
//   database: "project-employee-manager"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   connection.end();
// });

