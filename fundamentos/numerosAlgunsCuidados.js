/* 
 * Qualquer número dividido por '0' retorna 'Infinity', 
 * um valor que o JavaScript não consegue definir(infinito).
 */
console.log(7 / 0);

/* Tenta converter o valor '10' para Number e realizar a operação.  */
console.log('10' / 2);

/* O sinal de '+' é utilizado para concatenar strings logo o resultado não será o de uma adição */
console.log('3' + 2);

/* Tenta converter o valor '3' para Number e realizar a operação.  */
console.log('3' - 2);

/* Retorna um erro 'NaN'(Not a Number) */
console.log('Show' * 2);

/* Gera um numero impreciso (0.7999...) */
console.log(0.1 + 0.7);

/* Se um função for chamada dessa forma só irá funcionar colocando o valor entre '()' */
//console.log(10.toString())
console.log((10.345).toFixed(2));