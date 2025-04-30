-- 1. "Me gustaría poder ver cuales son las 5 categorías con más y con menos ventas."

-- PRIMERA RESOLUCIÓN

(
    SELECT category_name, COUNT(sales.total) AS Total_de_Ventas FROM sales
    INNER JOIN products ON products.product_id = sales.product_id
    RIGHT JOIN categories ON categories.category_id = products.category_id
    GROUP BY categories.category_name
    ORDER BY Total_de_Ventas DESC LIMIT 5
)
UNION ALL
(
    SELECT category_name, COUNT(sales.total) AS Total_de_Ventas FROM sales INNER JOIN products ON products.product_id = sales.product_id
    RIGHT JOIN categories ON categories.category_id = products.category_id
    GROUP BY categories.category_name
    ORDER BY Total_de_Ventas ASC LIMIT 5
);

-- CORRECCIÓN
-- La consulta anterior contaba con algunos errores de sintaxis
-- Esd incorrecto que para utilizar UNIONES se trabaje con 2 consultas sin darlas como subconsultas

SELECT * FROM (
    SELECT c.category_name, SUM(s.quantity) AS total_ventas
    FROM sales s
    JOIN products p ON s.product_id = p.product_id
    JOIN categories c ON p.category_id = c.category_id
    GROUP BY c.category_name
    ORDER BY total_ventas DESC
    LIMIT 5
) AS top5

UNION ALL

SELECT * FROM (
    SELECT c.category_name, SUM(s.quantity) AS total_ventas
    FROM sales s
    JOIN products p ON s.product_id = p.product_id
    JOIN categories c ON p.category_id = c.category_id
    GROUP BY c.category_name
    ORDER BY total_ventas ASC
    LIMIT 5
) AS bottom5;