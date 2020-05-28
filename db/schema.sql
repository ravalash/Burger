CREATE DATABASE burgers_db;
USE burgers_db;

-- Initial table creation with columns for burger names and boolean devoured status. ID set automatically.
CREATE TABLE burgers ( 
    id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
