const http = require('node:http');

const DATA = {
    batman: {
        name: 'Batman',
        age: 35,
        power: 'money',
        city: 'Gotham',
    },
    superman: {
        name: 'Superman',
        age: 30,
        power: 'super strength',
        city: 'Metropolis',
    },
    flash: {
        name: 'Flash',
        age: 28,
        power: 'super speed',
        city: 'Central City',
    },
    aquaman: {
        name: 'Aquaman',
        age: 33,
        power: 'control of the ocean',
        city: 'Atlantis',
    },
    greenLantern: {
        name: 'Green Lantern',
        age: 32,
        power: 'energy constructs',
        city: 'Oa',
    }
};

const server = http.createServer((req, res) => {
    const path = req.url.split('/'); // [0] = '', [1] = 'heroes', [2] = 'batman'

    switch (req.method) {
        case 'GET':
            if (path[1] === "heroes") {
                if (path.length > 2) {
                    if(DATA[path[2]]){
                        res.statusCode = 200; // http
                        res.setHeader('Content-Type', 'application/json; charset=utf-8');
                        res.end(JSON.stringify(DATA[path[2]]));
                    }else{
                        res.end("¡No existe el heroe!");
                    }
                }else{
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json; charset=utf-8');
                    res.end(JSON.stringify(DATA));
                }

            }else{
                res.end("No hay busqueda.");
            }
            break;
        case 'POST':
            let body = '';

            req.on('data', (chunk) => {
                body += chunk.toString();
            });

            req.on('end', () => {
                let codeBody = JSON.parse(body);
                // CONECTARME CON BASE DE DATOS
                
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
                res.end(JSON.stringify(codeBody));
            });
            break;
        default:
            res.end("Not Found!");
            break;
    }
});

server.listen(3005, () => { console.log(`El servidor esta en el puerto http://localhost:${server.address().port}`); });