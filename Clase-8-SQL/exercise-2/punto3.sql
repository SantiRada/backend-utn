-- 3. "Me gustaría poder saber cuantas ventas hay en un mes en específico, cuanta plata es y verlo separado en los métodos de pago."

SELECT s.payment_method, COUNT(*) AS cantidad_ventas, SUM(s.total) AS total_recaudado
FROM sales s
WHERE MONTH(s.sale_date) = 4 AND YEAR(s.sale_date) = 2025
GROUP BY s.payment_method;