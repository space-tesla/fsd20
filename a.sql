mysql -u root -p

CREATE DATABASE IF NOT EXISTS college_db;

USE college_db;

CREATE TABLE IF NOT EXISTS students  (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  city VARCHAR(50)
);

INSERT INTO students (name, age, city) VALUES
('Gauri Mhaske', 21, 'Pune'),
('Vaibhav Nirmal', 22, 'Mumbai'),
('Abhishek Shinde', 20, 'Nagpur'),
('Aditya Khalekar', 23, 'Nashik');


SELECT * FROM students;