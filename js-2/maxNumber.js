// Crea una función max que reciba un arreglo de números y 
// retorne el número máximo sin usar el método Math.max de 
// JavaScript. Si el arreglo está vacío debe retornar undefined

//escribe la función max acá

function max(arrayOfNumbers){
    if(arrayOfNumbers.length==0){
        return undefined
    }
    let maxNumber=0
    for(let i=0; i<arrayOfNumbers.length; i++){
        if(maxNumber<arrayOfNumbers[i]){
            maxNumber = arrayOfNumbers[i]
        }
    }
    return maxNumber

}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined
//Working 14/03/2023 10:46PM