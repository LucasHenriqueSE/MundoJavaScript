/*
 * Como o escopo de 'let' se aplica à blocos, os valores de 'i' durante o 'for'
 * serão guardados 'em memória', mantendo assim os respectivos valores de cada índice.
 */

const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()