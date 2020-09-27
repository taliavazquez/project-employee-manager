var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "Localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "project-employee-manager_db"
});





// const department = require("./lib/department");
// const employee = require("./lib/employee");
// const role = require("./lib/role");
// Connect to MySQL server and MySQL database
// connection.connect(function (err) {
//     if (err) throw err;
//     // run the start function after the connection is made to prompt the user
//     start();
// });
main();
// function with questions
function main() {
  inquirer
    .prompt({
      type: "checkbox",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View Department",
        "View Employee",
        "View Roles",
        "Add Employee",
        "Add Role",
        "Add Department",
        // "Update Employee Roles"
      ]
    })


    .then(function (answer) {
      // based on their answer, either call the bid or the post functions
      switch (answer.action) {
        case "View Department":
          selectTable("department");
          break;
        case "View Employee":
          console.log("employee selected");
          selectTable("employee");
          break;
        case "View Roles":
          selectTable("role");
          break;
        case "Add Employee":
          break;
        case "Add Role":
          break;
        case "Add Department":
          break;
        default:
          break;
      }
    });
}
function selectTable(tableName) {
    var query = `SELECT * FROM ${tableName}`;

    connection.query(query, function (err, res) {
      if (tableName == "employee") {
        console.log("EMPLOYEE TABLE");//title
        console.log("id \t first_name \t last_name \t role_id \t manager_id");//header
        res.forEach(element => {

          console.log(element.id + "\t" + element.first_name + "\t \t" + element.last_name + "\t \t" + element.role_id + "\t \t" + element.manager_id); //content in table
        });

      }
      else if (tableName == "department"){
        console.log("-----DEPARTMENT TABLE----")//table title
        console.log("id \t name") //this is the header
        res.forEach(element => {
            console.log(element.id + "\t" + element.name); //this is the actual content
      });
    }
    else if (tableName == "role"){
      console.log("----ROLE TABLE----");//table title
      console.log("id \t title \t salary \t department_id"); //header
      res.forEach(element => {
        console.log(element.id + "\t" + element.salary + "\t" + element.department_id); //content
      });

    }

  });

}

function addRecord(tableName){
  if (tableName == "employee") {
    var query = `INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
                VALUES()`;
    // INSERT INTO table_name (column1, column2, column3, ...)
    // VALUES (value1, value2, value3, ...);
    // function viewDepartment() {
//   // once you have the items, prompt the user for which they'd like to bid on
// function viewDepartment() {
//   // once you have the items, prompt the user for which they'd like to bid on
  inquirer
    .prompt([
      {
        name: "firstName",
        type: "input",
        message: "What is the employee's last name?",
      },
      {
        name: "lastName",
        type: "input",
        message: "What is the employee's last name?",
      },
      {
        name: "role",
        type: "input",
        message: "What is the employee's role?",
      },
      {
        name: "manager",
        type: "input",
        message: "What is the employee's manager?",
      },

    ])
     
  .then(function (answer) {
    var query = `INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES (${answer.firstName}, ${answer.lastName}, ${answer.role}, ${answer.manager})`;

                connection.query(query, function (err, res) {
                    console.log("Your new department was created successfully!");
                });
  });
  connection.end();
  }
  else if (tableName == "department"){

  }
  else if (tableName == "role"){


  }

  // var query =''
}