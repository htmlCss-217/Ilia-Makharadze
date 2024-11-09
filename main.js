'use strict';

let celsius = prompt("Enter the temperature in celsius:");


if(isNaN(celsius)){
    alert("it must be number")
}else{
    let fahrenheit=parseFloat(celsius)*9/5+32;
    
    alert('Temperature in Fahrenheit:'+fahrenheit +'F');
}
//change the p tag from html
document.getElementById('buttonID').addEventListener('click',function(){
    document.getElementById('demo').innerHTML="change the text";});

//create html tags from js
 
document.getElementById('atag').innerHTML="add information from js";
