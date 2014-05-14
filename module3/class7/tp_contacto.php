<?php
/*
Template Name: Contacto
*/
get_header();
?>
	<section id="contacto" class="contenedor">
		<h3>Contacto</h3>
		<div class="izquierda">
			<div id="mapa">
				<!--
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d243.8059561445121!2d-77.03354182925531!3d-12.11931585537663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2s!4v1396402949429" width="300" height="200" frameborder="0" style="border:0"></iframe> -->	
				<!-- Gracias a @HPNeo - http://hpneo.github.io/gmaps/ -->			
			</div>
			<div id="datos">
				<div id="hcard-Diego-V-Lerma" class="vcard">
 <a class="url fn n" href="http://www.cafe51.pe">  <span class="given-name">Diego</span>
  <span class="additional-name">V</span>
  <span class="family-name">Lerma</span>
</a>
 <div class="org">Cafe 51</div>
 <a class="email" href="mailto:info@cafe51.pe">info@cafe51.pe</a>
 <div class="adr">
  <div class="street-address">Av. Arequipa 1234</div>
  <span class="locality">Miraflores</span>
, <span class="region">Lima</span>
, <span class="postal-code">L188</span>
  <span class="country-name">Perú</span>
 </div>
 <div class="tel">4471234</div>
<div><span class="category">Comida</span>, <span class="category">Restaurantes</span>, <span class="category">Cafeteria</span></div>
</div>
			</div>
		</div>
		<div class="derecha">
			<?php 
			while ( have_posts() ) : the_post();
			the_content();
			endwhile;
			 ?>
		</div>
	</section>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
	<script type="text/javascript" src="js/gmaps.js"></script>
	<script type="text/javascript">
	var map;
	$(document).ready(function(){
		map = new GMaps({
			div: '#mapa',
			lat: -12.1183558,
			lng: -77.0336327
		});
		map.addMarker({
			lat: -12.1183558,
			lng: -77.0336327,
			title: 'Area 51',
			infoWindow: {
				content: '<p>Cafe <strong>51</strong></p>'
			}
		});
	});
	</script>
<?php get_footer(); ?>