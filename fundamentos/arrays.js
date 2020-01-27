// Um array é dinâmico (não possui tamanho fixo) podendo ser modificado a qualquer momento
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

// Retorna 'undefined' caso o indice não tenha valor definido
console.log(valores[4])

// Adiciona um valor a um indice do array
valores[4] = 10

console.log(valores)
console.log(valores.length)

// Insere os valores no array
// Arrays podem conter diversos tipos de valores misturados. Ex(objeto, boolean, null, string)
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// A função .pop() remove o último indice do array
console.log(valores.pop())

// Remove o valor do indice de um array e atributos de objetos também
delete valores[0]
console.log(valores)

console.log(typeof valores)