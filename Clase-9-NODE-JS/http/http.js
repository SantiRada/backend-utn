const http = require('node:http');
// const fs = require('node:fs');

const DATA = {
    batman: {
        name: 'Batman',
        age: 35,
        power: 'money',
        city: 'Gotham',
    },
    superman: 'superman',
    flash: 'flash',
    aquaman: 'aquaman',
    greenLantern: 'greenLantern'
};

const server = http.createServer((req, res) => {
    const path = req.url.split('/'); // [0] = '', [1] = 'heroes', [2] = 'batman'
    // GET POST PUT DELETE

    // if(req.method === 'GET') { res.end("Hola desde el servidor!"); }
    // else { res.end("No se permite"); }

    switch (req.method) {
        case 'GET':
            if (path[1] === "heroes") {
                if(DATA[path[2]]){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end("Encontramos a " + Object.values(DATA[path[2]]).map((value) => {
                        value = value.toString().toUpperCase();
                        return value;
                    }));
                }else{
                    res.end("No existe el heroe!");
                }
            }else{
                res.end("No hay heroes!");
            }
            break;
        case 'POST':
            res.end("Creando un nuevo heroe!");
            break;
        case 'PUT':
            break;
        case 'DELETE':
            break;
        default:
            res.end("Not Found!");
            break;
    }
});

server.listen(3005, () => {
    console.log(`El servidor esta en el puerto http://localhost:${server.address().port}`);
});

// netstat -aon | findstr LISTENING
// netstat -aon | findstr :3000
// ---------------------------------- //
// sudo lsof -i -P -n | grep LISTEN
// sudo lsof -i :3000