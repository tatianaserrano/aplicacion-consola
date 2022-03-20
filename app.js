const {crearArchivo} = require("./utils/multiplicar")
const argv = require("./config/yargs")

console.log(argv)

//leer datos de la consola
//Esto ya no lo usamos porque lo reemplazamos por la librería yargs
// const [,, arg3] = process.argv;
// const [, base] = arg3.split("=");
// console.log(base)

crearArchivo(argv.b, argv.l, argv.h);
