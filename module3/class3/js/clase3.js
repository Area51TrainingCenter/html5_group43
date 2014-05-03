/*
http://webdeprueba.info/cibertec/html5/
*/
$(document).ready(function(){
//	alert("¿Será cierto que ya cargo la web?");
	//alert( $("h1").text() );
	//alert( $("#cabecera").text() );
	//var nestor = $(".noticia").html()
	//alert( nestor );
	//alert( $("#cuerpo .noticia .aqui").text() );
	//var losP = $("p");
	//alert("Hay " + losP.length + " elementos P");
	/*
	$("h1").click(function(){
		alert("Han hecho click en H1");
	});
	$("h2").bind("click",function(){
		alert("Han hecho click en H2");
	});
	*/
	$("p").each(function(){
//		alert(this.innerHTML);
//		exit;
//		$(this).text("Hola Jean Pearre");
	});
	$("#pie").prepend("<strong>Hola Katty</strong>");
	$("#pie").append("<em>Hola Pavel</em>");
	$("h1").click(function(){
		//$("#pie").slideUp(5000);
		//$("#pie").fadeOut("slow");
		//$("#pie").hide("slow");
	});
	$("h2").click(function(){
		//$("#pie").slideDown(5000);
		//$("#pie").fadeIn("slow");
		//$("#pie").show("slow");
	});
	$(".aqui").click(function(){
		//$("#pie").load("demo.html");
		$("#pie").slideToggle("slow");
		//$("#pie").fadeToggle("slow");
		//$("#pie").toggle("slow");
		/*
		$("#pie").animate({ 
							opacity: 0.25, 
							fontSize: "2em"
						}, 5000, function() {
							alert("Animación realizada");
						});
		*/
	});
});