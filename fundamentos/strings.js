// O JavaScript entende as Strings como se fossem Arrays
const escola = "Cod3r"

// Retorna o valor no index informado
console.log(escola.charAt(4))

// Retorna uma string vazia, apesar do indice não existir
console.log(escola.charAt(5))

// Retorna o código decimal do caractere na tabela ASCII
console.log(escola.charCodeAt(3))

// Retorna o indice do valor informado
console.log(escola.indexOf('r'))

// Retorna o valor do array a partir do indice informado
console.log(escola.substring(1))

/* Retorna o valor do array a partir do indice informado como  
 * primeiro parametro até o indice anterior ao do segundo parametro informado 
 */
console.log(escola.substring(0, 5))

// Retorna uma string concatenada
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')

// Faz a subustituição de todos os caracteres iguais ao primeiro parametro pelo segundo parametro
console.log(escola.replace(3, 'e'))

// Separa cada valor individualmente de acordo com o caractere informado e cria um array com os valores
console.log('Ana,Maria,Pedro'.split(','))