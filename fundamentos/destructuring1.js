/* Novo recurso do ES2015 */

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
/* Utilizado para recuperar informações dos atributos de objetos */
const { nome, idade } = pessoa
console.log(nome, idade)

/* Pode-se optar por utilizar alias ao invés dos próprios nomes dos atributos */
const { nome: n, idade: i } = pessoa
console.log(n, i)

/* Também é possível acessar atributos compostos(dados aninhados) */
const { endereco: { logradouro: rua, numero, cep } } = pessoa
console.log(rua, numero, cep)

/* Utilizando valores default */
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

/* A propriedade conta não existe, causando erro ao tentar acessar alguma informação dentro da mesma */
const { conta: { agencia, num } } = pessoa
console.log(agencia, num)