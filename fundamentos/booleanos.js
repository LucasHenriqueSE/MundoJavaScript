let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// Quando se utiliza a negação(!), o JavaScript interpreta o valor como booleano
// Neste caso, a dupla negação(!!) faz com que o valor volte a seu estado original (true ou false)
// Qualquer valor diferente de 0 no JavaScript é iterpretado como true, desde que esteja com a negação
isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')
