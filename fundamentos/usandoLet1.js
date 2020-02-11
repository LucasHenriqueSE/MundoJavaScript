/* 'let' possui os três escopos(global, função e bloco) */

var numero = 1

{
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)