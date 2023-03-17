/*Crea una variable llamada pedro de tipo objeto literal con las siguientes llaves y valores:
nombre - "Pedro Perez"
edad - 30
activo - true
hobbies - un arreglo con los siguientes elementos: "programar", "squash", "piano"*/
const pedro = {
    nombre:"Pedro Perez",
    edad :30,
    activo:true,
    hobbies:["programar", "squash", "piano"]
}
//Imprime en la consola el valor de la llave edad.
console.log(pedro.edad)
//Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8;
//Elimina la propiedad con llave activo
delete pedro.activo;

/*Recorre todas las propiedades e imprímelas en consola 
(una línea por propiedad y separando la llave y el valor con dos puntos :).*/
for (let llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
      console.log(llave + ": " + pedro[llave])
    }
  }
/*Agrégale al objeto una función llamada saluda que
 retorne la frase “Hola, me llamo ” seguido del nombre de la persona.  */
pedro.saluda = function (){
    return "Hola, me llamo " + this.nombre
}
//Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”.
console.log(pedro.saluda())

