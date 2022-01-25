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
 
 fs.writeFile('folder/hola.txt', 'hola a todos desde el nuevo archivo', 'utf8', atTheEnd)