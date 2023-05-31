// crear tres variables tipo numero para capturar 3 notas
// calcular el promedio de los tres 

// si la nota es menor que 3 esta perdido 
// si la nota es menor entre 3,1 y 3,3 recuperar 
// si la nota es mayor o igual a 3,4, aprobo 

const nota1 = parseFloat(prompt("ponga la primera nota"))
const nota2 = parseFloat(prompt("ponga la segunda nota"))
const nota3 = parseFloat(prompt("ingresa la tercera nota"))

const total = (nota1 + nota2+ nota3) / 3 

if (total<=3){
    document.write("perdio") 
}else if(total<=3.3){
    document.write("le toca recuperar")
}else if(total>=3.4){
    document.write("aprobo la materia")
}
document.write(total)