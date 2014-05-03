$(document).ready(function(){
	$("#frmPrueba").submit(function(){
		var nombre, edad;
//		nombre = document.prueba.nombre.value;
		nombre = $("#txtNombre").val();
		edad = $("#txtEdad").val();

		if( nombre == "" ){
			//$("#mensaje").html("<strong>Llena tu nombre</strong>").fadeIn("slow");
			abreLightbox("<em>Pon tu nombre</em>");
			$("#txtNombre").addClass("error");
		}
		if( edad == "" ){
//			alert("Pon tu edad");
			$("#txtEdad").addClass("error");
		}

//		alert("Se ha enviado el formulario");
		return false;
	});
	$("#lightbox-cerrar, #lightbox").click(function(){
		cierraLightbox();
	});
	$(".lb").click(function(){
		abreLightbox("<img src='" + $(this).attr("data-grande") + "' /><br />" + $(this).attr("alt"))
	});
	 $("#single_1").fancybox({
    	openEffect	: 'elastic',
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside'
    		}
    	}
    });
});
function abreLightbox(mensaje){
	$("#lightbox-contenido").html(mensaje);
	$("#lightbox").fadeIn("slow");
	$("#lightbox-panel").show("slow");
}
function cierraLightbox(){
	$("#lightbox").fadeOut("slow");
	$("#lightbox-panel").hide();
}