
function login(){
   //aqui la funcion que valida
    if (validar()){
        alert('ingresa tu usuario y contrasena');
        $('body').css({'background-color':'#FF5533'})
    }
    else{
        alert('iniciando...')
        $('body').css({'background-color':'#3371FF'})
    }

}
//funcion si parametros que nos regresa true o false
function validar(){
    let elcorreo=document.getElementById('elcorreo').value;
    let elpassword=document.getElementById('elpassword').value;
//aqui nos regresa true o false
    return(elcorreo==0 || elpassword==0);
}


/*function login(){
    let elcorreo=document.getElementById('elcorreo').value;
    let elpassword=document.getElementById('elpassword').value;
    if (elcorreo==0 || elpassword==0){
        alert('ingresa tu usuario y contrasena');
    }
    else{
        alert('iniciando...')
        $('body').css({'background-color':'#3371FF'})
    }

}*/

