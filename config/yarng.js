const opts= {
    base:{
        demand:true,
        alias:'b'
    },
    limite:{
        default:10,
        alias:'c'
    }
};

const argv=require('yargs')
    .command('listar','Imprime en consola la tabla de multiplicar ',
    opts)
    .command('crear','Crea la tabla  de multiplicar ',
    opts)
    .help()
    .argv;

module.exports={
    argv
}
