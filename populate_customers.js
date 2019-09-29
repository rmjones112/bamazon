const connection = require('./connection');
 
//query allows you to run some mysql

const data = [
    ["cellphone", 300],
 ["Nike Shoes", 100],
 ["luggage", 150],
 ["Scooter", 500],
 ["phone charger", 10]
];


data.map(function(item){
    const [name, price] = item
    connection.query('INSERT INTO products (item, price) VALUES (?,?)', [name, price],function (error, results, fields) {
        if (error) throw error;
        console.log('inserted Successfully');
      });
});

connection.end();