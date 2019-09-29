
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item, price)
VALUES ("cellphone", 300),
 ("Nike Shoes", 100),
 ("luggage", 150),
 ("Scooter", 500),
 ("phone charger", 10);