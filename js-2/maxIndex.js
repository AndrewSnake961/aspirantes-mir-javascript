//Crea una función maxIndex que reciba una arreglo de números y 
// retorne el índice donde se encuentra el mayor. Si el arreglo está 
// vacío debe retornar -1.

//escribe la función maxIndex acá
function maxIndex(arrayOfNumbers){
    if(arrayOfNumbers.length==0){
        return -1
    }
    let maxNumber=0
    for(let i=0; i<arrayOfNumbers.length; i++){
        if(maxNumber<arrayOfNumbers[i]){
            maxNumber = arrayOfNumbers[i]
            maxIndexOfArray=i
        }
    }
    return maxIndexOfArray

}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1