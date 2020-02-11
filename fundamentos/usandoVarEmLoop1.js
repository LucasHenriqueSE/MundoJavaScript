/* Como 'var' não possui escopo de bloco, a variável 'i' se encaixa no escopo global */

for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log('i =', i)