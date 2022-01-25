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

 function aplanar(unMuroConstruido) {
     unMuroConstruido.aplanado = true
     return unMuroConstruido
 }

 function pintar (unMuroAplanado) {
     unMuroAplanado.pintado = true
     return unMuroAplanado
 }
construir({ ... muro } , (error,muroConstruido) => {
    console.log('muro constriudo', muroConstruido)
    console.log('error: ', error)
    
    pintar(muroConstruido)
})

//  const muroConstruido = construir(muro)
//  const MuroAplanado = aplanar(muroConstruido)
//  const muroPintado = pintar(MuroAplanado)

//  console.log('muroConstruido: ',muroConstruido).


/**
 * Tarea
 * 
 * 1. Nuestro Scrpit tiene que crear hola.txt
 * 2. En funciones separadas usar la funcion appendFile para agregar una segunda linea
 * 3. Despues de 5 segundos eliminar el archivo (fs.unlink)
 */