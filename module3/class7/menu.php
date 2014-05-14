		<nav>
			<ul>
				<li>
					<a href="index.php" title="Portada del bar-restaurante Cafe 51"<?php
					if( $seccion == 1 ){
					?> class="activo"<?php
					}
					?>>Inicio</a>
				</li>
				<li>
					<a href="carta.php" title="Carta del bar-restaurante"<?php
					if( $seccion == 2 ){
					?> class="activo"<?php
					}
					?>>Carta</a>
				</li>
				<li>
					<a href="carta.php" title="Carta del bar-restaurante"<?php
					if( $seccion == 4 ){
					?> class="activo"<?php
					}
					?>>Locales</a>
				</li>
				<li>
					<a href="contacto.php" title="Reservas en Cafe 51"<?php
					if( $seccion == 3 ){
					?> class="activo"<?php
					}
					?>>Contacto</a>
				</li>
			</ul>
		</nav>