/**
 * Tarea
 * 
 * 1. Nuestro Scrpit tiene que crear hola.txt
 * 2. En funciones separadas usar la funcion appendFile para agregar una segunda linea
 * 3. Despues de 5 segundos eliminar el archivo (fs.unlink)
 */



const fs = require('fs')


 function NewFile ( error ) {
    if( error ){
        console.log( 'Hubo un error al crear el archivo' , error )
        return
    }
    console.log( `El archivo fue escrito exitosmente` )
 }


 function Append(error){
    if(error){
        console.log('error al añadir', error)
        return
    }
    console.log('Se agrego exitosamente')
 }


 function Delete(error){
    setTimeout (() => {
        if(error){
            console.log('Error el borrar archivo')
        }
        console.log('Archivo eliminado')
     }, 10000)
 }


 fs.writeFile('hola.txt', 'Tarea de la clase 6: agregar una segunda linea con appendfile y despues de 5 segundos eliminar el archivo', 'utf8', NewFile )
 fs.appendFile('hola.txt', ' Somos la generacion 15g lol', Append)
 fs.unlink('hola.txt', Delete)
