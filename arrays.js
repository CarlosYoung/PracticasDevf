/*let unArray=[];
let suma=0;
for (i=0;i<=100;i++){
   unArray.push(i);
    suma=suma+i;
}
console.log(suma);*/

let array1=[7,12,6,7,8,9,12,9];
let array2=[123,56,2,5,8,9,8,1];
let array3=[];
for(i=0;i<=7;i++){
    array3[i]=array1[i]+array2[i]; 
    if (array3[i] == NaN)
            console.log(array3+0);
}
console.log(array3);
