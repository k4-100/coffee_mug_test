
CREATE USER 'coffee_mug_test'@'localhost' IDENTIFIED WITH mysql_native_password BY "1234";
GRANT ALL PRIVILEGES ON ProductsDB.ProductsTAB TO 'coffee_mug_test'@'localhost';

FLUSH PRIVILEGES;

CREATE DATABASE ProductsDB;
USE ProductsDB;


CREATE TABLE ProductsTAB(
  Id INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(100) NOT NULL,
  Price FLOAT NOT NULL, 
  UpdateDate DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY(Id)
);


INSERT INTO ProductsTAB(Name, Price)
VALUES ("apple", 3.01);

