/*
 * O conceito de Hoisting(elevação) faz com que todas as variáveis sejam declaradas(não inicializadas) 
 * execução qualquer outro código(de acordo com seu escopo)
 */
console.log('a =', a)

var a = 1

console.log('a =', a)

/* O conceito de Hoisting não se aplica as variáveis declaradas como 'let' */

console.log('b =', b)

let b = 1

console.log('b =', b)