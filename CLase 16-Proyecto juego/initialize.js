'use strict'
let GAME = {
  draw:function(){},
  setup:function(){},
  objects:{},
  canvas: document.querySelector("#miCanvas"),
  sources: {
    clock:"https://img.icons8.com/color/452/monarch-butterfly.png",
    carro3:
    "https://cdn.pixabay.com/photo/2016/12/31/01/43/auto-1941988_960_720.png",
    bosque:
    "https://www.pngkey.com/png/full/52-523557_latchford-trails-latchford-hiking-latchford-outdoors-nature-trail.png",
    corcho:
    "https://www.hollywoodexpendables.com/wp-content/uploads/2016/03/Checker-Board.png",
    carro2:
    "https://cdn.pixabay.com/photo/2016/12/31/01/43/auto-1941988_960_720.png",
    metro:
    "https://cdn.pixabay.com/photo/2018/08/25/12/21/train-3629956_1280.png",
    calle:
    "https://www.pngjoy.com/pngm/347/6473445_carretera-parallel-hd-png-download.png",
    venado:
    "https://i.pinimg.com/originals/8d/aa/30/8daa30b78dfca6642da4f04893f2a209.png",
    carro:
    "https://images.vexels.com/media/users/3/139152/isolated/preview/cebcc10aff6214ec9aaa804917aa2a68-log-iacute-stica-de-camiones-de-carga-by-vexels.png",
  },
  images:{},
  mainInterval:undefined,
  dT : 30,
  running  : false,
  initialSetUpDone : false,
  assetsLoaded : false,

  loadImages: async function() {
    return new Promise((resolve, reject)=>{
      let loadedImages = 0;
      let numImages = Object.keys(this.sources).length;
      for (let name in this.sources) {
        this.images[name] = new Image();
        // console.log('loading images', name, loadedImages,numImages)
        this.images[name].onload = function () {
          loadedImages++;
          // console.log(loadedImages)
          if (loadedImages >= numImages) {
            this.assetsLoaded = true;
            resolve()
          }
        };
        this.images[name].src = this.sources[name];
      }
    })
  },
  getCtx:function() {
    this.ctx = this.canvas.getContext("2d");
    // console.log('get ctx')
  },
  loadAssets:async function(){
    await this.loadImages();
  },
  start: async function(){
    this.getCtx()
    await this.loadAssets();
    // while(!this.assetsLoaded)console.log('loading')
    this.setup();// function defined by the user
    this.play();
    
  },
  play: function(){
    if (this.running == false)
    {
      // draw is a function implemented by the user
      this.mainInterval = window.setInterval(this.draw, this.dT);
      this.running = true;
    }
  },
  pause: function(){
    if (this.running == true)
    {
      window.clearInterval(this.mainInterval);
      this.running = false;
    }
  },

  reset:function()
  {
    this.pause();
    this.objects = [];
    this.setup();// function defined by the user
    this.play();
  },
  drawImage(image, x, y, w, h)
  {
    this.ctx.save();
    this.ctx.translate(x, y);

    //this.ctx.rotate(angle * Math.PI/180);

    this.ctx.drawImage(image, -w/2, -h/2, w, h);
    this.ctx.restore();
  }
}

export {GAME}