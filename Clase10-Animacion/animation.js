let terza = document.querySelector("#txt");

function cambiarColor() {
  terza.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}
// setInterval> ejecuta una función cada cierto tiempo. El tiempo se debe escribir en milisegundos
let x3 = 0;
let dX3 = 25;
let y3 = 0;
let dY3 = 10;
let angle = 0;
let dAngle = 5;
let x2= 0;
let y2= 449;
let vY= 0.1;
let vX= 1;
let t= 0
let g=9.8;
let Vo= 0
function diagonal(){
  x3=x3+dX3;
  y3=y3+dY3;
  angle=angle+dAngle
  terza.style.transform= `translate(${y3}px, ${x3}px) rotate(${angle}deg)`;
}
function mover() {
  x = x + dX;
  y = y + dY;
  angle = angle + dAngle;
  terza.style.transform = `translate(${y}px, ${x}px) rotate(${angle}deg)`;
}
function para(){

  x2=((Vo*t*(Math.cos(angle))));
  y2=((Vo*t*(Math.sin(angle)))-(0.5)*g*(t*t));
  // x2=x2+ (vX*t);
  // y2= y2 - (vY*t) + (vY*(-9.8*Math.pow(t,2))/2)
  t= t+1;
  Vo= x2/t;
  angle = angle + dAngle;
  terza.style.transform = `translate(${y2}px, ${x2}px) rotate(${angle}deg)`;
}
let idMovimiento;
let idColor;
let corriendo = false;
function start() {
  corriendo = true;
  idMovimiento = window.setInterval(diagonal, 1000);
  // idColor = window.setInterval(cambiarColor, 30);
}
function stop() {
  corriendo = false;
  window.clearInterval(idMovimiento);
  window.clearInterval(idColor);
}
// window.onkeydown = function (evento) {
//   if (evento.key == "w") {
//     if (corriendo) stop();
//     else start();
//   }