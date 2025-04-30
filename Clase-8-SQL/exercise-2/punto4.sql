-- 4. "En base a las ventas me gustaría saber cual es el día que más vendo y cual el que menos."

SELECT * FROM (
    SELECT sale_date, SUM(quantity) AS total_vendido
    FROM sales
    GROUP BY sale_date
    ORDER BY total_vendido DESC
    LIMIT 1
) AS max_sales
UNION ALL 
SELECT * FROM (
    SELECT sale_date, SUM(quantity) AS total_vendido
    FROM sales
    GROUP BY sale_date
    ORDER BY total_vendido ASC
    LIMIT 1
) AS min_sales;