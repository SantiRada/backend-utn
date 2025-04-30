CREATE DATABASE almacen;

CREATE TABLE categories(
    category_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category_name VARCHAR(255)
)

CREATE TABLE products(
    product_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    price INTEGER,
    category_id INTEGER,
    stock INTEGER
)

CREATE TABLE sales(
    sales_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_id INTEGER,
    quantity INTEGER,
    sale_date DATE,
    total INTEGER,
    payment_method VARCHAR
)

CREATE TABLE payment_method(
    method_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_method VARCHAR(50)
)