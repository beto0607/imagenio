/**
 * @author: Albanesi Roberto
 * @email: beto0607@gmail.com
 * @propose: Guardar las clases de Sprites
 */

function Categoria(ctx,nombre,path0, path1, path2, posX, posY, width, height, center){
	this.ctx = ctx;
	this.tamanio = 0;
	this.images = [
	               new MyImage(ctx, path0, posX, posY, width, height, true, null, true),
	               new MyImage(ctx, path1, posX, posY, width, height, true, null, true),
	               //new MyImage(ctx, path2, posX, posY, width, height, true, null, true)
	               ];
	this.circle = new MyCircle(ctx, this.images[this.tamanio], BANNER_CIRCULO_COLOR,BANNER_CIRCULO_WIDTH, null, true, true);
	this.text = new MyText(ctx, nombre, posX, posY*1.4, true, "30px MyFont", null);
}

Categoria.prototype.draw = function(){
	//this.circle.setImage(this.images[this.tamanio]);
	this.circle.draw(null, this.images[0].width);
	
	this.images[this.tamanio].draw();
	this.text.draw();
}

function BannerCategorias(ctx){
	this.context = ctx;
	this.posX = BANNER_POSX; this.posY = BANNER_POSY;
	this.width = BANNER_WIDTH; this.height = BANNER_HEIGHT;
	this.categorias = [
	                   new Categoria(ctx,"Geografía", PATH_TO_CATEGORIA_GEOGRAFIA_S, PATH_TO_CATEGORIA_GEOGRAFIA_M, PATH_TO_CATEGORIA_GEOGRAFIA_L, (this.posX-(this.width*0.5)), this.posY, true),
	                   new Categoria(ctx,"Biología", PATH_TO_CATEGORIA_BIOLOGIA_S, PATH_TO_CATEGORIA_BIOLOGIA_M, PATH_TO_CATEGORIA_BIOLOGIA_L, (this.posX-(this.width*0.17)), this.posY, true),
    				   new Categoria(ctx,"Historia", PATH_TO_CATEGORIA_HISTORIA_S, PATH_TO_CATEGORIA_HISTORIA_M, PATH_TO_CATEGORIA_HISTORIA_L, (this.posX+(this.width*0.17)), this.posY, true),
    				   new Categoria(ctx,"Arte", PATH_TO_CATEGORIA_ARTE_S, PATH_TO_CATEGORIA_ARTE_M, PATH_TO_CATEGORIA_ARTE_L, (this.posX+(this.width*0.5)), this.posY, true),
	                   ];
	this.cat_actual = 0;
	this.animation_time = 8000;
	this.frame_actual = 0;
}

BannerCategorias.prototype.setCategoriasEnCero = function(){
	for (var i=0;i<this.categorias.length;i++){this.categorias[i].tamanio=0;}
}

BannerCategorias.prototype.getNextFrame = function(){
	var next_frame = 150;
	
	if(this.frame_actual<this.animation_time*0.2){next_frame = 150;}
	else if(this.frame_actual<this.animation_time*0.4){next_frame = 250;}
	else if(this.frame_actual<this.animation_time*0.6){next_frame = 350;}
	else if(this.frame_actual<this.animation_time*0.9){next_frame = 450;}
	this.frame_actual += next_frame;
	return next_frame;
}

BannerCategorias.prototype.randomAnimationTime = function(){if(this.frame_actual == 0){this.animation_time = Math.floor(Math.random()*(BANNER_ANIMATION_MAX-BANNER_ANIMATION_MIN+1)+BANNER_ANIMATION_MIN);}}

BannerCategorias.prototype.animate = function(banner, scene){
	banner.randomAnimationTime();
	if(banner.animation_time - banner.frame_actual > banner.animation_time*0.05){
		banner.setCategoriasEnCero();
		banner.cat_actual = (banner.cat_actual+1)%banner.categorias.length;
		banner.categorias[banner.cat_actual].tamanio = 1;
		var nn = banner.getNextFrame();
		setTimeout(banner.animate, nn , banner, scene);
	}else{
		banner.frame_actual=0;
		NIVEL_ACTUAL = banner.cat_actual;
		scene.buildGameScene();
		}
}

BannerCategorias.prototype.draw = function(){
	for (var i=0;i<this.categorias.length;i++){
		this.categorias[i].draw();
	}
}


function Player(){this.puntos={"biologia":0, "arte":0,"historia":0, "geografia":0};}

Player.prototype.sumarPuntos = function(categoria, puntos){
	this.puntos[categoria]+=puntos;}

