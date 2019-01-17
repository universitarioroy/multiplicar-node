
const {argv}=require('./config/yarng');
const {crearArchivo,listarTabla}= require('./multiplicar/ejemplo'); 
const colors=require('colors');
let comando=argv._[0];

switch(comando){
    case 'listar':
          listarTabla(argv.base,argv.limite).then(
              data=>{console.log(data)}
          ).catch(err=>{console.log(err)});  
    break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then(mensaje=>{console.log(mensaje)})
        .catch(err=>{console.log(err)});
    break;
    default:
        console.log('Comando no reconocido');      
}


// console.log(process.argv);
// let argv= process.argv;
// let parametro = argv[2];
// llamando node ejemplo1 --base=2
// base=parametro.split('=')[1]; 

