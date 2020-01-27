// Armazenando uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
// Utilizando uma arrow function é possível ocultar o 'function'
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// Tendo apenas um parâmetro na arrow function pode-se ocultar os parênteses
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')