const receta={

}
console.log(receta)
receta.nombre = "Sandwich"
receta.ingredientes = []
console.log(receta)
receta.ingredientes.push({nombre: "Pan", cantidad: 2})
receta.ingredientes.push({nombre: "Queso",cantidad: 1})
console.log(receta.ingredientes[0].nombre)
quantityOfIngredients= receta.ingredientes[0].cantidad + receta.ingredientes[1].cantidad
console.log(`La cantidad de ingredientes utilizados es ${quantityOfIngredients}`)

// Suma todos las cantidades de los ingredientes y muestra 
//el resultado en consola.