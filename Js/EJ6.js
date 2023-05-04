let num1 = parseInt(prompt("Ingrese el primer número")) 
let num2 = parseInt(prompt("Ingrese el segundo número"))

if(num1 > num2){
    document.write(num1 + " es mayor a " + num2)
}
else if(num2 > num1){
    document.write(num2 + " es mayor a " + num1)
}
else if(num1===num2){
    document.write("Los números son iguales")
}