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
   const File =  await fs.writeFile(filePath, 'Hola! no me queda mucho tiempo', 'utf8')


   const Line = await fs.appendFile(filePath, '\nTengo algo importante que decirte...')


   const Delete = await  setTimeout(() => {
    fs.unlink(filePath)
   },5000)
}


main()
.then(()=> {
    console.log('Fin (async-await)')
})
.catch(error => {
    console.error('ERROR: ', error)
})






  

