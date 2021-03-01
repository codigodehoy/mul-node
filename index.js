const { crearArchivo } = require("./multiplicar/multiplicar.js");
const argv = require("./config/yargs");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((resul) => console.log(resul))
  .catch((err) => console.log(err));

// console.log(process.argv);
