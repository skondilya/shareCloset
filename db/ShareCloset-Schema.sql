USE share_Closetdb;

CREATE TABLE share_Closetdb 
(
  id int NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(100) NULL,
  color VARCHAR(100) NULL,
  size VARCHAR(100) NULL,
  year INT NULL,
  price DECIMAL(10,4) NULL,
  photo VARCHAR(100) NULL,
  PRIMARY KEY (position)
);

select * from share_Closetdb; 

