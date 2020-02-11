/* Função sem retorno */
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // 2 + undefined = NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // Soma os dois primeiros e ignora os demais
imprimirSoma() // undefined + undefined = NaN

/**
 *  Função com retorno
 *  É possível definir um valor default para um parametro
 * */
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(2)