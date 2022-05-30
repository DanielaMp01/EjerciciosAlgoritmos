//EJERCICIO 1
function Numeromayor () {
const num1 = parseFloat(prompt(" Ingresa el primer numero del 1 al 100"));
const num2 = parseFloat(prompt(" Ingresa el segundo numero del 1 al 100"));
const num3 = parseFloat(prompt(" Ingresa el tercer numero del 1 al 100"));
let num_mayor;
if(num1 >= num2 && num1 >= num3) {
    num_mayor= num1;
 }
  else if (num2 >= num1 && num2 >= num3) {
    num_mayor =  num2;
 }
 else {
   num_mayor = num3;
 }
 console.log("El número mayor de los 3 números ingresados es: " + num_mayor);
}

//EJERCICIO 2
function Numeromenor () {
    let num_menor;
 if(num1 <= num2 && num1 <= num3) {
      num_menor = num1;
 }
 else if (num2 <= num1 && num2 <= num3) {
     num_menor =  num2;
 }
 else {
     num_menor = num3;
 }
 console.log("El número menor de los 3 números ingresados es: " + num_menor);
}

// EJERCICIO 3
function Sumadedosnumeros () {
const num4 = parseInt(prompt(" Ingresa el primer número "));
const num5 = parseInt(prompt(" Ingresa el segundo número "));
const num6 = parseInt(prompt(" Ingresa el tercer número "));

 if(num4==(num5+num6)) {
      alert("El número" +num4+" es la suma de "+num5+" y "+num6+"");
  }
 else if (num5==(num4+num6)){
    alert("El número" +num5+" es la suma de "+num4+" y "+num6+"");
 }
 else if (num6==(num4+num5))
    alert("El número" +num6+" es la suma de "+num4+" y "+num5+"")
  
  else {
    alert("Ningún numero es la suma de los otros dos")
  }
 console.log("Los siguientes numeros son una suma: " + suma);
}

 // EJERCICIO 5
 function Multiplo3 () {
const num7 = parseInt(prompt(" Ingresa un número entero entre el 100 y el 200"));
if(num7<100 || num7>200){
    alert(parseInt(prompt(" El numero ingresado no es un número entero entre el 100 y el 200")));
  }
     else if(( num7 % 3 ) == 0){
        alert(num7 + ' si es multiplo de 3');
  }else{
    
        alert(num7 + ' no es multiplo de 3');
    }
 }
//EJERCICIO 6
function Pareimpar () {
 const num8 = parseInt(prompt(" Ingresa un número entero"));
        if(( num8 % 2 ) == 0){
        alert(num8 + ' es par'); 
     }else{
        alert(num8 + ' es impar');
     }
   }
    
    
     function Adivinar () {
      let superior = 100;
      let inferior = 0;
      
      let noEncontrado = true;
      while(noEncontrado){
      let mid = parseInt(inferior + ((superior-inferior) /2));
      console.log(mid);
      console.log (((superior-inferior)/2));
      
      if(((superior-inferior)/2)<1){;
          noEncontrado=false;
          alert("tu número es el " + (parseInt(mid)+1));
          break;
      }
      let res =confirm (" Tu numero es menor o igual a " + mid);
      if (res){
          superior=mid;}
       else {
           inferior=mid;
      }//if
      console.log(inferior, superior);
      
      }//while
      
      Adivinar();
      }//Adivinar
      
     