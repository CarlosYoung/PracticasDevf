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

console.log(cinta_blanca);
console.log('este morro se llama'+cinta_blanca[1].nombre+'y tiene'+cinta_blanca[1].edad+'anios');

for(i=0;i<cinta_blanca.length;i++){
    console.log('este morro se llama'+cinta_blanca[i].nombre+'y tiene'+cinta_blanca[i].edad+'anios');
}
