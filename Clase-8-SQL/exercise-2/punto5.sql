-- 5. "Quisiera ver todos los productos aunque no se hayan vendido nunca, y que al lado me diga cuántas unidades se vendieron, si no vendió nada que diga 0."

SELECT p.product_name, COALESCE(SUM(s.quantity), 0) AS unidades_vendidas
FROM products p
LEFT JOIN sales s ON p.product_id = s.product_id
GROUP BY p.product_name;