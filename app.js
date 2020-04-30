const argvObj = require('./config/yargs').argv;
const colores = require('colors');


const { crearArchivaso, mostrarMulti } = require(`./multiplicar/multiplicar`);


let comando = argvObj._[0];

switch (comando) {
    case 'listar':
        console.log('LISTANDO.. COÑO');
        mostrarMulti(argvObj.base, argvObj.limite)
            .then(respuesta => console.log(respuesta))
            .catch(e => console.log(e));
        break;
    case 'crear':
        console.log('CREANDO.. COJONES');
        crearArchivaso(argvObj.base, argvObj.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`.cyan))
            .catch(e => console.log(e));
        break;
    default:
        console.log('QUE ESCRIBISTE? NO ME TOQUES LOS CONOJES');
        break;

}

//console.log(argv);


//let argv2 = process.argv;
// console.log(argv.base);
// console.log(argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//console.log(base);