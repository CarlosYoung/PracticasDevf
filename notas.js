let tarjeta=[];


function add(){
    let tarj=$('<div class="tarjeta pre"><input type="text"></input><textarea></textarea><button>Save</button></div>');
    $('.contenedor').prepend(tarj);
}

/*$(document).ready(function(){
        $("button").click(function(){
        	$(".contenedor").prepend(function(tarjeta){
            	    return;
        	});
    	}); 
});*/

/*$(document).on('ready',function(){
    $('#bot').click(function(){
        let tarj=$('<div class="tarjeta"><h3>otra tarjeta</h3></div>');
        $('.contenedor').prepend('.contenedor');
    });
})*/