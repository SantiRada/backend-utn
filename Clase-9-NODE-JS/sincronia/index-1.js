// import { os } from 'os';
const fs = require('fs');


console.log("INICIO DE PROCESO");

// 1. Trabajar de forma sincrona
// const files = fs.readFileSync('./texto.txt', 'utf-8');
// console.log("DATA: ", files);

// 2. Trabajar de forma asincrona
// fs.readFile('./texto.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log("ERROR: ", err);
//     }else{
//         console.log("DATA: ", data);
//     }
// });

// 3. Trabajar de forma Asincrona en Paralelo
Promise.all([
    fs.readFile('./texto.txt'),
    fs.readFile('./texto-2.txt')
]).then((data) => {
    console.log("DATA: ", data[0].toString(), data[1].toString());
}).catch((err) => {
    console.log("ERROR: ", err);
})

console.log("FINAL DE PROCESO");
