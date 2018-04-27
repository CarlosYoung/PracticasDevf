let funcionSuma=require('./suma.js')
let funcionRest=require('./resta.js')
let funcionMult=require('./mult.js')
let num1=10;
let num2=4;
function suma(){
    console.log(funcionSuma(num1,num2));
}
suma();
function resta(){
    console.log(funcionRest(num1,num2));
}
resta();
function mult(){
    console.log(funcionMult(num1,num2));
}
mult();
