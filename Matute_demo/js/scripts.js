
	$(document).ready(function(){
		
		var contador = 1;
		
		//Imagen relacionada
		var imagen_relacionada = Math.floor((Math.random() * 3) + 1);
		
		//Intro
        $("#logo a, #btn-jugar").click(function(e){
			e.preventDefault();
			$("#intro").fadeOut(500, function(){
				$("#juego").fadeIn(500, function(){
					
					var indice_imagen = imagen_relacionada - 1;
					$('#imagenes span:eq(' + (indice_imagen) +')').find('img').attr("src", "img/imagenes/" + contador + ".jpg");
					
					var i = 1;
					$('#imagenes span img').each(function(index, value){
						if(indice_imagen !== index){
							$(this).attr("src", "img/imagenes/" + (contador + i) + ".jpg");
							$(this).animate({width: 162, height: 162, margin : "-81px 0 0 -81px"}, 500);
							i++;
						} else {
							$(this).animate({width: 162, height: 162, margin : "-81px 0 0 -81px"}, 500);
						}
					});
					
					//Imagen Principal
					$("#imagen_principal img").animate({width: 0, height: 0, margin: "0"}, 500, function(){
						$(this).attr("src", "img/imagenes/0.jpg");
						$("#imagen_principal img").animate({width: 162, height: 162, margin: "-158px 0 0 -70px"}, 500);
					});
					
					//Cronometro
					comenzar();
					comenzar_segundero();
					comenzar_rotador();
					
				});
			});			
		}); 
		
		//Puntaje
		var puntaje = 0;
		$("#puntaje p").text(puntaje);
		
		//Cronometro
		
		var segundero;
		var segundo = 0;
		var grados = 0;
		var rotador;
		var cronometro;
		var tiempo = 10000;

		function comenzar(){
			cronometro = window.setTimeout(final, tiempo);
		}
		
		function comenzar_segundero(){
			segundero = window.setTimeout(aumentar_segundo, 1000);
		}
		
		function comenzar_rotador(){
			rotador = window.setTimeout(rotar, 18.27777777777777777);
		}
		
		function rotar(){
			$("#aguja_reloj").css({"transform": "rotate(" + grados + "deg)"});	
			grados++;
			comenzar_rotador();
		}
		
		function aumentar_segundo(){
			segundo++;
			comenzar_segundero();
		}
		
		function reiniciar(){	
			window.clearTimeout(segundero);
			window.clearTimeout(rotador);
			window.clearTimeout(cronometro);
		}
	
		//Imagen Principal
		$("#imagenes a").click(function(e){
			
			e.preventDefault();
			
			if(contador < 31){

				if((($(this).parent().index() + 1) - imagen_relacionada) % 3 === 0){
											
					//Imagenes
					contador += 3;	
											
					if(contador < 31){
																		
						//Imagen relacionada
						imagen_relacionada = Math.floor((Math.random() * 3) + 1);
						
						$("#imagenes span img").animate({width: 0, height: 0, margin: 0}, 500, function(){
							
							var indice_imagen = imagen_relacionada - 1;
							$('#imagenes span:eq(' + (indice_imagen) +')').find('img').attr("src", "img/imagenes/" + contador + ".jpg");
							
							var i = 1;
							$('#imagenes span img').each(function(index, value){
								if(indice_imagen !== index){
									$(this).attr("src", "img/imagenes/" + (contador + i) + ".jpg");
									$(this).animate({width: 162, height: 162, margin : "-81px 0 0 -81px"}, 500);
									i++;
								} else {
									$(this).animate({width: 162, height: 162, margin : "-81px 0 0 -81px"}, 500);
								}
							});
							
						});
						
						//Imagen Principal
						var num_img_seleccionada = parseInt($(this).find("img").attr("src").replace("img/imagenes/", ""));
						$("#imagen_principal img").animate({width: 0, height: 0, margin: "0"}, 500, function(){
							$(this).attr("src", "img/imagenes/" + num_img_seleccionada + ".jpg");
							$("#imagen_principal img").animate({width: 162, height: 162, margin: "-158px 0 0 -70px"}, 500);
						});
						
						//Mensaje
						if(segundo < 3){
							$("#mensaje").fadeIn(300);
							var nro_img = Math.floor((Math.random() * 3) + 1);
							$("#mensaje span img").attr("src", "img/mensajes/" + nro_img + ".png");
							$("#mensaje").fadeOut(300);
						}
						
						//Puntaje
						puntaje = puntaje + 100;
						$("#puntaje p").text(puntaje);
						
						//Cronometro
						segundo = 0;
						grados = 0;
						$("#aguja_reloj").css({"transform": "rotate(0deg)"});
						reiniciar();
						comenzar();
						comenzar_segundero();
						comenzar_rotador();

					} else {
						
						//Ganaste
						final2();
						
					}
						
				} else {
					
					//Perdiste
					final();
					
				}
			
			}
			
		}); 
		
		//Perdiste
		
		function final(){
			
			//Cronometro
			reiniciar();
			
			//Imagenes
			$("#imagenes span").fadeOut(500);
			$("#imagenes span img").animate({width: 0, height: 0, margin: 0}, 500);
			
			//Imagen Principal
			$("#imagen_principal img").animate({width: 0, height: 0, margin: "0"}, 500);
			
			$("#final").fadeIn(500);	
			
			//Reintentar
			var btn_reintentar = window.setTimeout(btn_reintentar, 1500);
			function btn_reintentar(){
				$("#perdiste").animate({"margin-top" : -115}, 500, function(){
					$("#final span").fadeIn(500);	
					$("#reintentar").fadeIn(500);	
				});
			}
				
		}
		
		$("#reintentar a").click(function(e){
			e.preventDefault();
			$("#final").fadeOut(500, function(){
				
				//Final
				$("#perdiste").css({"margin-top" : -66.5}, 500);	
				$("#final span").fadeOut(500);	
				$("#reintentar").fadeOut(500);	
			
				//Imagen relacionada
				imagen_relacionada = Math.floor((Math.random() * 3) + 1);
				
				//Imagenes
				
				contador = 1;
				$('#imagenes span').fadeIn(500);
				
				var indice_imagen = imagen_relacionada - 1;
				$('#imagenes span:eq(' + (indice_imagen) +')').find('img').attr("src", "img/imagenes/" + contador + ".jpg");
				
				var i = 1;
				$('#imagenes span img').each(function(index, value){
					if(indice_imagen !== index){
						$(this).attr("src", "img/imagenes/" + (contador + i) + ".jpg");
						$(this).animate({width: 162, height: 162, margin : "-81px 0 0 -81px"}, 500);
						i++;
					} else {
						$(this).animate({width: 162, height: 162, margin : "-81px 0 0 -81px"}, 500);
					}
				});
				
				//Imagen Principal
				$("#imagen_principal img").animate({width: 0, height: 0, margin: "0"}, 500, function(){
					$(this).attr("src", "img/imagenes/0.jpg");
					$("#imagen_principal img").animate({width: 162, height: 162, margin: "-158px 0 0 -70px"}, 500);
				});
				
				//Puntaje
				puntaje = 0;
				$("#puntaje p").text(puntaje);
				
				//Cronometro
				segundo = 0;
				grados = 0;
				$("#aguja_reloj").css({"transform": "rotate(0deg)"});
				comenzar();
				comenzar_segundero();
				comenzar_rotador();

			});		
		});
		
		//Ganaste
		
		function final2(){
			
			//Puntaje
			puntaje = puntaje + 100;
			$("#puntaje p").text(puntaje);
			
			//Mensaje
			if(segundo < 3){
				$("#mensaje").fadeIn(300);
				var nro_img = Math.floor((Math.random() * 3) + 1);
				$("#mensaje span img").attr("src", "img/mensajes/" + nro_img + ".png");
				$("#mensaje").fadeOut(300, function(){
					
					//Cronometro
					reiniciar();
					
					//Imagenes
					$("#imagenes span").fadeOut(500);
					$("#imagenes span img").animate({width: 0, height: 0, margin: 0}, 500);
					
					//Imagen Principal
					$("#imagen_principal img").animate({width: 0, height: 0, margin: "0"}, 500);
					
					$("#final2").fadeIn(500);	
					
				});
			}
			
		}
		
		$("#continuar a").click(function(e){
			e.preventDefault();
			$("#final2").fadeOut(500, function(){
				
				//Imagen relacionada
				imagen_relacionada = Math.floor((Math.random() * 3) + 1);
				
				//Imagenes
				contador = 1;
				$('#imagenes span').fadeIn(500);
				
				var indice_imagen = imagen_relacionada - 1;
				$('#imagenes span:eq(' + (indice_imagen) +')').find('img').attr("src", "img/imagenes/" + contador + ".jpg");
				
				var i = 1;
				$('#imagenes span img').each(function(index, value){
					if(indice_imagen !== index){
						$(this).attr("src", "img/imagenes/" + (contador + i) + ".jpg");
						$(this).animate({width: 162, height: 162, margin : "-81px 0 0 -81px"}, 500);
						i++;
					} else {
						$(this).animate({width: 162, height: 162, margin : "-81px 0 0 -81px"}, 500);
					}
				});
				
				//Imagen Principal
				$("#imagen_principal img").animate({width: 0, height: 0, margin: "0"}, 500, function(){
					$(this).attr("src", "img/imagenes/0.jpg");
					$("#imagen_principal img").animate({width: 162, height: 162, margin: "-158px 0 0 -70px"}, 500);
				});

				//Puntaje
				puntaje = 0;
				$("#puntaje p").text(puntaje);
				
				//Cronometro
				segundo = 0;
				grados = 0;
				$("#aguja_reloj").css({"transform": "rotate(0deg)"});
				comenzar();
				comenzar_segundero();
				comenzar_rotador();

			});		
		});
				
    });