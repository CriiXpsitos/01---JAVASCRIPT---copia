function mostrar(){
    nombre=document.getElementById('nombre').value
    
    function sumar(){
        n1=parseInt(prompt("Ingresa el primer numero"))
        n2=parseInt(prompt("Ingresa el segundo numero"))
        resultado=n1+n2;
        document.write("el valor de la suma es "+resultado+" Señor(a) "+nombre)
    }
    
    function restar(){
        n1=parseInt(prompt("Ingresa el primer numero"))
        n2=parseInt(prompt("Ingresa el segundo numero"))
        resultado=n1-n2;
        document.write("el valor de la resta es "+resultado+" Señor(a) "+nombre)
    }
    function multiplicar(){
        n1=parseInt(prompt("Ingresa el primer numero"))
        n2=parseInt(prompt("Ingresa el segundo numero"))
        resultado=n1*n2;
        document.write("el valor de la multiplicacion es "+resultado+" Señor(a) "+nombre)
    }
    function dividir(){
        n1=parseInt(prompt("Ingresa el primer numero"))
        n2=parseInt(prompt("Ingresa el segundo numero"))
        resultado=n1/n2;
        document.write("el valor de la division es "+resultado+" Señor(a) "+nombre)
    }
    function potencia(){
        n1=parseInt(prompt("Ingresa el primer numero"))
        resultado=n1*n1;
        document.write("el valor de la potencia es "+resultado+" Señor(a) "+nombre)
    }
    
    opc=parseInt(prompt("ingresa opcion 1 para sumar 2 para restar, 3 multiplicar,4 dividir, 5 elevado a la 2 para restar o otra opcion para salir"))
    switch(opc){
        case 1:
            sumar()
            break;
        case 2:
            restar()
            break;
        case 3:
            multiplicar()
            break; 
        case 4:
            dividir()
            break;
        case 5:
            potencia()
            break;             
        default: 
            alert("la opcion no es valida")   
    }
}