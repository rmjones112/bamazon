const connection = require('./connection');
 
//query allows you to run some mysql

connection.query('SELECT * FROM products', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});