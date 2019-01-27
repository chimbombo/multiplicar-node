const opt = {
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
    .command('listar', 'Imprime en la consola la tabla de multiplicar', opt)
    .command('crear', 'crea un archivo con la tabal pedida', opt)
    .help()
    .argv;


module.exports = {
    argv
}