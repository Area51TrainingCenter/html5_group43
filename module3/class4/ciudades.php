<?php
$ciudad = $_POST["ciudad"];
/*
Según (variable)
	Si vale 1
		hacer X
		terminar
	Si vale 2
		hacer Y
		terminar
	cualquier otro valor:
		hacer Z
*/

		// IDEAL: Hacerlo con BD
switch ($ciudad) {
 	case '1': 
 	// Lima
 		echo "<select name='distrito' id='cb_distrito'>
<option value='Mir'>Miraflores</option>
<option value='SJL'>San Juan de Lurigancho</option>
<option value='SI'>San Isidro</option>
<option value='SMP'>San Martín de Porres</option>
</select>";
 		break;
 	case '2':
 		echo "<select name='distrito' id='cb_distrito'>
<option value='LPe'>La Perla</option>
<option value='CL'>Carmen de la Legua</option>
<option value='LPu'>La Punta</option>
</select>";
 		break;
 	default:
 		echo "<select name='distrito' id='cb_distrito'>
<option value='D1'>Distrito 1</option>
<option value='D2'>Distrito 2</option>
</select>";
 		break;
 }
?>