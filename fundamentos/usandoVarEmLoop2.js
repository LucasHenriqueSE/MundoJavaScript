/*
 * Como o escopo do 'var' não se aplica à blocos, os valores de 'i' durante o 'for'
 * não serão guardados 'em memória', fazendo com que apenas o valor final de 'i' 
 * seja referenciado em todos os índices.
 */

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()