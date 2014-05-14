<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="description" content="Cafe 51, los mejores cafes solo para navegadores modernos." />
	<meta name="keywords" content="Cafeteria, Cafe, Ejemplo HTML5 y CSS3" />
	<meta name="author" content="Area 51" />
	<title><?php wp_title(); ?></title>

	<script src="<?php bloginfo("template_directory"); ?>/js/prefixfree.min.js"></script>
	<script src="<?php bloginfo("template_directory"); ?>/js/modernizr.custom.91650.js"></script>

	<link rel="stylesheet" href="<?php bloginfo("template_directory"); ?>/css/reset.css" />
	<link rel="stylesheet" href="<?php bloginfo("stylesheet_url"); ?>" media="screen" /> 
	<link rel="stylesheet" href="<?php bloginfo("template_directory"); ?>/css/impresion.css" media="print" />
	<link rel="shortcut icon" href="favicon.ico" />
	<?php wp_head(); ?>
</head>
<body>
	<header>
		<div class="contenedor">
		<a href="index.html" title="Cafe 51, Cafe HTML5 para ti">
			<hgroup>
				<h1>Cafe 51</h1>
				<h2>Cafe HTML5 para tí</h2>
			</hgroup>
		</a>
		<ul>
			<li>
				<a href="http://www.twitter.com" title="Siguenos en Twitter" id="twitter">@Cafe51</a>
			</li>
			<li>
				<a href="http://www.facebook.com" title="Encuentranos en Facebook" id="facebook">Cafe51 en Facebook</a>
			</li>
		</ul>
<?php 
wp_nav_menu(array("theme_location" => "principal", "container" => "nav"));

if ( is_home() ) {
?>
		<figure>
			<ul>
				<li><img src="<?php bloginfo("template_directory"); ?>/img/img-cafe-header.jpg" alt="Cafe del día" /></li>
			</ul>
		</figure>
<?php } ?>
		</div>
	</header>