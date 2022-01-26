/**
 * Tarea
 * 
 * 1. Nuestro Scrpit tiene que crear hola.txt
 * 2. En funciones separadas usar la funcion appendFile para agregar una segunda linea
 * 3. Despues de 5 segundos eliminar el archivo (fs.unlink)
 */



const fs = require('fs')

// fs.writeFile('hola.txt', 'Tarea de la clase 6: agregar una segunda linea con appendfile y despues de 5 segundos eliminar el archivo', 'utf8', NewFile )
//  function NewFile ( error ) {
//     if( error ){
//         console.log( 'Hubo un error al crear el archivo' , error )
//         return
//     }
//     console.log( `El archivo fue escrito exitosmente` )
//     TextAppend()
//  }




//  function TextAppend(){
//     fs.appendFile('hola.txt', ', Somos la generacion 15g lol', error)
//     if(error){
//         console.log('error al añadir', error)
//         return
//     }
//     console.log('Se agrego exitosamente')
//     Delete()
//  }


//  function Delete(){
//     setTimeout (() => {
//         fs.unlink('hola.txt', (err) => {
//             if(err){
//                 console.log(`Error al borrar archivo`)
//             }
//             console.log(`Archivo Eliminado`)
//         })
//      }, 5000)





// const filePath = 'voy-a-morir.txt'

// fs.writeFile(filePath, 'Hola! no me queda mucho tiempo', 'utf8', (error) => {
//     if(error){
//         console.error('No se puede crear el archivo')
//         return
//     }

//     fs.appendFile(filePath, 'Tengo algo que decirte... ', (error) => {
//         if(error){
//             console.error('No se pudo agregar el archivo')
//             return
//         }

//         setTimeout(() => {
//             fs.unlink(filePath,(error) => {
//                 if(error){
//                     if(error) {
//                         console.error('No se pudo borrar el archivo')
//                         return
//                     }
//                     console.log('adios popo')
//                 }
//             },5000)
//         })
//     })
// })

// const fs = require('fs')
/**
 * 1- crear un archivo
 * 2- agregar una segunda linea
 * 3- despues de 5 segundos se borra el archivo
 */
const filePath = 'voy-a-morir-js'

// paso 1
fs.writeFile(filePath, 'Hola! no me queda mucho tiempo', 'utf8', (error) => {
  if(error) {
    console.error('No se pudo crear el archivo')
    return
  }

  // paso 2
  fs.appendFile(filePath, 'Tengo algo importante que decirte...', (error) => {
    if (error) {
      console.error('No se pudo Agregar al archivo')
      return
    }

    // paso 3
    setTimeout(() => {
      fs.unlink(filePath, (error) => {
        if (error) {
          console.error('No se pudo borrar');
          return
        }
        console.log('Adios popo')
      })
    }, 5000)

  })

})













 

