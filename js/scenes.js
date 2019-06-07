/**
 * @author: Albanesi Roberto
 * @email: beto0607@gmail.com
 * @propose: Guardar las clases de Escenas y el Gestor
 */


function SceneSplashScreen(ctx, manager){
	this.context = ctx;
	this.manager = manager;
	this.background = new MyImage(ctx, PATH_TO_BACKGROUND, 0, 0, WIDTH, HEIGHT, false, null, null);
	this.logo = new MyImage(ctx, PATH_TO_LOGO, LOGO_X, LOGO_Y, null, null, true, null, true);
	this.logo_boemiz = new MyImage(ctx, PATH_TO_LOGO_BOEMIZ, LOGO_BOEMIZ_X, LOGO_BOEMIZ_Y, null, null, true, null,true);
	this.logo_kapelusz = new MyImage(ctx, PATH_TO_LOGO_KAPELUSZ, LOGO_KAPELUSZ_X, LOGO_KAPELUSZ_Y, null, null,true, null,true);
}

SceneSplashScreen.prototype.paint = function(){
	this.background.draw();
	this.logo.draw();
	this.logo_boemiz.draw();
	this.logo_kapelusz.draw();}

SceneSplashScreen.prototype.onEvent = function(manger, event){if(event.which == 1){this.manager.buildMenuScene();}}

function ScenePerdiste(ctx, manager){
	this.context = ctx;
	this.manager = manager;
	this.background = new MyImage(ctx, PATH_TO_BACKGROUND,0,0,WIDTH,HEIGHT, false, null, null);
	this.perdiste = new MyImage(ctx, PATH_TO_PERDISTE, PERDISTE_X, PERDISTE_Y, null, null, true, true, true);
	this.btnVolver= new MyImage(ctx, PATH_TO_BTN_REINTENTAR, BTN_REINTENTAR_X, BTN_REINTENTAR_Y, null, null, true, true, true);
}
ScenePerdiste.prototype.paint = function(){
	this.background.draw();//Background
	this.perdiste.draw();
	this.btnVolver.draw();
}
ScenePerdiste.prototype.onEvent = function(manager, event){if(this.btnVolver.checkCollision(event.pageX, event.pageY)){this.manager.buildMenuScene();}}

function SceneGanaste(ctx, manager){
	this.context = ctx;
	this.manager = manager;
	this.background = new MyImage(ctx, PATH_TO_BACKGROUND,0,0,WIDTH,HEIGHT, false, null, null);
	this.ganaste = new MyImage(ctx, PATH_TO_GANASTE, GANASTE_X, GANASTE_Y, null, null, true, null, true);
	this.btnVolver= new MyImage(ctx, PATH_TO_BTN_REINTENTAR, BTN_REINTENTAR_X, BTN_REINTENTAR_Y, null, null, true, null, true);
}
SceneGanaste.prototype.paint = function(){
	this.background.draw();//Background
	this.ganaste.draw();
	this.btnVolver.draw();
}
SceneGanaste.prototype.onEvent = function(manager, event){if(this.btnVolver.checkCollision(event.pageX, event.pageY)){manager.buildMenuScene();}}

function SceneMenu(ctx, manager){
	this.context = ctx;
	this.manager = manager;
	this.background = new MyImage(ctx, PATH_TO_BACKGROUND,0,0,WIDTH,HEIGHT, false, null, null);
	this.play_circle = new MyImage(ctx, PATH_TO_CIRCULO_CENTRAL, JUGAR_X, JUGAR_Y, null, null, true, null, true);
	this.play_text = new MyText(ctx, "JUGAR", JUGAR_X, JUGAR_Y, true, null, null);
	this.progreso = new BarraProgreso(ctx, this, player.getPuntosTotal());
	this.banner = new BannerCategorias(ctx);
	this.onAnimation = false;
	this.logo_k = new MyImage(ctx, PATH_TO_LOGO_KAPELUSZ, MENU_LOGO_X, MENU_LOGO_K_Y, null, null, true, null, true);
	this.logo_b = new MyImage(ctx, PATH_TO_LOGO_BOEMIZ, MENU_LOGO_X, MENU_LOGO_B_Y, null, null, true, null, true);
}

