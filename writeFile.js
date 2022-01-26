/**
 * fs.readFile
 * para leer un archivo e imprimirlo en consola desde otro archivo en txt
 * desde ese comando desde un archvio de js
 * tarea
 * const fs = requiere('fs')
 */

 const fs = require('fs')

 //es importante el orden
 function atTheEnd(error) {
     console.log('error: ',error)
     if(error){
         console.log('Hubo un error al crear el archivo', error)
         return
     }
     console.log(`El archivo fue escrito exitosmente`)
 }

 
 function Append(error) {
     if(error){
         console.log('error al añadir', error)
         return
     }
     console.log('Se agrego exitosamente')
 }
 
 fs.writeFile('hola.txt', 'hola a todos desde el nuevo archivo', 'utf8', atTheEnd)
 fs.appendFile('hola.txt',' Probando el appendFile', Append )



// Falsy 
// Son todos aquellos valores que cuando preguntamos logicamente evaluan a falso
// Representan el vacio o la nada, la falta de datos
// 0 , '' , null, undefined, False.

// Thruthy
// Representan un valor
//  1..n y hasta negativos -1..-n
// excepto el 0
// 'iusfsudf' algun string
// [] algun array o algun objeto {}
// todos los demas son thruthys

// if (null) {
//     console.log('Es thruthy')
//     return
// }
// console.log('Es Falsy')


// **************   Repaso    /******************* */

//fs.writeFile(archivo, datos, [opcional: formato que te regresa los datos], callback)

// //es importante empezar a declarar esta constante para llamar los diferentes tipos de fs
// const fs = require('fs')

//  //es importante el orden
//  function writeFile(error) {
//      console.log('error: ',error)
//      if(error){
//          console.log('Hubo un error al crear el archivo', error)
//          return
//      }
//      console.log(`El archivo fue escrito exitosmente`)
//  }

//  //aqui se llama a la funcion para crear un archivo con el nombre 'tarea.txt' 
//  // y agregar la informacion que queremos en el archvio ('hola a todos desde la tarea'),
//  // despues el formato en que regresa el archivo 
//  // y al final la funcion que comprueba si la funcion funciona correctamente.
//  fs.writeFile('tarea.txt', 'hola a todos desde la tarea', 'utf8', writeFile)