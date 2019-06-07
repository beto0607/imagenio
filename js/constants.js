/**
 * author: Albanesi Roberto
 * email: beto0607@gmail.com
 * propose: Guardar contantes
 */

var NIVEL_ACTUAL;

var WIDTH=$(window).width();//1360;
var HEIGHT=$(window).height();//768;

var JUGAR_X = WIDTH*0.50, JUGAR_Y = HEIGHT*0.75;

var CEREBRO_X = WIDTH*0.50;
var CEREBRO_Y = HEIGHT*0.25;

var PISTA_1_X = WIDTH*0.50;
var PISTA_1_Y = HEIGHT*0.50;

var PISTA_2_X = WIDTH*0.65;
var PISTA_2_Y = HEIGHT*0.25;

var BARRA_PROGRESO_X = WIDTH*0.25;
var BARRA_PROGRESO_Y = HEIGHT*0.75;

var MENU_LOGO_X = WIDTH*0.75;
var MENU_LOGO_K_Y = HEIGHT*0.70;
var MENU_LOGO_B_Y = HEIGHT*0.80;

var PERDISTE_X = WIDTH*0.50;
var PERDISTE_Y = HEIGHT*0.25;

var GANASTE_X = WIDTH*0.50;
var GANASTE_Y = HEIGHT*0.25;

var RELOJ_X = WIDTH*0.20;
var RELOJ_Y = HEIGHT*0.75;

var TRIADA1_X = WIDTH*0.20;
var TRIADA2_X = WIDTH*0.50;
var TRIADA3_X = WIDTH*0.80;
var TRIADA_Y = HEIGHT*0.75;

var TRIADA_CIRCULO_COLOR = '#171719';
var TRIADA_CIRCULO_WIDTH = 35;
var TRIADA_CIRCULO_COLOR2 = '#182b2d';
var TRIADA_CIRCULO_WIDTH2 = 8;
var TRIADA_CIRCULO_COLOR3 = "#00cdcd";

var LOGO_X = WIDTH*0.5;
var LOGO_Y = HEIGHT*0.4;

var LOGO_BOEMIZ_X = WIDTH*0.85;
var LOGO_BOEMIZ_Y = HEIGHT*0.9;

var LOGO_KAPELUSZ_X = WIDTH*0.15;
var LOGO_KAPELUSZ_Y = HEIGHT*0.9;

var BTN_PLAY_X = WIDTH*0.5;
var BTN_PLAY_Y = HEIGHT*0.7;

var BTN_REINTENTAR_X = WIDTH*0.5;
var BTN_REINTENTAR_Y = HEIGHT*0.7;

var PATH_TO_IMG="res/img/";


var PATH_TO_BACKGROUND = PATH_TO_IMG+"bg.png";
var PATH_TO_LOGO = PATH_TO_IMG+"logos/logo.png";
var PATH_TO_LOGO_BOEMIZ = PATH_TO_IMG+"logos/Boemiz.png";
var PATH_TO_LOGO_KAPELUSZ = PATH_TO_IMG+"logos/Kapelusz.png";
var PATH_TO_PERDISTE = PATH_TO_IMG+"perdiste.png";
var PATH_TO_GANASTE = PATH_TO_IMG+"ganaste.png";
var PATH_TO_BTN_REINTENTAR = PATH_TO_IMG+"reintentar.png";
var PATH_TO_BTN_PLAY = PATH_TO_IMG+"jugar.png";
var PATH_TO_BARRA_PROGRESO = PATH_TO_IMG+"Barra_Progreso.png";
var PATH_TO_CEREBRO = PATH_TO_IMG+"Circulo_Central_InGame.png";
var PATH_TO_RELOJ = PATH_TO_IMG+"reloj.png";
var PATH_TO_PISTA = PATH_TO_IMG+"Barra_Pista.png";
var PATH_TO_PISTA2 = PATH_TO_IMG+"pista.png";
var PATH_TO_MENSAJE_FANTASTICO = PATH_TO_IMG+"mensajes/Fantastico.png";
var PATH_TO_MENSAJE_GENIAL = PATH_TO_IMG+"mensajes/Genial.png";
var PATH_TO_MENSAJE_MUY_BIEN = PATH_TO_IMG+"mensajes/MuyBien.png";
var PATH_TO_CIRCULO_CENTRAL = PATH_TO_IMG+"Circulo_Central.png";
var PATH_TO_CIRCULO_CENTRAL_COMPLETO = PATH_TO_IMG+"Circulo_Opciones_Completo.png";
var PATH_TO_CIRCULO_TRIADA = PATH_TO_IMG+"Circulo_Opciones.png";

var PATH_TO_CATEGORIA_BIOLOGIA_S = PATH_TO_IMG+"categorias/Biologia_S.png";
var PATH_TO_CATEGORIA_BIOLOGIA_M = PATH_TO_IMG+"categorias/Biologia_M.png";
var PATH_TO_CATEGORIA_BIOLOGIA_L = PATH_TO_IMG+"categorias/Biologia_L.png";
var PATH_TO_CATEGORIA_ARTE_S = PATH_TO_IMG+"categorias/Arte_S.png";
var PATH_TO_CATEGORIA_ARTE_M = PATH_TO_IMG+"categorias/Arte_M.png";
var PATH_TO_CATEGORIA_ARTE_L = PATH_TO_IMG+"categorias/Arte_L.png";
var PATH_TO_CATEGORIA_HISTORIA_S = PATH_TO_IMG+"categorias/Historia_S.png";
var PATH_TO_CATEGORIA_HISTORIA_M = PATH_TO_IMG+"categorias/Historia_M.png";
var PATH_TO_CATEGORIA_HISTORIA_L = PATH_TO_IMG+"categorias/Historia_L.png";
var PATH_TO_CATEGORIA_GEOGRAFIA_S = PATH_TO_IMG+"categorias/Geografia_S.png";
var PATH_TO_CATEGORIA_GEOGRAFIA_M = PATH_TO_IMG+"categorias/Geografia_M.png";
var PATH_TO_CATEGORIA_GEOGRAFIA_L = PATH_TO_IMG+"categorias/Geografia_L.png";

var BANNER_POSX = WIDTH*0.5;
var BANNER_POSY = HEIGHT*0.3;
var BANNER_HEIGHT = HEIGHT*0.2;
var BANNER_WIDTH = WIDTH*0.6;
var BANNER_CIRCULO_WIDTH = 100;
var BANNER_ANIMATION_MIN = 5000;
var BANNER_ANIMATION_MAX = 10000;
var BANNER_CIRCULO_COLOR = '#171719';

var PATH_TO_BIOLOGIA = PATH_TO_IMG+"niveles/biologia/";
var PATH_TO_ARTE = PATH_TO_IMG+"niveles/arte/";
var PATH_TO_HISTORIA = PATH_TO_IMG+"niveles/historia/";
var PATH_TO_GEOGRAFIA = PATH_TO_IMG+"niveles/geografia/";

var LEVEL_1 = "1/";
var LEVEL_2 = "2/";
var LEVEL_3 = "3/";

var SEGUNDOS_PARA_GENIAL = 10, SEGUNDOS_PARA_FANTASTICO = 20, SEGUNDOS_PARA_MUY_BIEN = 30;
var PUNTOS_PARA_GENIAL = 3, PUNTOS_PARA_FANTASTICO = 2, PUNTOS_PARA_MUY_BIEN = 1;
var PUNTOS_MAXIMOS = 90;