const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la puta tabla', opciones)
    .command('crear', 'Crea un archivo locoo', opciones)
    .help()
    .argv;


//O ASI:

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la puta tabla')
//     .command('crear', 'Crea un archivo locoo')
//     .option('base', {
//         demand: true,
//         alias: 'b'
//     })
//     .option('limite', {
//         alias: 'l',
//         default: 10
//     })
//     .help()
//     .argv;

module.exports = {
    argv
}