SceneMenu.prototype.paint = function(){
	this.background.draw();//Background
	this.play_circle.draw();this.play_text.draw();//this.context.fillText('JUGAR', JUGAR_X - ctx.measureText("JUGAR").width*0.5, JUGAR_Y);
	this.progreso.draw();
	this.banner.draw();
	this.logo_b.draw();this.logo_k.draw();
}
SceneMenu.prototype.onEvent = function(manager, event){
	if(this.play_circle.checkCollision(event.pageX, event.pageY)&& ! this.onAnimation){
		this.onAnimation = true;
		this.banner.animate(this.banner, this);
	}
}

SceneMenu.prototype.buildGameScene = function(cat){manager.buildGameScene(cat);}


function SceneGame(ctx, manager, index){
	this.puntos=0;
	this.context= ctx;
	this.manager = manager;
	this.message = null;
	this.background = new MyImage(ctx, PATH_TO_BACKGROUND,0,0,WIDTH,HEIGHT, false,null,null);
	this.pista_imagen = new MyImage(ctx, PATH_TO_PISTA, PISTA_1_X, PISTA_1_Y, null, null, true, null, true);
	this.pista_text = new MyText(ctx, PATH_TO_PISTA, PISTA_1_X, PISTA_1_Y, true, null, null);
	this.pista2 = new Pista(ctx, this, "null");
	this.timer = new MyTimer(ctx, this);
	this.makeLevel(getCatNombre(NIVEL_ACTUAL), getRandomLevel());// (Math.floor(Math.random() * 3) + 1).toString());
	
	this.cerebro_circulo1 = new MyCircle(ctx, this.triadaCerebro, TRIADA_CIRCULO_COLOR, TRIADA_CIRCULO_WIDTH);
	this.cerebro_circulo2 = new MyCircle(ctx, this.triadaCerebro, TRIADA_CIRCULO_COLOR2, TRIADA_CIRCULO_WIDTH2);
	this.cerebro_circulo3 = new MyCircle(ctx, this.triadaCerebro, TRIADA_CIRCULO_COLOR3, TRIADA_CIRCULO_WIDTH2, false);
}

SceneGame.prototype.setClock = function(bool){this.timer.setClock(bool);}

SceneGame.prototype.timeOut = function(){this.timer.setTimerCero();this.manager.buildPerdisteScene();}

SceneGame.prototype.makeLevel = function(category, level){
	this.category_name = category;
	this.level_number = level;
	this.level = levels[category][level];
	this.path_actual = this.level["path"];
	this.triada_actual_number = 1;
	this.triada_actual = this.level["triada-"+this.triada_actual_number];
	this.triadaCerebro = new MyImage(ctx, this.path_actual+this.level.cerebro.path, CEREBRO_X, CEREBRO_Y, null, null, true, null, true);
	
	var lugares = [1,2,3];
	lugares = shuffle(lugares);
	
	
	this.triada1 = new Triada(ctx, lugares[0], this.path_actual+this.triada_actual.foto1.path, this.triada_actual.foto1.ok);
	this.triada2 = new Triada(ctx, lugares[1], this.path_actual+this.triada_actual.foto2.path, this.triada_actual.foto2.ok);
	this.triada3 = new Triada(ctx, lugares[2], this.path_actual+this.triada_actual.foto3.path, this.triada_actual.foto3.ok);
	
	this.pista_text.setText(this.triada_actual["pistas"][0]);
	this.pista2.setText(this.triada_actual["pistas"][1]);
}

SceneGame.prototype.makeTriada = function(){
	var lugares = [1,2,3];
	lugares = shuffle(lugares);
	
	this.triada_actual_number += 1;
	this.triada_actual = this.level["triada-"+this.triada_actual_number];
	this.triada1 = new Triada(ctx, lugares[0], this.path_actual+this.triada_actual.foto1.path, this.triada_actual.foto1.ok);
	this.triada2 = new Triada(ctx, lugares[1], this.path_actual+this.triada_actual.foto2.path, this.triada_actual.foto2.ok);
	this.triada3 = new Triada(ctx, lugares[2], this.path_actual+this.triada_actual.foto3.path, this.triada_actual.foto3.ok);
	this.pista_text.setText(this.triada_actual["pistas"][0]);
	this.pista2.setText(this.triada_actual["pistas"][1]);
}

