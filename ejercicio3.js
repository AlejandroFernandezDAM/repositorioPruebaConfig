alert("Ejercicio 3");
let numero4 = parseInt(prompt("Introduce el primer numero: "));
let numero5 = parseInt(prompt("Introduce el segundo numero: "));
let mostrarComprendidos  = (numero4 , numero5) => {
for(let i = numero4; i <= numero5; i++){
if((i%2) == 0){
    console.log(i);
}
}
}
mostrarComprendidos(numero4, numero5);