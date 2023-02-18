DROP DATABASE IF EXISTS all_computer_components;

CREATE DATABASE all_computer_components;

\c all_computer_components;

CREATE TABLE products (
    id SERIAL PRIMARY KEY, -- SERIAL - increments when need product is added, PRIMARY KEY -  unique identifier for the table
    price INT,
    description TEXT,
    name TEXT,
    type TEXT,
    img TEXT
);

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL
);

CREATE TABLE products_customers (
    product_id INT NOT NULL,
    customer_id INT NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE orders_products (
    product_id INT NOT NULL,
    order_id INT NOT NULL,
    quantity INT NOT NULL
);

CREATE TABLE shipments (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    shipment_date DATE NOT NULL
);



