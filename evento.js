let canvas = document.querySelector("#canvas1");
let ctx = canvas.getContext("2d");
function circulo(x, y, r) {
  ctx.fillStyle = "rgba(79, 238, 28, 0.9)";
  ctx.strokeStyle= "white"
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.stroke();
}
function rectangulo(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, 40, 30);
  ctx.fill();
  ctx.stroke();
}
function triangulo(x1, y1){
  ctx.moveTo(x1, y1);
 ctx.lineTo(x, y);
 ctx.lineTo(0, 0);
 ctx.closePath();
 ctx.stroke();
 ctx.fill();
}
function triangulo1(x1, y1){
  ctx.moveTo(x, y);
 ctx.lineTo(x1, y1);
 ctx.lineTo(400, 400);
 ctx.closePath();
 ctx.stroke();
 ctx.fill();
}
canvas.onclick = function (evento) {
  ctx.fillStyle = "rgba(28, 79, 238, 0.1)";
  triangulo1(evento.offsetX - 100, evento.offsetY, +100);
  triangulo1(evento.offsetX + 100, evento.offsetY, -100);
  triangulo(evento.offsetX - 100, evento.offsetY , -100);
  triangulo(evento.offsetX + 100, evento.offsetY , +100);

  //   console.log(evento);
  //   console.log(
  //     `Se hizo click en el canvas en las coordenadas ${evento.clientX}, ${evento.clientY} con respecto a la esquina superior izquierda de la pagina`
  //   );
  //   console.log(
  //     `Se hizo click en el canvas en las coordenadas ${evento.offsetX}, ${evento.offsetY} con respecto a la esquina superior izquierda del canvas`
  //   );
};

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
// eventos al presionar una tecla
// al inicio creo un circulo en el centro
let x = 200;
let y = 200;
let puntaje = 0;
circulo(x, y, 15);
document.onkeydown = function (evento) {
  if (evento.key == "w") {
    clear();
    y = y - 10;
    circulo(x, y, 15);
  }
  if (evento.key == "s") {
    clear();
    y = y + 10;
    circulo(x, y, 15);  
  }
  if (evento.key == "a") {
    clear();
    x = x - 10;
    circulo(x, y, 15);  
  }
  if (evento.key == "d") {
    clear();
    x = x + 10;
    circulo(x, y, 15);  
  }
  if (evento.key == "e") {
    clear();
    y = y - 10;
    x = x + 10;
    circulo(x, y, 15);
  }
  if (evento.key == "q") {
    clear();
    y = y - 10;
    x = x - 10;
    circulo(x, y, 15);
  }
  if (evento.key == "z") {
    clear();
    y = y + 10;
    x = x - 10;
    circulo(x, y, 15);
  }
  if (evento.key == "x") {
    clear();
    y = y + 10;
    x = x + 10;
    circulo(x, y, 15);
  }
  if ((y < 15 && y > 0) || (y > 385 && y < 400)) {
    puntaje += 1;
    document.querySelector("#puntaje").innerHTML = puntaje;
  }
  if ((x < 15 && x > 0) || (x > 385 && x < 400)) {
    puntaje += 1;
    document.querySelector("#puntaje").innerHTML = puntaje;
  }
};