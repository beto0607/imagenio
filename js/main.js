/**
 * author: Albanesi Roberto
 * email: beto0607@gmail.com
 */
//Sistema
window.requestAnimationFrame=(function(){return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback){window.setTimeout(callback,17);};})();
document.addEventListener('mousedown',function(evt){manager.click(evt);},false);
document.addEventListener('mousemove',function(evt){manager.mousemove(evt);},false);
$(document).ready(function (){main();});
var canvas=null,ctx=null;
var manager = null;
var player = new Player(); 
//-------------------------------------------------------------------------------------------------


//Accion
function act(){}
//-------------------------------------------------------------------------------------------------
//Dibujar
function paint(ctx){
	manager.paint();
}
//-------------------------------------------------------------------------------------------------
//Accion por cuadro
function run(){setTimeout(run,50);act();}
//-------------------------------------------------------------------------------------------------
//Redibujar por cuadro
function repaint(){requestAnimationFrame(repaint);paint(ctx);}
//-------------------------------------------------------------------------------------------------
//Otras
function main(){
	canvas = document.getElementById("canvas-imagenio");
	canvas.height = HEIGHT;
	canvas.width = WIDTH;
	ctx = canvas.getContext("2d");
	manager = new Manager(ctx);
	manager.buildSplashScreenScene();
	run();
    repaint();
}
function random(max){return Math.floor(Math.random()*max);}
//-------------------------------------------------------------------------------------------------