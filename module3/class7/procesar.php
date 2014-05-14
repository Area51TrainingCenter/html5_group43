<?php
$nom = $_POST["nombre"];
$cor = $_POST["correo"];
$men =$_POST["mensaje"];
/*
echo $nom;
echo $cor;
echo $men;
*/
mail("jefe@cafe51.pe","Solicitud de contacto",$nom . "<br />" . $cor . "<br />" . $men);
?>
<h3>Gracias</h3>