// 'var' não possui escopo de bloco, ficando neste caso no escopo global
{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

// 'var' possui escopo de função
function teste(){
    var local = 123
}

teste()
console.log(local)