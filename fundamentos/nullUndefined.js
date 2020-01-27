let valor // Variável criada, mas não inicializada
console.log(valor)


// console.log(valor2) // Erro: variável não definida/declarada (não foi criada)

valor = null // Ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}

console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined // Evite atribuir 'undefined', use o 'null'
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // Produto sem preço
console.log(!!produto.preco)
console.log(produto)