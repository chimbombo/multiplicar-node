let fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('Solo puede introducir numeros');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base * i}\n`;
        }

        console.log('==============='.green);
        console.log(`Tabla de ${ base }`.cyan);
        console.log('==============='.green);
        console.log(data);
    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('Solo puede introducir numeros');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base * i}\n`;
        }

        fs.writeFile(`Tablas/tabla-${ base }.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`)

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}