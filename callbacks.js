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

 
 //funciones que se van a llamar cuando una termine despues de que termine una
 function construir (unMuro, unaFuncion) {
     setTimeout(() => {
        unMuro.construido = true
        unaFuncion(null,unMuro)
     }, 2000)
 }



 function aplanar(unMuroConstruido, unaFuncion) {
     setTimeout(() => {
        unMuroConstruido.aplanado = true
    unaFuncion(null,unMuroConstruido) 
    }, 2000)
 }



 function pintar (unMuroAplanado,unaFuncion) {
     setTimeout(() => {
        unMuroAplanado.pintado = true
    unaFuncion(null,unMuroAplanado)
     },2000)
 }


//a esto se llama Callback Hell
construir({ ... muro } , (error,muroConstruido) => {
    aplanar(muroConstruido, (error,muroAplanado) => {
        pintar(muroAplanado, (error,muroPintado) => {
            console.log('Muro listo: ', muroPintado)
            console.log('Muro: ', muro)
        })
    })
})