Player.prototype.getPuntajes = function(){return this.puntos;}
Player.prototype.getPuntosTotal = function(){
	var sum=0;
	for(var i in this.puntos){
		sum+=this.puntos[i];
	}
	return sum;
}
function Triada(ctx, lugar, path, ok){
	this.context = ctx;
	this.lugar = lugar;
	this.ok = (ok=="si" || ok != "no");
	this.createImagen(path, this.lugar);
	this.drawCircle = true;
}

Triada.prototype.checkCollision = function(x,y){return this.imagen.checkCollision(x,y);}

Triada.prototype.getOk = function(){return this.ok;}

Triada.prototype.createImagen = function(path, lugar, drawCircle){
	this.drawCircle = drawCircle;
	if(lugar==1){
		this.imagen = new MyImage(this.context, path, TRIADA1_X, TRIADA_Y, null, null, true, true, true);
		}
	if(lugar==2){
		this.imagen = new MyImage(this.context, path, TRIADA2_X, TRIADA_Y, null, null, true, true, true);
		}
	if(lugar==3){
		this.imagen = new MyImage(this.context, path, TRIADA3_X, TRIADA_Y, null, null, true, true, true);
		}
	this.circle = new MyCircle(this.context, this.imagen, TRIADA_CIRCULO_COLOR, TRIADA_CIRCULO_WIDTH);
}

Triada.prototype.getLugar = function(){return this.lugar;}

Triada.prototype.getPath = function(){return this.imagen.getPath();}

Triada.prototype.getImage = function(){return this.imagen;}

Triada.prototype.draw = function(){this.imagen.draw();if(this.drawCircle){this.circle.draw();}} 

function MyImage(ctx, path, posX, posY, width, height, center, circle, transition){
	this.ctx = ctx;
	this.circle = circle;
	this.img = new Image(); 
	this.img.src = path;
	this.path = path;
	this.posX = posX; 
	this.posY = posY;
	this.center = center;
	this.width_max = ((width==null)? this.img.width:width);
	this.height_max =((height==null)? this.img.height:height);
	this.width = ((transition==null)? this.width_max:0);
	this.height =((transition==null)? this.height_max:0);
	this.transition_time = ((transition==null)? 2000:2000);
	if(transition){this.transition(this);}
	
}

MyImage.prototype.transition = function(mi){
	var ok1,ok2; ok1=ok2=false;
	if(mi.width <=mi.img.width){
		mi.width += mi.img.width*0.1;
		
		}else{ok1=true;}
	if(mi.height<=mi.img.height){mi.height +=mi.img.height*0.1;}else{ok2=true;}
	if(ok1 && ok2){mi.transition_time=0;}
	else{
		mi.transition_time -=20;
		
		if(mi.transition_time>0){setTimeout(mi.transition, 20, mi);}	
	}
	
	
}

MyImage.prototype.setPath = function(path){
	this.path = path;
	this.img.src = path;
}

MyImage.prototype.getPath = function(){return this.path;}

MyImage.prototype.checkCollision = function(x, y){
	return ((between(x, this.posX-(this.width/2), (this.posX+(this.width/2))))&&(between(y, this.posY-(this.height/2), (this.posY+(this.height/2)))))
}

MyImage.prototype.draw = function(){
	this.ctx.drawImage(this.img,
			((this.center)?this.posX-this.width*0.5:this.posX), 
			((this.center)?this.posY-this.height*0.5:this.posY), 
			this.width, this.height);
	
}

MyImage.prototype.getCenterX = function(){return this.posX + this.img.width*0.5;}

function MyCircle(ctx, imagen, color, width, complete, relleno){
	this.ctx = ctx;
	this.color = color;
	this.width = width;
	this.imagen = imagen;
	this.relleno = relleno;
	this.complete = (complete == null || complete == true) ;
}

MyCircle.prototype.setImage = function(img){this.imagen = img;}

MyCircle.prototype.draw = function(grados, width){
	if(this.imagen.width){
	    this.ctx.beginPath();
	    this.ctx.arc(this.imagen.posX/*-this.imagen.width*0.5*/, this.imagen.posY/*-this.imagen.height*0.5*/, 
	    		((width!=null) ? width : this.imagen.width*0.6+1 ), 
	    		((this.complete==true) ? 0 : 1.5 * Math.PI ),
	    		((this.complete==true) ? 2 * Math.PI : grados + 1.5 * Math.PI),
	    		false);
	    this.ctx.lineWidth = this.width+3;
	    if(this.relleno){
	    	this.ctx.fillStyle = this.color;
	    	this.ctx.fill();
	    }else{
	    	
	    	this.ctx.strokeStyle = this.color;
	    	this.ctx.stroke();
	    }
	}
}


function MyTimer(ctx, scene){
	this._stop = false;
	this.scene = scene;
	this.context = ctx;
	this.game_timer = 0.0;
	this.triada_actual = 0.0;
	this.triada_timers = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
	var timer = this;
	this.timer_id = setInterval(this.tick, 200, this);
}
MyTimer.prototype.setTimerCero = function(){
	this.triada_timers = null;
	this.triada_timers = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
}
MyTimer.prototype.getTimerActual = function(){return this.triada_timers[this.triada_actual];}

