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
  vacu:
        "https://ideas.llorenteycuenca.com/wp-content/uploads/sites/5/2020/08/200812_IDEAS_VACUNAS_CABECERA_INTERIOR.png",
  covid: "https://images.vexels.com/media/users/3/193293/isolated/preview/403755e1b1ee450945e90e53885933bf-car--cter-hombre-covid-19-by-vexels.png",
  virus:
  "https://cdn.pixabay.com/photo/2020/04/01/12/20/virus-4990988_1280.png",
};
let x = 500;
let y = 500;
let dX = 8;
let dY = 5;
let vX = 40;
let v0Y = -50;
let aY = 2;
let t = 0;
let x0 = 0;
let y0 = 500;
function draw(images) {
  x0 = x0 + 2*dX;
  y0 = y0 - 2*dY;
  t += 1;
  x = 0 + vX * t;
  y = 800 + v0Y * t + (aY * Math.pow(t, 2)) / 2;
  ctx.clearRect(0, 0, 2000, 900);
  ctx.drawImage(images.vacu, x0, y0, 100, 100)
  ctx.drawImage(images.virus, x, y, 100, 100);
  ctx.drawImage(images.covid, 600, 430, 500, 500);
}
// La variable images contiene las imagenes cargadas
function run(images) {
  window.setInterval(function () {
    draw(images);
  }, 300);
  //   ctx.drawImage(images.soccerBall, 200, 20, 30, 30);
  //   ctx.drawImage(images.yoda, 200, 0, 200, 400);
}
// la funcion run se ejecuta cuando las imagenes acaban de cargar.
loadImages(sources, run);