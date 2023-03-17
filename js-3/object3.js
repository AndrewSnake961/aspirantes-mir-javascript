/*Crear una variable llamada receta e inicialízalo con un objeto literal vacío.*/ 
const receta={

}
//Agrégale una propiedad nombre con valor “Sandwich”.
receta.nombre = "Sandwich"
//Agrégale una propiedad ingredientes con un arreglo vacío.
receta.ingredientes = []
/*Agrega un objeto al arreglo ingredientes con las siguientes propiedades:
nombre: “Pan”
cantidad: 2 */
receta.ingredientes.push({nombre: "Pan", cantidad: 2})
/**Agrega otro ingrediente al arreglo con las siguientes propiedades:
nombre: “Queso”
cantidad: 1 */
receta.ingredientes.push({nombre: "Queso",cantidad: 1})
/**Debajo del objeto imprime en la consola el nombre del primer ingrediente, debería aparecer "Pan". */
console.log(receta.ingredientes[0].nombre)

/**Suma todos las cantidades de los ingredientes y muestra el resultado en consola. */
quantityOfIngredients= receta.ingredientes[0].cantidad + receta.ingredientes[1].cantidad
console.log(`La cantidad de ingredientes utilizados es ${quantityOfIngredients}`)

