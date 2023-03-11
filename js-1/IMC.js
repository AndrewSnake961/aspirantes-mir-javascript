// escribe la función bmi acá
// peso / altura^2
function bmi(weight, height){
    let imc = 0
    imc= (weight)/Math.pow(height,2)
    return imc

}
// código de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695

//Success