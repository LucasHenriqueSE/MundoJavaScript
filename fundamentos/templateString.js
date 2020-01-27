const nome = 'Lucas'

// Concatenação padrão
const concatenacao = 'Olá ' + nome + '!'

// Concatenação através de Template String, utiliza expressão para processar os dados, fora isso tudo é texto
const template = `
        Olá ${nome}!
        Tome cuidado!!!
        `
console.log(concatenacao, template)

// Expressões
console.log(`1 + 1 = ${1 + 1}`)

// Exemplo de função arrow
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)