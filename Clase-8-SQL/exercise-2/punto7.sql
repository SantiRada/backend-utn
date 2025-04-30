-- 7. "Quiero saber cual es el producto que más plata recaudó en el sistema pasándote su nombre."

SELECT p.product_name, SUM(s.total) AS total_recaudado
FROM sales s
JOIN products p ON s.product_id = p.product_id
WHERE p.product_name = 'Coca Cola'
GROUP BY p.product_name;