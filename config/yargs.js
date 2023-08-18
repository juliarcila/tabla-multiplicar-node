const argv = require('yargs')
    .options({
        'b':{
            alias: 'base',
            type: 'number',
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10
        }
    })
    .check((argv, options) => {
        if(isNaN(argv.base)){
            throw 'la base no es de tipo number';
        }else if(isNaN(argv.h)){
            throw('El límite no es un número');
        }
        return true;
    })
    .argv;

    module.exports = {
        argv
    };