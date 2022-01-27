//Promesas.

//hay un constructor golobal y se llama asi
// new promise ((resolve, reject) => {})

// resolve => una funcion que vamos a ejecutar cuando la promesa debe pasar de pendiente a resuelta
// reject => una funcion que vamos a ejecutar cuando la promesa debe pasar de pendiente a rechezada

//la promesa creada (objeto) tendra dos metodos: then y catch
//El then se ejecuta cuando la promesa se resuelve 
//El catch se ejecuta cuando la promesa es rechazada


/**
 * proceso de construir una pared
 * 5 formas de diferentes formas
 */

/**
 * construir un muro
 * 
 * -Constriur el muro
 * -- aplanar el muro
 * --- pintar el muro
 */


 const muro = {
     construido: false,
     aplanado: false,
     pintado: false
 }

 //resuleto con promesas
 function construir (unMuro) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            unMuro.construido = true
           if(!unMuro.construido) {
               reject(new Error('No se pudo construir'))
               return
           }

           resolve(unMuro)

        },2000)
    })
}


 function aplanar (unMuro) {
     return new Promise((resolve,reject) => {
         setTimeout(() => {
             unMuro.aplanado = true

            if(!unMuro.aplanado) {
                reject(new Error('No se pudo aplanar'))
                return
            }

            resolve(unMuro)

         },2000)
     })
 }


function pintar (unMuro) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            unMuro.pintado = true

           if(!unMuro.pintado) {
               reject(new Error('No se pudo pintar'))
               return
           }

           resolve(unMuro)

        },2000)
    })
}

//resuelto con then y catch.

//  function construir (unMuro, unaFuncion) {
//      setTimeout(() => {
//         unMuro.construido = true
//         unaFuncion(null,unMuro)
//      }, 2000)
//  }

//  function aplanar(unMuroConstruido, unaFuncion) {
//      setTimeout(() => {
//         unMuroConstruido.aplanado = true
//     unaFuncion(null,unMuroConstruido) 
//     }, 2000)
//  }

//  function pintar (unMuroAplanado,unaFuncion) {
//      setTimeout(() => {
//         unMuroAplanado.pintado = true
//     unaFuncion(null,unMuroAplanado)
//      },2000)
//  }

//******************************************************** */

// Promises HELL
construir(muro)
    .then((muroConstruido) => {
        console.log('muroConstruido: ', muroConstruido)
        aplanar(muroConstruido)
        .then((muroAplanado) => {
            console.log('muroAplanado: ', muroAplanado)
            pintar(muroAplanado)
            .then((muroPintado) => {
                console.log('muroPintado: ', muroPintado)
            })
            .catch((error) => {
                console.log('ERROR: ',error)
            })
        })
        .catch((error) => {
            console.log('ERROR: ',error)
        })
    })
    .catch((error) => {
        console.log('ERROR: ',error)
    })


// **************************************************
//a esto se llama Callback Hell
// construir({ ... muro } , (error,muroConstruido) => {
//     aplanar(muroConstruido, (error,muroAplanado) => {
//         pintar(muroAplanado, (error,muroPintado) => {
//             console.log('Muro listo: ', muroPintado)
//             console.log('Muro: ', muro)
//         })
//     })
// })




// ************* async await ******************
//las dos son palabras reservadas

// async -> es una palabra reservada para marcar una funcion asyncrona (es toda aquella que usa await internamente)
// await -> es una palabra que usaremos para esperar la resolucion de una promesa


// async function principal() {
//     const muroConstruido = await construir(muro)
//     const muroAplanado = await aplanar(muroConstruido)
//     const muroPintado = await pintar(muroAplanado)
//     console.log('muroPintado: ', muroPintado)
// }

// principal()
// .then(( ) => {
//     console.log('FIN')
// })
// .catch((error ) => {
//     console.error('ERROR: ', error)
// })


