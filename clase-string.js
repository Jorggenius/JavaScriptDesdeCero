// Creacion de string
const primeraOpcion ='Comillas simples'
const segundaOpcion ="Comillas simples"
const terceraOpcion =`Comillas simples`

// COncatenacion: opcion +
const direccion ='Calle falsa 123'
const ciudad ='Springfield'
const direccionCompleta ='Mi direccion completa es '+ direccion + ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacio ='Mi direcciÃ³n completa es '+ direccion + ' ' + ciudad
console.log(direccionCompletaConEspacio)

// COncatenacion: template literals
const nombre ='Estefany'
const pais ='ðŸ‡¨ðŸ‡´'
const presentacion =`Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

//COncatenacion: join()
const primeraParte ='Me encanta'
const segundaParte ='la gente de'
const terceraParte ='Mexico'
const pensamiento = [primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' '))

//Concatenacion: concat()
const hobbie1 ='correr'
const hobbie2 ='leer'
const hobbie3 ='estudiar'
const hobbies ='Mis hobbies son: '.concat(hobbie1,', ',hobbie2,', ',hobbie3,'.')
console.log(hobbies)

// Caracteres de escape
//1. Escape alternativo
const escapeAlternativo ="I'm Software Engineer"
//2. Barra alternativa
const escapeBarraInvertida ='I\'m Software Engineer'
// TEmplate literals
const escapeComillaInvertida =`I'm Software Engineer`

// Escritura de estrings largos 

const poema ='Las rosas son rojas,\n'+
'Las violetas son azules,\n'+
'Caracter inesperado,\n'+
'En la lÃ­nea 86.'
console.log(poema)

const poema2 ='Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la lÃ­nea 86.'
console.log(poema2)

const poema3 =`Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la lÃ­nea 86.`
console.log(poema3)