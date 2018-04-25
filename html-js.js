let h1 = document.createElement('h1');
let texto_h1=document.createTextNode('hey que onda soy un H1 con JS')
h1.appendChild(texto_h1);
let elBody=document.getElementById('elBody');
elBody.appendChild(h1)

let cinta_blanca=[
 {
     'nombre':'omar',
     'edad':24
 },
 {
     'nombre':'francisco',
     'edad':39
 },
 {
     'nombre':'nora',
     'edad':24
 },
 {
     'nombre':'carlos',
     'edad':24
 },

]
for(i=0;i<cinta_blanca.length;i++){
    let h1=$('<h1>'+'Este perro se llama'+cinta_blanca[i].nombre+'y tiene'+cinta_blanca[i].edad+'anios'+'</h1>');
    $('#elBody').append(h1);
}


for(i=0;i<cinta_blanca.length;i++){
let h1=document.createElement('h1');
 let texto=document.createTextNode('Este morr@ se llama '+cinta_blanca[i].nombre+'y tiene '+cinta_blanca[i].edad+' anios ');
 h1.appendChild(texto);
 elBody.appendChild(h1);
}