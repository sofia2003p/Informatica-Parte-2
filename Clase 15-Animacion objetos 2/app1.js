import {canvas, IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'

// CREACIón del objeto balón
// PROPIEDADES> x, y, vX, vY, r, imagen
// METODOS> dibujarse
let balones = []

let Balon = { 
// console.log(images)
    //PROPIEDADES
    x:200,
    y:200,
    r:15,
    vX: 50,// px por segundo
    vY: -50,
    // imagen: undefined,
    //METODOS
    dibujarse:function(){
        // ctx.drawImage(this.imagen, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 2*Math.PI, 0);
        ctx.fillStyle = "rgba(0,0,0,0.5)"
        ctx.stroke();
        ctx.fill();
    },
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
        if (400 - this.y < 15) this.vY = -this.vY;
        if (400 - this.x < 15) this.vX = -this.vX;
        if (this.y - 0 < 15) this.vY = -this.vY;
        if (this.x - 0 < 15) this.vX = -this.vX;
    }

}
drawObj.draw = function(){
    ctx.clearRect(0,0,400,400);
    for (let balon of balones){
        balon.dibujarse()
        balon.moverse()
    }
}
run()

canvas.onclick = function crearParticula(particula){
    let nuevoBalon = Object.create(Balon)
    nuevoBalon.x = (particula.offsetX)
    nuevoBalon.y = (particula.offsetY)
    let ang = 2* Math.PI * Math.random()
    let v = 200 * Math.random()
    nuevoBalon.vX = v * Math.cos(ang)
    nuevoBalon.vY = v * Math.sin(ang)
    balones.push(nuevoBalon)
    console.log(balones)
}

canvas.onclick = crearParticula
