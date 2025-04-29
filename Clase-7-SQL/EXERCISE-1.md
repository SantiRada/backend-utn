# Control de Stock Básico
Ana, dueña de una librería, te pidió que la ayudes a armar un pequeño sistema de control para su stock. Quiere tener registros de los productos, precios y ventas realizadas.
---
## Usando solo consultas SQL debes resolver:
---
1. Diseñar la estructura de la base de datos para el sistema de Ana.
2. Crear las tablas utilizando consultas DDL.
3. Insertar algunos registros en las tablas usando consultas DML.
4. Resolver los siguientes pedidos de Ana:
    "Quiero ver todos los productos que tengo en stock ordenados alfabéticamente."
    "Quiero ver todos los productos que tengo en stock ordenados por fecha de publicación."
    "Quiero ver todos los productos que tengo registrados pero que no tienen stock."
    "Quiero saber cuántas ventas hice en total."
    "Quisiera ver el producto que más vendí."
    "Quiero ver el total de dinero recaudado por todas las ventas."
---
## Reglas
- Las consultas deben ser simples, claras y optimizadas.
- Cada pedido de Ana debe resolverse con una consulta separada.
## Aclaraciones
- Si en una consulta se espera que el usuario rellene un dato, deberás rellenarlo hardcodeando un ejemplo entre comillas simples ''.
---
PRODUCTOS > id, nombre, stock, precio, fecha_publicacion, 
VENTAS > id, product_id, total

CREATE DATABASE system_books;

CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price INTEGER,
    stock INTEGER NOT NULL DEFAULT 0,
    publish_date DATE NOT NULL
);

CREATE TABLE ventas (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    total INTEGER NOT NULL
);

INSERT INTO products (name, price, stock, publish_date)
VALUES
('El Quijote', 19, 50, '2022-01-15'),
('Cien Años de Soledad', 24, 30, '2021-03-22'),
('1984', 17, 40, '2023-07-10'),
('Orgullo y Prejuicio', 22, 25, '2020-05-18'),
('Matar a un Ruiseñor', 20, 35, '2019-11-03'),
('El Señor de los Anillos', 29, 15, '2023-02-14'),
('Harry Potter y la Piedra Filosofal', 18, 60, '2018-08-30'),
('Los Juegos del Hambre', 21, 45, '2019-12-05'),
('El Alquimista', 16, 55, '2022-06-17'),
('La Sombra del Viento', 23, 20, '2021-09-09'),
('Rayuela', 19, 40, '2020-02-01'),
('La Odisea', 15, 50, '2023-04-25'),
('Don Juan Tenorio', 18, 30, '2022-11-19'),
('Fahrenheit 451', 17, 35, '2021-07-13'),
('Crónica de una Muerte Anunciada', 20, 25, '2020-10-27');


### 4.1
SELECT * FROM products WHERE stock > 0 ORDER BY name ASC;

### 4.2 
SELECT * FROM products WHERE stock > 0 ORDER BY publish_date DESC;

### 4.3
SELECT * FROM products WHERE stock = 0 OR stock IS NULL;

### 4.4: VENTAS EN TOTAL // PRODUCTOS VENDIO
Ventas: SELECT id FROM sales ORDER BY id DESC LIMIT 1;
Productos: SELECT SUM(quantity) AS Productos_vendidos, COUNT(quantity) AS Cantidad_de_ventas FROM sales;

### 4.5: "Quisiera ver el producto que más vendí."
SELECT name, SUM(quantity) FROM products
INNER JOIN sales ON products.id = sales.product_id
GROUP BY name
ORDER BY quantity DESC LIMIT 1;

### 4.6: "Quiero ver el total de dinero recaudado por todas las ventas."
SELECT SUM(total) FROM sales;