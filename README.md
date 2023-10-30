# First Time
Run "npm install"
Create a utils folder in server folder, then add a dbConfig.js that contains database connections information

# Initialize Table
 CREATE TABLE IF NOT EXISTS `Employees` (
  id INT(255) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  salary INT(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Load Initial Data
In the assignment_info folder I have changed the format of data.json. Then it is loaded in with this script below.
LOAD DATA LOCAL INFILE 'C:/Users/jomok/OneDrive/Desktop/ecapital assignment/assignment_info/data.json'
INTO TABLE employees
LINES TERMINATED BY '\n'
(@json)
SET
    first_name = JSON_UNQUOTE(JSON_EXTRACT(@json, '$.firstName')),
    last_name = JSON_UNQUOTE(JSON_EXTRACT(@json, '$.lastName')),
    salary = JSON_UNQUOTE(JSON_EXTRACT(@json, '$.salary'));


# Run
Use "nodemon start" during development or "npm start" as a user

# Notes
Client folder uses React to runs the UI and server folder uses Node and Express to run the server and connections to database.
Routes folder contains express routes that are sent to front-end.
Controller folder process inputs from front-end.
Models folder contains queries and connections to database.