
const nombre=prompt("ingresa nombre")
console.log(typeof(nombre))
var nacimiento=parseInt(prompt("En que año nacio"));
console.log(typeof(nacimiento))
const fecha = new Date();
const fechaActual=fecha.getFullYear();
let edad=fechaActual-nacimiento

//0 5 es un niño de 6 a 17 joven y mayor de 17 es un mayor de edad 

if (edad<=5){
    document.write("niño usted tiene" +edad+  "Años de edad") 
} else if(edad<=17){
    document.write("joven usted tiene "+edad+ " Años de edad") 
}
else{
    document.write("Señor(a) " + nombre +  "usted tiene "+edad+ " Años de edad") 
}