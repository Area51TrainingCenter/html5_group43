<?php
/*
	for ($i=0; $i < 5; $i++) { 
		echo "<p>Hola a todos, desde el servidor local</p>";
	}
*/
	// La web me esta mandando una variable llamada "pd"
	$pedido = $_POST["pd"];
	// Yo la estoy leyendo, y se llamará $pedido
	if ( $pedido == "noticia" ){
		?><span class="noticia">
               <h3><a href="enlace.html" title="descripcion del enlace">Título de parrafo X</a></h3>
                <p>Lorem ipsum dolor sit em 1</p>
                <p>Lorem ipsum dolor sit em 2!!!</p>
                <p>Lorem ipsum dolor sit em 3</p>
            </span><?php
	} else if ( $pedido == "gracias" ){
		echo "<p>De nada</p>";
	} else {
		echo "<p>Decidete</p>";
	}
?>