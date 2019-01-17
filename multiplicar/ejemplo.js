const fs = require('fs');

var colors = require('colors/safe');


        let listarTabla=(base, limite)=>{
                return new Promise((resolve,reject)=>{
                        if(!Number(base) || !Number(limite)){
                                reject('La base o Limite no es numerico');
                                return;
                        }
                        let data='';
                        console.log('==============================='.green);
                        console.log(`Tabla ${base} to ${limite}`.green);
                        console.log('==============================='.green);
                        for (let index = 0; index <= limite; index++) {
                                data+=`${base} * ${index} = ${base * index} \n `;
                        }
                        resolve(data);
                        
                });
        }
let crearArchivo=(base, limite)=>{
        return new Promise((resolve,reject)=>{
                if(!Number(base) || !Number(limite) ){
                        reject(`La base o limite ingresada no ha es un numero`);
                        return;
                }
                let data='';
                for (let index = 0; index <= limite; index++) {
                        data+=`${base}*${index}=${base*index} \n `;
                }

                fs.writeFile(`./tablas/tabla-${base}-al ${limite}.txt`, data, (err) => {
                if (err)
                         reject(err);
                else
                        resolve('Archivo creado :'+ colors.green(`de la tabla-${base}-al ${limite} se ha creado`));
                });
        });
};

module.exports={
        crearArchivo,
        listarTabla
};


