CREATE DATABASE IF NOT EXISTS share_Closetdb;

USE share_Closetdb;

CREATE TABLE dresses 
(
  id int NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NULL,
  color VARCHAR(100) NULL,
  size VARCHAR(100) NULL,
  year INT NULL,
  price DECIMAL(10,4) NULL,
  PRIMARY KEY (id)
);

<<<<<<< HEAD

INSERT INTO dresses (id, user_name, color, size, year, price) VALUES (001, 'person', 'green', 'medium', 2017, 100);


select * from dresses;


-- CREATE TABLE photos 
-- ( 
-- PhotoID int unsigned not null auto_increment primary key, 
-- Filename varchar(255) not null unique, 
-- Caption varchar(255) not null, 
-- Photo longblob not null 
-- ); 

=======
INSERT INTO dresses (id, user_name, color, size, year, price) VALUES (001, 'person', 'green', 'medium', 2017, 100);


select * from dresses;


-- Photos Table
-- CREATE TABLE photos 
-- ( 
-- PhotoID int unsigned not null auto_increment primary key, 
-- Filename varchar(255) not null unique, 
-- Caption varchar(255) not null, 
-- Photo longblob not null 
-- ); 


>>>>>>> master

