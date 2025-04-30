# Panel de Administador
Matías, dueño de una vinoteca te pidió armar un sistema de control para su stock con múltiples métricas de revisión. Necesita tener un control exhaustivo de sus productos, ventas, stock, precios y más.
---
## Útilizando solo consultas SQL deberás resolver los siguientes pedidos de Matias:
(Los diferentes incisos están escritos como los diría un cliente para que además de la propia consulta SQL, puedan 
practicar su entendimiento del usuario)
---
# Paso 1
- Diseñar la estructura de la base de datos para el sistema de Matías
# Paso 2
- Crear el listado de consultas DDL
# Paso 3
- Rellenar las tablas de registros para los testeos con consultas DML
# Paso 4
- Completar las consultas de Matías en orden y con la sintaxis más óptima posible
---
1. "Me gustaría poder ver cuales son las 5 categorías con más y con menos ventas."
2. "Quiero poder seleccionar una categoría y saber cuales son los 5 productos más vendidos de esa categoría."
3. "Me gustaría poder saber cuantas ventas hay en un mes en específico, cuanta plata es y verlo separado en los métodos de pago."
4. "En base a las ventas me gustaría saber cual es el día que más vendo y cual el que menos."
5. "Quisiera ver todos los productos aunque no se hayan vendido nunca, y que al lado me diga cuántas unidades se vendieron, si no vendió nada que diga 0."
6. "Por último necesitaría un listado de todas las ventas del mes seleccionado que me indique también el nombre del producto vendido y el nombre de la categoría a la que pertenece."
7. "Quiero saber cual es el producto que más plata recaudó en el sistema pasándote su nombre."
---
## Aclaraciones
- Si en una consulta se espera que el usuario rellene un dato, deberás rellenarlo hardcodeando un ejemplo entre comillas simples ''.