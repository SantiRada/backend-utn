// globalThis => window

// CommonJS => NO SE RECOMIENDA HOY EN DÍA
// EcmaScript Modules => RECOMENDADO

// import { Suma } from './modulo.js';

// const { Suma } = require('./Suma.js'); COMMONJS
// import { Suma, Resta } from './Suma.js'; ES Modules
// import Suma from './Suma.js';

const { Resta } = require('./Suma.js');

console.log(Suma(2, 3));