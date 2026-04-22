// FUNCIONES
/**
 * Una funcion es un bloque de codigo diseñado para realizar una tarea especifica.
 * Las funciones se pueden reutilizar en todo el programa, lo que las hace muy utiles para evitar la repeticion de codigo y mejorar la organizacion del programa.
 */

function cuadrado(numero){
    let cuadrado = numero * numero;
    return cuadrado;
}

saludo();
let numero = prompt("Ingrese un numero para calcular su cuadrado:");
let resultado = cuadrado(numero);
console.log("El cuadrado de " + numero + " es: " + resultado);

//Funcion sin input
function saludo(){
    console.log("Hola, bienvenido a JavaScript!");
}



//Funcion con multiples parametros
function areaRectangulo(base, altura){
    let area = base * altura;
    return area;
}

let base = prompt("Ingrese la base del rectangulo:");
let altura = prompt("Ingrese la altura del rectangulo:");
let area = areaRectangulo(base, altura);
console.log("El area del rectangulo es: " + area);

// Funcion Flecha
// Cuadrado de un numero utilizando una funcion flecha
const cuadradoFlecha = (numero) => {
    return numero * numero;
}

let numeroFlecha = prompt("Ingrese un numero para calcular su cuadrado con funcion flecha:");
let resultadoFlecha = cuadradoFlecha(numeroFlecha);
console.log("El cuadrado de " + numeroFlecha + " es: " + resultadoFlecha);
