let canvas = document.querySelector("#miCanvas");
let ctx = canvas.getContext("2d");

function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
var sources = {
  fondo: "https://images7.alphacoders.com/805/805197.jpg",
  luna:
    "https://assets.stickpng.com/images/580b585b2edbce24c47b270b.png",
  tierra: 
  "https://assets.stickpng.com/images/580b585b2edbce24c47b2705.png"  

};
let x = 50;
let y = 60;
let vX = 50;
let vY = 75;
let dT = 0.03;
// let t = 0;
// coordenadas del objeto que controla el usuario
let x2 = 200;
let y2 = 100;
let x3 = 0;
let y3 = 0;
let angle = 0
function draw(images) {
  // t += 0.03;
  x = x + vX * dT; // 50 + 10*0.03 = 50.3
  y = y + vY * dT; // 50 + 10*0.03 = 50.3
  angle = angle + 0.1;
  // Si está chocando con alguna pared, entonces cambiar de signo la velocidad
  // choque con la pared inferior
  if (400 - y < 25) vY = -vY;
  // choque con la pared de la derecha
  if (600 - x < 25) vX = -vX;
  // choque con la pared superior
  if (y - 0 < 25) vY = -vY;
  // choque con la pared de la izquierda
  if (x - 0 < 25) vX = -vX;
  ctx.clearRect(0, 0, 600, 400);
  ctx.drawImage(images.fondo, x3, y3, 600, 400);
  ctx.drawImage(images.tierra, x2, y2, 90, 90);
  ctx.translate(x, y);
  ctx.rotate(-angle);
  ctx.drawImage(images.luna, - 25, - 25, 50, 50);
  ctx.rotate(angle);
  ctx.translate(-x, -y);
  
}
// La variable images contiene las imagenes cargadas
function run(images) {
  //  La función draw se va a ejecutar cada 30 ms, es decir
  // 1000/30 = 33.333 veces por segundo
  window.setInterval(function () {
    draw(images);
  }, 30);
  //   ctx.drawImage(images.soccerBall, 200, 20, 30, 30);
  //   ctx.drawImage(images.yoda, 200, 0, 200, 400);
}
// la funcion run se ejecuta cuando las imagenes acaban de cargar.
loadImages(sources, run);

window.onkeydown = function (evento) {
  if (evento.key == "w") {
    y2 = y2 - 10;
  }
  if (evento.key == "s") {
    y2 = y2 + 10;
  }
  if (evento.key == "a") {
    x2 = x2 - 10;
  }
  if (evento.key == "d") {
    x2 = x2 + 10;
  }
};