$(document).ready(function(){
	// Apenas cargue la web, estos elementos deben esconderse
	$("header").hide();
	$("#menu li").css({
		"opacity":"0",
		"top" : "-10px"
	});
	// Cuando ya se mostro todo
	$("header").slideDown(function(){
		var espera = 250;
		$(this).find("li").each(function(){
			$(this).delay(espera).animate({
				"opacity" : "1",
				"top" : "0"
			},250);
			espera += 250;
		});
	});


	$("#menu a, #subir").click(function(e){
		var aDondeIre = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(aDondeIre).offset().top
		}, 2000);
		//, "easeOutBounce"
		controlaBotonSubir();
//		return false;
		e.preventDefault();
	});
// Agregar una funciòn a un evento
	$(window).on("scroll",controlaBotonSubir);
	$(document).on('mousewheel', controlaBotonSubir);
// Parallax 
	$(window).stellar();
// Rotador
	$("#retro").on("click", retroceder);
	$("#adelante").on("click", avanzar);
	var ttt = setInterval(avanzar,3000);
	$("ul.photos-list").mouseover(function(){
		clearInterval(ttt);
	});
	$("ul.photos-list").mouseout(function(){
		ttt = setInterval(avanzar,3000);
	});

});
function avanzar(){
	$("ul.photos-list li").first().appendTo("ul.photos-list").hide().fadeIn();
	clearInterval(ttt);
}
function retroceder(){
	$("ul.photos-list li").last().fadeOut(function(){
		$(this).prependTo("ul.photos-list");
	});
	clearInterval(ttt);
}
/*
// using on
$(document).on('mousewheel', function(event) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
});
*/
// using the event helper
/*
$(document).mousewheel(function(event) {
//    console.log(event.deltaX, event.deltaY, event.deltaFactor);
    var posY = $(window).scrollTop();
    if ( posY > 200 ){
    	$("a.btn_subir").fadeIn("slow");
    } else {
    	$("a.btn_subir").fadeOut();
    }
});
*/
function controlaBotonSubir(){
	var posY = $(window).scrollTop();
	if ( posY >= $("#carta").offset().top ){
		$("a.btn_subir").fadeIn(function(){
			$(this).addClass("girar");
		});
    } else {
    	$("a.btn_subir").fadeOut();
    }
}
// Otro Plugin
//http://cherne.net/brian/resources/jquery.hoverIntent.html