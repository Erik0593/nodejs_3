
const fs = require('fs')


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
















 