SceneGame.prototype.click = function(){
	
}

SceneGame.prototype.paint = function(){
	this.background.draw();//Background
	this.triadaCerebro.draw();//Cerebro (la posicion menos la mitad del ancho/alto)
	this.cerebro_circulo1.draw();
	this.cerebro_circulo2.draw();
	this.cerebro_circulo3.draw((this.timer.getTimerActual() /30)* 2 * Math.PI);
	
	this.pista_imagen.draw();//Power up 1 y 2
	this.pista_text.draw();

	
	
	if(!this.pista2.getClicked()){
		//Triadas
		this.triada1.draw();
		this.triada2.draw();
		this.triada3.draw();
		
		if(this.message!=null){this.message.draw();}
	}
	this.pista2.draw();//Pista 2
}

SceneGame.prototype.checkWin = function(){return this.triada_actual_number==9;}

SceneGame.prototype.mostrarMensaje = function(triada){
	this.timer.stop();
	this.triada_lugar_auxiliar = triada.getLugar();
	this.imagen_auxiliar = triada.getImage();
	triada.createImagen(PATH_TO_CIRCULO_CENTRAL_COMPLETO, triada.getLugar(), false);
	if(this.timer.getTimerActual() < SEGUNDOS_PARA_GENIAL){
		this.puntos += PUNTOS_PARA_GENIAL;
		this.message = new MyImage(this.context, PATH_TO_MENSAJE_GENIAL, triada.imagen.posX, triada.imagen.posY, null, null, true, null, true);
	}else if(this.timer.getTimerActual() < SEGUNDOS_PARA_FANTASTICO){
		this.puntos += PUNTOS_PARA_FANTASTICO;
		this.message = new MyImage(this.context, PATH_TO_MENSAJE_FANTASTICO, triada.imagen.posX, triada.imagen.posY, null, null, true, null, true);
	}else if(this.timer.getTimerActual() < SEGUNDOS_PARA_MUY_BIEN){
		this.puntos += PUNTOS_PARA_MUY_BIEN;
		this.message = new MyImage(this.context, PATH_TO_MENSAJE_MUY_BIEN, triada.imagen.posX, triada.imagen.posY, null, null, true, null, true);
	}else{this.manager.buildPerdisteScene();}
	setTimeout(function(){arguments[0].cerrarMensaje();}, 1000, this);
}

SceneGame.prototype.cerrarMensaje = function(){
	switch (this.triada_lugar_auxiliar) {
	case "1":
		this.triada1.imagen = this.imagen_auxiliar;
		this.triada1.drawCircle = true;
		break;
	case "2":
		this.triada2.imagen = this.imagen_auxiliar;
		this.triada2.drawCircle = true;
		break;
	case "3":
		this.triada3.imagen = this.imagen_auxiliar;
		this.triada3.drawCircle = true;
		break;
	}
	this.message = null;
	this.timer.play();
	this.triadaCerebro.setPath(this.imagen_auxiliar.getPath());
	this.makeTriada();
	
}

SceneGame.prototype.onEvent = function(manager, event){
	this.pista2.onEvent(event);
	
	if(event.which == 1){
		if(this.triada1.checkCollision(event.pageX, event.pageY)){
			if(this.triada1.getOk() == true){
				if(this.checkWin()){
					player.sumarPuntos(this.category_name, this.puntos);
					this.manager.buildGanasteScene();
				}else{
					//this.triadaCerebro.setPath(this.triada1.getImage().getPath());
					//this.makeTriada();
				}
				this.timer.nextTriada();
				this.mostrarMensaje(this.triada1);
			}else{
				this.manager.buildPerdisteScene();
			}
			
		}
		if(this.triada2.checkCollision(event.pageX, event.pageY)){
			if(this.triada2.getOk() == true){
				
				if(this.checkWin()){
					player.sumarPuntos(this.category_name, this.puntos);
					this.manager.buildGanasteScene();
				}else{
					//this.triadaCerebro.setPath(this.triada2.getImage().getPath());
					//this.makeTriada();
				}
				this.timer.nextTriada();
				this.mostrarMensaje(this.triada2);
			}else{
				this.manager.buildPerdisteScene();
			}
			
		}
		if(this.triada3.checkCollision(event.pageX, event.pageY)){
			if(this.triada3.getOk() == true){
				
				if(this.checkWin()){
					player.sumarPuntos(this.category_name, this.puntos);
					this.manager.buildGanasteScene();
				}else{
					//this.triadaCerebro.setPath(this.triada3.getImage().getPath());
					//this.makeTriada();
				}
				this.timer.nextTriada();
				this.mostrarMensaje(this.triada3);
			}else{
				this.manager.buildPerdisteScene();
			}
			
		}
		
	}
	
}


