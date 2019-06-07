
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>IMAGENIO</title>

<!-- JS -->

<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>

<!-- BOOTSTRAP -->

<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<script type="text/javascript" src="js/respond.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>

<!-- CSS -->

<link rel="shortcut icon" href="img/favicon.ico" />
<link rel="stylesheet" type="text/css" href="css/normalize.css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/font.face.css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/estilos.css" media="screen" />

<!-- BOTON DERECHO -->

<script type="text/javascript" src="js/boton.derecho.js"></script>

<!-- SCRIPTS -->

<script type="text/javascript" src="js/scripts.js"></script>

</head>

<body>

    <div id="contenedor"> <!-- Comienza CONTENEDOR -->
		
        <div id="intro">
        	<div id="logo">
                <a href="#">
                    <img src="img/logo.png" width="474" height="361" alt="" title="">
                </a>
            </div>
            <div id="btn-jugar">
            	<a href="#">
                	<img src="img/jugar.png" width="208" height="88" alt="" title="">
                </a>
            </div>
        </div>
        
        <div id="juego">
        	
            <div id="imagenes">
                <span>
                    <a href="#">
                        <img src="img/imagenes/1.jpg" width="162" height="162" alt="" title="" class="img-circle">
                    </a>
                </span>
                <span>
                    <a href="#">
                        <img src="img/imagenes/2.jpg" width="162" height="162" alt="" title="" class="img-circle">
                    </a>
                </span>
                <span>
                    <a href="#">
                        <img src="img/imagenes/3.jpg" width="162" height="162" alt="" title="" class="img-circle">
                    </a>
                </span>
            </div>
            
            <div id="power_ups" class="pull-left">
            	<span>
                	<a href="#">
                    	
                    </a>
                </span>
                <span>
                	<a href="#">
                    	
                    </a>
                </span>
                <span>
                	<a href="#">
                    	
                    </a>
                </span>
            </div>
            
            <div id="imagen_principal" class="pull-left">
            	<img src="img/imagenes/0.jpg" width="162" height="162" alt="" title="" class="img-circle">
            </div>
            
            <div id="reloj_puntaje" class="pull-right">
            	<div id="reloj">
                	<span id="aguja_reloj">
                    	<img src="img/aguja_reloj.png" width="4" height="47" alt="" title="">
                    </span>
                </div>
            	<span id="puntaje">
                	<p>
                		0
                    </p>
                </span>
            </div>
            
        </div>
        
        <div id="mensaje">
            <span>
                <img src="">
            </span>
        </div>
        
        <div id="final">
        	<span></span>
        	<div id="perdiste">
            	<img src="img/perdiste.png" width="393" height="356" alt="" title="">
            </div>
            <div id="reintentar">
            	<a href="#">
            		<img src="img/reintentar.png" width="231" height="102" alt="" title="">
                </a>
            </div>
        </div>
        
        <div id="final2">
        	<span></span>
        	<div id="ganaste">
            	<img src="img/ganaste.png" width="393" height="356" alt="" title="">
            </div>
            <div id="continuar">
            	<a href="#">
            		<img src="img/continuar.png" width="231" height="102" alt="" title="">
                </a>
            </div>
        </div>
    	
    </div> <!-- Termina CONTENEDOR --> 
    
</body>
</html>