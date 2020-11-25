let txt=document.querySelector("#txt");
let txt2=document.querySelector("#txt2");

function cambiarColor(){
    txt.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    txt2.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}
window.setInterval(cambiarColor, 100);

let x= 0;
let dX= 10;
let y= 0;
let dY= 10;
let angle= 0
let dAngle= 5;
let x2 = 100;
let y2 = 300;
let vX = 20;
let v0Y = -30;
let aY = 2;
let t = 0;
function mover(){
    x= x + dX;
    y= y + dY;
    angle=angle+dAngle;
;
    if(y==500||x==500){
        x=0;
        y=0;
    }
    txt.style.transform= `translate(${x}px,${y}px)   rotate(${angle}deg)`}
    function para(){ 
      t += 1;
      x2 = 0 + vX * t;
      y2 = 400 + v0Y * t + (aY * Math.pow(t, 2)) / 2;
    angle= angle+ dAngle;
    if(y2>1000||x2>1000){
      t=0;
  }
    txt2.style.transform= `translate(${x2}px,${y2}px) rotate(${angle}deg)`
}
    let idParabola;
    let idMovimiento;
    let idColor;
    let corriendo = false;
    function start() {
      corriendo = true;
      idMovimiento = window.setInterval(mover, 100);
      idColor = window.setInterval(cambiarColor, 30);
      idParabola = window.setInterval(para, 100)
    }
    function stop() {
      corriendo = false;
      window.clearInterval(idMovimiento);
      window.clearInterval(idColor);
      window.clearInterval(idParabola);
    }
    window.onkeydown = function (evento) {
      if (evento.key == "w") {
        if (corriendo) stop();
        else start();
      }
    };