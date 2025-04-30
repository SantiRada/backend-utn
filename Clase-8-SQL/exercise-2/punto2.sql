-- 2. "Quiero poder seleccionar una categoría y saber cuales son los 5 productos más vendidos de esa categoría."

SELECT p.product_name, SUM(s.quantity) AS total_vendido
FROM sales s
JOIN products p ON s.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
WHERE c.category_name = 'Bebidas'
GROUP BY p.product_name
ORDER BY total_vendido DESC
LIMIT 5;
