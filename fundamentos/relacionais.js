console.log('01) "1" == 1 :', '1' == 1)
console.log('02) "1" === 1 :', '1' === 1)
console.log('03) "3" != 3 :', '3' != 3)
console.log('04) "3" !== 3 :', '3' !== 3)

console.log('05) 3 < 2 :', 3 < 2)
console.log('06) 3 > 2 :', 3 > 2)
console.log('07) 3 <= 2 :', 3 <= 2)
console.log('08) 3 >= 2 :', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

data1 = d1.getDay() + '/' + d1.getMonth() + '/' + d1.getFullYear()
data2 = d2.getDay() + '/' + d2.getMonth() + '/' + d2.getFullYear()

console.log('09) ' + data1 + ' == ' + data2 + ' :', d1 == d2)
console.log('10) ' + data1 + ' === ' + data2 + ' :', d1 === d2)
console.log('11) ' + d1.getTime() + ' == ' + d2.getTime() + ' :', d1.getTime() == d2.getTime())
console.log('12) ' + d1.getTime() + ' === ' + d2.getTime() + ' :', d1.getTime() === d2.getTime())

console.log('13) ' + 'undefined == null :', undefined == null)
console.log('14) ' + 'undefined === null :', undefined === null)