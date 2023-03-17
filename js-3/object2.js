/*Crea un objeto literal llamado "persona" con las siguientes 
propiedades: nombre, edad, ciudad y profesión.*/
const persona ={
    nombre:"Andres" ,
    edad: 27,
    ciudad: "Medellín",
    profesion: "Ingeniero Mecánico",

}
//Imprime en la consola el objeto "persona" completo
console.log(persona)

/*Crea una función llamada "presentacion" que tome el 
objeto "persona" como argumento y devuelva una cadena de texto
que incluya el nombre, la edad y la ciudad de la persona*/
function presentacion(person){
    return `Hola mi nomrbe es ${person.nombre}, tengo ${person.edad} años,y actualmente vivo en ${person.ciudad}.`
}
//Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje"
mensaje=presentacion(persona)
//Imprime en la consola el valor de la variable "mensaje".
console.log(mensaje)

/*Agrega una nueva propiedad al objeto "persona" llamada
 "hobbies" que sea un arreglo con algunos pasatiempos.*/
persona.hobbies = ["Videojuegos","Natación","Leer","Ver series de sci-fi"]
//Imprime en la consola la propiedad "hobbies" del objeto "persona".
console.log(persona.hobbies)
//Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.
for(let i of persona.hobbies){
    console.log(i)
}