function Manager(ctx){
	this.context = ctx;
	this.scene_actual = null;
	this.actual = null;
	this.context.font = "40px MyFont";
	this.context.fillStyle = "white";
}

Manager.prototype.buildSplashScreenScene = function(){
	this.actual = "splash";
	fade_out(this);
}

Manager.prototype.buildMenuScene = function(){
	this.actual = "menu";
	fade_out(this);
}

Manager.prototype.buildGanasteScene = function(){
	this.actual= "ganaste";
	fade_out(this);
}

Manager.prototype.buildPerdisteScene = function(){
	this.actual= "perdiste";
	fade_out(this);
}

Manager.prototype.buildGameScene= function(cat){
	this.actual = "game";
	fade_out(this);
}

Manager.prototype.buildSplashScreenSceneFadeout = function(){
	this.scene_actual = new SceneSplashScreen(this.context, this);
	fade_in();
}

Manager.prototype.buildMenuSceneFadeout = function(){
	this.scene_actual = new SceneMenu(this.context, this);
	fade_in();
}

Manager.prototype.buildGameSceneFadeout = function(){
	this.scene_actual = new SceneGame(this.context, this);
	fade_in();
}

Manager.prototype.buildGanasteSceneFadeout = function(){
	this.scene_actual = new SceneGanaste(this.context, this);
	fade_in();
}

Manager.prototype.buildPerdisteSceneFadeout = function(){
	this.scene_actual = new ScenePerdiste(this.context, this);
	fade_in();
}

Manager.prototype.paint = function(){if(this.scene_actual!=null){this.scene_actual.paint();}}

Manager.prototype.click = function(event){this.scene_actual.onEvent(this, event);}

Manager.prototype.mousemove = function(event){/*this.scene_actual.onEvent(this, event);*/}

function fade_in(){
	canvas = document.getElementById("canvas-imagenio");
	ctx = canvas.getContext("2d");
	if(ctx.globalAlpha < 0.9){
		ctx.globalAlpha += 0.1;
		setTimeout(fade_in,50);
	}else{
		ctx.globalAlpha = 1;
	}
}

function fade_out(){
	canvas = document.getElementById("canvas-imagenio");ctx = canvas.getContext("2d");
	if(ctx.globalAlpha >= 0.1){
		ctx.globalAlpha -= 0.1;
		setTimeout(fade_out,50, arguments[0]);
	}else{
		ctx.globalAlpha = 0;
		switch (arguments[0].actual) {
		case "splash":
			arguments[0].buildSplashScreenSceneFadeout();
			break;
		case "game":
			arguments[0].buildGameSceneFadeout();
			break;
		case "ganaste":
			arguments[0].buildGanasteSceneFadeout();
			break;
		case "perdiste":
			arguments[0].buildPerdisteSceneFadeout();
			break;
		default:
			arguments[0].buildMenuSceneFadeout();
			break;
		}
		
	}
}

function collisionMouse(event, obj){
	return ((between(event.pageX, obj.x, (obj.x+obj.width)))&&(between(event.pageY, obj.y, (obj.y+obj.height))))
}

function between(a,b,c){return (a>=b && a<=c);}

function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex ;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

function getCatNombre(index){
	switch (index) {
	case 0: return "geografia";	break;
	case 1: return "biologia";	break;
	case 2: return "historia";	break;
	case 3: return "arte";	break;
	default: break;
	}
}

function getRandomLevel(){
	var arr = ["1","2","3"];
	var rand = Math.random();
	rand *= arr.length; //(5)
	rand = Math.floor(rand);
	return arr[rand];
}
