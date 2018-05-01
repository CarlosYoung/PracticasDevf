function buscar(){
    if(ValidaInputs()){
        $.ajax({
            url:"https://maps.googleapis.com/maps/api/directions/json?origin=Guadalajara&destination=Manzanillo",
            dataType:"jsonp",
        }).done(function(resp){
            console.log(resp);
        });
    }
    else{
        alert('eh papu, te falta el origen/destino');
    }
}
function ValidaInputs(){
    let origen=$('#origen').val();
    let destino=$('#destino').val();
    return origen.length>0 && destino.length>0;

}