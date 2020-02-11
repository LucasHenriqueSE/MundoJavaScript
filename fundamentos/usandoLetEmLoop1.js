/* Como o 'let' possui escopo de bloco vai gerar um erro ao tentar acessá-lo fora do mesmo */

for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log('i =', i)