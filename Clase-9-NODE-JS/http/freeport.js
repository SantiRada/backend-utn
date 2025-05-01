const http = require('node:http');

const processRequest = (req, res) => {
    console.log("Respuesta finalizada");
    res.end('Hola Mundo!');
};

const findPortServer = (port) => {
    const server = http.createServer(processRequest);

    server.listen(port, () => {
        console.log(`El servidor esta en el puerto http://localhost:${server.address().port}`);
    });

    server.on('error', (err) => {
        if(err === "EADDRINUSE") {
            findPortServer(0);
        }else{
            console.error("Error en el servidor: ", err);
        }
    });
}

// CREACIÓN DE VARIABLE DE ENTORNO => $env:PORT=3000; node ARCHIVO.JS
let portServer = process.env.PORT || 3000;

findPortServer(portServer);