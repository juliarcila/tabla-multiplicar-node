const { crearTablaMultiplicar } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs')


console.clear();

// const [,, arg3 = '--base=5'] = process.argv;
// const [,base = 5] = arg3.split('=');

// console.log(process.argv);
// console.log(argv);


// console.log(base);

/*
option('l')
listar
boolean
default: false
*/

const {base, listar, hasta} = argv;

crearTablaMultiplicar(base, listar, hasta)
    .then( tabla => console.log(tabla, '. ¡Genial!'.rainbow) )
    .catch(err => console.log(err));


