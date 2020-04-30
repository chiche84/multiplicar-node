const fs = require('fs');
const colores = require('colors');

let crearArchivaso = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${ base } no es un número, carnero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }


        fs.writeFile(`tablas/tabla-${ base }-con-limite-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-con-limite-${ limite }.txt`);

        });

    });
};

let mostrarMulti = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor no es un número, carnero`);
            return;
        }

        let data = '';

        data = '----------------\n'.green;
        data += `---tabla de ${ base}---\n`.green;

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`.blue;
        }

        resolve(data);
    });
};

module.exports = {
    crearArchivaso,
    mostrarMulti
}