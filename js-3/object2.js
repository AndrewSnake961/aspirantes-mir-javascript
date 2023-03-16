const persona ={
    nombre:"Andres" ,
    edad: 27,
    ciudad: "Medellín",
    profesion: "Ingeniero Mecánico",

}
console.log(persona)
//Crea una función llamada "presentacion" que tome el objeto 
//"persona" como argumento y devuelva una cadena de texto que 
//incluya el nombre, la edad y la ciudad de la persona.

function presentacion(person){
    return `Hola mi nomrbe es ${person.nombre}, tengo ${person.edad} años,y actualmente vivo en ${person.ciudad}.`
}
mensaje=presentacion(persona)
console.log(mensaje)
persona.hobbies = ["Videojuegos","Natación","Leer","Ver series de sci-fi"]
console.log(persona.hobbies)
for(let i of persona.hobbies){
    console.log(i)
}