MyTimer.prototype.stop = function(){this._stop = true;}

MyTimer.prototype.play = function(){this._stop = false;}

MyTimer.prototype.setClock = function(bool){this._stop = bool;}

MyTimer.prototype.nextTriada = function(){
	this.triada_actual+=1;
	if(this.triada_actual>=9){
		clearInterval(this.timer_id);
	}
}

MyTimer.prototype.add = function(){
	if(this._stop == false){
		this.game_timer += 0.2;
		this.triada_timers[this.triada_actual] += 0.2;
		if(this.triada_timers[this.triada_actual]>SEGUNDOS_PARA_MUY_BIEN){
			this.stop();
			console.log("TIEMPO");
			this.scene.timeOut();
			}
	}
}

MyTimer.prototype.tick = function(){
	arguments[0].add();
}

function MyText(ctx, text, posX, posY, center, font, style){
	this.context = ctx;
	this.center = center;
	this.posX = posX;
	this.posY = posY;
	this.text = text;
	this.font = (font==null) ? this.context.font : font;
	this.style = (style==null) ? "white": style;
	

}

MyText.prototype.setText = function(text){this.text=text;}

MyText.prototype.draw = function(){
	var style_aux = this.context.fillStyle;
	this.context.fillStyle = this.style;
	var font_aux = this.context.font;
	this.context.font = this.font;
	this.context.fillText(this.text, 
			((this.center == true) ? (this.posX - this.context.measureText(this.text).width*0.5) : this.posX), 
			this.posY);
	this.context.font = font_aux;
	this.context.fillStyle = style_aux;
}

function Pista(ctx, scene, text){
	this.ctx = ctx;
	this.scene = scene;
	this.clicked = false;
	this.imagen1 = new MyImage(ctx, PATH_TO_PISTA2, PISTA_2_X, PISTA_2_Y, null, null, true, null, true);
	this.imagen2 = new MyImage(ctx, PATH_TO_PISTA, PISTA_1_X, PISTA_1_Y, null, null, true, null, true);
	this.text = new MyText(ctx, text, PISTA_1_X, PISTA_1_Y, true, null, "white");
}

Pista.prototype.getClicked = function(){return this.clicked;}

Pista.prototype.setText = function(text){this.text.setText(text);}

Pista.prototype.onEvent = function(event){
	if(this.imagen1.checkCollision(event.pageX, event.pageY)){
		this.clicked = !this.clicked;
		this.scene.setClock(this.clicked);
	}
}

Pista.prototype.draw = function(){
	this.imagen1.draw();
	if(this.clicked){
		this.imagen2.draw();
		this.text.draw();
	}
}

function BarraProgreso(ctx, scene, puntos){
	this.ctx =ctx;
	this.scene = scene;
	this.puntos = puntos;
	this.porcentaje=0;
	this.imagen = new MyImage(ctx, PATH_TO_BARRA_PROGRESO, BARRA_PROGRESO_X, BARRA_PROGRESO_Y, null, null, true, null, true);
	this.text = new MyText(ctx, this.puntos+" pts", BARRA_PROGRESO_X, BARRA_PROGRESO_Y, true,null,null);
	this.setPuntos(puntos);
}
BarraProgreso.prototype.setPuntos = function(puntos){
	this.puntos = puntos;
	this.text.setText(this.puntos+" pts");
	if(this.puntos>0){this.porcentaje = (355*(this.puntos/PUNTOS_MAXIMOS));}
	if(this.puntos>90){this.porcentaje = (355);}
}
BarraProgreso.prototype.draw = function(){
	this.drawRect();
	this.imagen.draw();
	this.text.draw();
}
BarraProgreso.prototype.drawRect = function(){
	var temp = this.ctx.fillStyle;
	this.ctx.fillStyle = "#000"; 
	this.ctx.fillRect(BARRA_PROGRESO_X-177,BARRA_PROGRESO_Y-45,355,80);
	var my_gradient=this.ctx.createLinearGradient(BARRA_PROGRESO_X-177,BARRA_PROGRESO_Y-45,BARRA_PROGRESO_X-177,BARRA_PROGRESO_Y+45);
	my_gradient.addColorStop(0,"#00b6b6");
	my_gradient.addColorStop(0.3,"#00cdcd");
	my_gradient.addColorStop(1,"#005a5a");
	this.ctx.fillStyle = my_gradient; 
	this.ctx.fillRect(BARRA_PROGRESO_X-177,BARRA_PROGRESO_Y-45,this.porcentaje,80);
	this.ctx.fillStyle = temp;
}


