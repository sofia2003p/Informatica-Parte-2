import {IMAGES as images} from './initialize.js'
import {ctx, drawObj, run, start, dT} from './initialize.js'

// CREACIón del objeto balón
// PROPIEDADES> x, y, vX, vY, r, imagen
// METODOS> dibujarse

// console.log(images)
let balon = {
    //PROPIEDADES
    x:0,
    y:0,
    w:10,
    h: 50,
    r:5,
    a: 3.333,
    vX: 50,// px por segundo
    vY: 21.6,
    // imagen: undefined,
    //METODOS
    dibujarse:function(){
        // ctx.drawImage(this.imagen, this.x-this.r, this.y-this.r, 2*this.r, 2*this.r);
        // ctx.beginPath();
        // ctx.fillRect(this.x-(this.w/2), this.y, this.w, this.h);
        // ctx.stroke();
        // ctx.fill();
        // ctx.beginPath();
        ctx.beginPath();
        ctx.fillStyle="rgba(254, 129, 129)";
        ctx.arc(this.x+(this.w/2), this.y, this.r, this.x, Math.PI, true);
        ctx.lineTo(this.x+(this.w/2), this.y);
        ctx.fill();
        ctx.fillStyle = "rgba(255, 228, 0)"
        ctx.fillRect(this.x, this.y, this.w, this.h)   
        ctx.beginPath();
        ctx.fillStyle ="rgb(255, 193, 159)";
        ctx.moveTo(this.x, this.y + this.h);
        ctx.lineTo(this.x+this.r, this.y+(6*this.w));    
        ctx.lineTo(this.x+(2*this.r), this.y + this.h);
        ctx.fill(); 
        ctx.beginPath();
        ctx.fillStyle = "rgba(186, 186, 186)"; 
        ctx.fillRect(this.x, this.y+(this.a/15), this.w, this.w/2)
        ctx.beginPath();
        ctx.fillStyle = "rgba(0,0,0)"
        ctx.moveTo(this.x+this.a, this.y + this.h+ (2*this.a));
        ctx.lineTo(this.x+(2*this.a), this.y+ this.h + (2*this.a));
        ctx.lineTo(this.x+(this.r), this.y + (6*this.w));
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "rgba(0,0,0)"
        ctx.moveTo(this.x+this.a, this.y+(this.a/15)+(this.w/2))
        ctx.lineTo(this.x+this.a, this.y+(this.a/15)+(this.w/2));
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "rgba(0,0,0)"
        ctx.lineTo(this.x+(2*this.a), this.y+(this.a/15)+(this.w/2));
        ctx.lineTo(this.x+(2*this.a), this.y+(this.a/15)+(this.w/2));
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "rgba(0,0,0)"
        ctx.lineTo(this.x+(this.r), this.y+(this.a/15)+(this.w/2));
        ctx.lineTo(this.x+(this.r), this.y+(this.a/15)+(this.w/2));
        ctx.fill();
        ctx.stroke();
    },
    moverse:function(){
        this.x = this.x + this.vX * dT/1000;
        this.y = this.y + this.vY * dT/1000;
    }

}

// Puedo crear un objeto apartir del objeto balon
let balon2 = Object.create(balon)
balon2.x = 195;
balon2.y = 175;
balon2.vX = 0;
balon2.vY = 0;
let balon3 = Object.create(balon)
balon3.x = 0;
balon3.y = 400;
balon3.vX = 50;
balon3.vY = -50;
drawObj.draw =  function(){
    ctx.clearRect(0, 0, 400, 400);
    balon.dibujarse();
    balon2.dibujarse()
    balon3.dibujarse();
    balon.moverse();
    balon2.moverse();
    balon3.moverse();
}
run()