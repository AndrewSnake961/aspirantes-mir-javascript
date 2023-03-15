// Crear una función join que reciba un arreglo y retorne un 
// string con todos los elementos separados por espacio sin 
// usar el método join de los arreglos.
function join(arrayOfAnything){
    if(arrayOfAnything.length==0){
        return " "
    }
    let newArrayOfAnything = ""
    for(let i=0; i<arrayOfAnything.length; i++){
        newArrayOfAnything = newArrayOfAnything + " " + arrayOfAnything[i].toString()
    }
    return newArrayOfAnything
    //return arrayOfAnything.join(" ")

}
console.log(join([1, 3, 2])) // 
console.log(join([10, 9, 8, 7, 6, 5, 4])) // 
console.log(join([]))// 
console.log(join(["Banana","Mango","Pera","Guanabana","Guayaba","Borojó"]))

//Working 14/03/2023 10:46PM