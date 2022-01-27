const fs = require('fs/promises')



//   *************  then y catch  ******************* 

// const file = 'Then-Catch.txt'

// fs.writeFile(file,'hola a todos','utf8')
// .then(() => {
//     console.log('archivo creado')
//     fs.appendFile(file,'\nnueva linea','utf8')
//     .then(() => {
//         console.log('Nueva linea agregada')
//         setTimeout(() => {
//             fs.unlink(file)
//             .then(() => {
//                 console.log('Archivo eliminado')
//             })
//             .catch(error => {
//                 console.error('ERROR: ',error)
//             })
//         }, 5000);
//     })
//     .catch(error => {
//         console.error('ERROR: ',error)
//     })
// })
// .catch(error => {
//     console.error('ERROR: ',error)

// })


//   *********************  async await  *************************


const filePath = 'Promises.txt'


async function main () {
   const File =  await fs.writeFile(filePath, 'Hola! no me queda mucho tiempo', 'utf8', (error) => {
    if(error) {
      reject('No se pudo crear el archivo')
      return
    }
    resolve(File)
    })


   const Line = await fs.appendFile(filePath, 'Tengo algo importante que decirte...', (error) => {
    if (error) {
      reject('No se pudo Agregar al archivo')
      return
    }
    resolve(Line)
    })

    
   const Delete = await  setTimeout(() => {
    fs.unlink(filePath, (error) => {
      if (error) {
        reject('No se pudo borrar');
        return
      }
      console.log('Adios popo')
    })
    }, 5000)
    resolve(Delete)
}


main()
.then(()=> {
    console.log('Fin (async-await)')
})
.catch(error => {
    console.error('ERROR: ', error)
})






  

