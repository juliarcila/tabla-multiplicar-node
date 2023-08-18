const fs = require('node:fs');
const colors = require('colors');

const crearTablaMultiplicar = async( base   , listar, hasta) => {
    
    try {
        let tabla = '';
        let consola = '';
        const tablaMultiplicar = ( x, hasta) => {
            
            for(let i=1; i<=hasta; i++){
                tabla = tabla + `${ x } * ${ i } = ${ x*i }\n`;
                consola = tabla + `${ x }`.green + ' * '.red + `${ i } = ${ x*i }\n`.cyan;
            }
    
            if(listar){
                console.log('=============================='.green);
                console.log(`Tabla de multiplicar del ${ x }`.black);
                console.log('=============================='.green);
                console.log(tabla);
            }
        }
        
        tablaMultiplicar(base, hasta);
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, tabla);
    
        return `Tabla del ${ base } creada correctamente`.cyan;
    } catch (error) {
        throw(error)
    }
};

module.exports = {
    crearTablaMultiplicar
};