console.log("Reto 1: ");
let calificacion = prompt("Ingrese su calificacion: ");
console.log("Tu calificacion es: " + calificacion);
if(calificacion >= 6){
    console.log("Estas Aprobado!!");
} else {
    console.log("No estas aprobado.");
}

console.log("Reto 2: ");
for(let i = 0; i <= 20; i++){
    if(i % 2 == 0) console.log(i);
}

console.log("Reto 3: ");
let lista = ["Levantarme", "Desayunar", "Estudiar JavaScript"];
for(let i = 0; i < lista.length; i++){
    console.log(i+1 + ". " + lista[i]);
}