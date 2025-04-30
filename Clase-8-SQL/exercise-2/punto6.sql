-- 6. "Por último necesitaría un listado de todas las ventas del mes seleccionado que me indique también el nombre del producto vendido y el nombre de la categoría a la que pertenece."

SELECT s.sale_date, p.product_name, c.category_name, s.quantity, s.total
FROM sales s
JOIN products p ON s.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
WHERE MONTH(s.sale_date) = 4 AND YEAR(s.sale_date) = 2025;