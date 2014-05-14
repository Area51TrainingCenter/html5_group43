$(window).load(function(){
	// Toda la página ya haya cargado (marcos -videos yt-, objetos, imagenes)
	console.log("Se ejecuta evento load");
});
$(document).ready(function(){
	// DOM (HTML) ya este cargado
	console.log("Se ejecuta evento ready");
/*
	$.getJSON(
		"http://api.openweathermap.org/data/2.5/weather?q=Lima,Peru&callback=?",
	  function(data){
    		//$("#masnoticias").html(data);
    		console.log(data);
    		// "data" es el JSON cargado por jsonp
 	});
*/
	var API = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	$.getJSON(API,{
		tags: "area51",
		format: "json"
	}).done(function(respuesta){
		$.each(respuesta.items, function(i, item){
			$("<img>").attr("src",item.media.m).appendTo("#galeria");
		});
	});

// Menu
	$("nav a").click(function(c){
		var aDondeIre = $(this).attr("href");
		var hanHechoClick = $(this).attr("id");
		$("html, body").animate({
			scrollTop: $(aDondeIre).offset().top - 60
		}, 2000, function(){
			// Esto se llama callback
			$("nav a").removeClass("activo");
			$("#" + hanHechoClick).addClass("activo");
		});
		return false;
	});

	$("#cb_ciudad").change(function(event) {
		$.post('ciudades.php', 
			{ciudad: $("#cb_ciudad").val()}, 
			function(data, textStatus, xhr) {
				$("#rpta_ajax").html(data);
			});
	});

});
$(document).scroll(function(){
//	console.log("Se ejecuta evento scroll");
	//console.log("Estoy en posición " + );
	var posX = $(document).scrollTop();
	if ( posX >= 128 ){
		$("nav").addClass("pegado");
	} else {
		$("nav").removeClass("pegado");
	}
	console.log("Estoy en posición " + posX);
	if ( posX >= 290 ){
		//$("#cuerpo").append("<p>Hola mundo, texto infinito en " + posX + "</p>");
		/*
		$.ajax({
				url: "ajax.php"
			}).done(function(respuesta){
				$("#masnoticias").append(respuesta);
			});
		*/
		/*
		$.post("ajax.php", {pd: "gracias"}, function(respuesta){
			$("#masnoticias").append(respuesta);
		});
		*/
	}
});
$(window).resize(function(){
	console.log("Se ejecuta evento resize");
});
