const mysql= require('mysql');
//use criteria to connect to local db
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'bamazon_db'
});
 //connect method
connection.connect();

module.exports = connection;