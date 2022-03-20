const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base, listar, hasta) => {
    let salida = "";
    for(let i = 1; i <= hasta; i++){
        salida += `${base} x ${i} = ${base*i}\n`;
    }
    //Crear un archivo
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    console.log(`tabla-${base}.txt creado!`.rainbow)

    if(listar){
        console.log(`===== TABLA DEL ${base} =====`.green)
        console.log(salida)
    }
}

module.exports = {
    crearArchivo
}