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
     if(error){
         console.log('Hubo un error al crear el archivo', error)
         return
     }
     console.log(`El archivo fue escrito exitosmente`)
 }
 
 fs.writeFile('hola.txt', 'hola a todos desde el nuevo archivo', 'utf8', atTheEnd)



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