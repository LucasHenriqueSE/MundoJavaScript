let num1 = 1
let num2 = 2

num1++ // Realiza a operação de "forma lenta/sem prioridade"
console.log(num1)

--num1 // Realiza a operação de "forma rápida/com prioridade"
console.log(num1)

console.log(++num1 === num2--) // Realiza o incremento antes da comparação e realiza o decremento depois
console.log(num1 === num2)

