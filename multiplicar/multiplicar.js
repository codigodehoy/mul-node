require("colors");

const fs = require("fs");
let data = "";
let consola = "";

let crearArchivo = (base, listar, hasta) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`${base} no es un número`);
      return;
    }
    for (let i = 1; i <= hasta; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
      consola += `${base} ${"*".blue} ${i} ${"=".blue} ${base * i}\n`;
    }
    if (listar) {
      console.log(consola);
    }
    fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt creado`.trap.rainbow);
    });
  });
};

module.exports = {
  crearArchivo,
};
