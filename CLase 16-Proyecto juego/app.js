'use strict'
import {GAME} from './initialize.js'

// CREACIón del objeto balón
// PROPIEDADES> x, y, vX, vY, r, imagen
// METODOS> dibujarse, moverse

class Calle {
    constructor(x, y, speed, width, height)
    {
        this.x = x;
        this.y = y;
        this.vX;
        this.vY;
        this.speed = speed
        //this.angle = angle;
        this.width = width;
        this.height = height;
        this.imagen = GAME.images.calle;
        this.enMovimiento = false;
        this.enReversa = false;
    }

    dibujarse(){
        
        GAME.drawImage(this.imagen, this.x, this.y, this.width, this.height);
    }
    // moverse(){
    //     this.vX = this.speed- this.speed;
    //     this.vY = this.speed-this.speed;
    //     if (this.enMovimiento)
    //     {
    //         if(this.enReversa){
    //             this.x -= this.vX * GAME.dT/1000;
    //             this.y -= this.vY * GAME.dT/1000;
    //         }
    //         else{
    //             this.x += this.vX * GAME.dT/1000;
    //             this.y += this.vY * GAME.dT/1000;
    //         }
// }
    // }
}
class Corcho {
    constructor(x, y, speed, width, height)
    {
        this.x = x;
        this.y = y;
        this.vX;
        this.vY;
        this.speed = speed
        //this.angle = angle;
        this.width = width;
        this.height = height;
        this.imagen = GAME.images.corcho;
        this.enMovimiento = false;
        this.enReversa = false;
    }

    dibujarse(){
        
        GAME.drawImage(this.imagen, this.x, this.y, this.width, this.height);
    }
    // moverse(){
    //     this.vX = this.speed- this.speed;
    //     this.vY = this.speed-this.speed;
    //     if (this.enMovimiento)
    //     {
    //         if(this.enReversa){
    //             this.x -= this.vX * GAME.dT/1000;
    //             this.y -= this.vY * GAME.dT/1000;
    //         }
    //         else{
    //             this.x += this.vX * GAME.dT/1000;
    //             this.y += this.vY * GAME.dT/1000;
    //         }
// }
    // }
}
class Bosque {
    constructor(x, y, speed, width, height)
    {
        this.x = x;
        this.y = y;
        this.vX;
        this.vY;
        this.speed = speed
        //this.angle = angle;
        this.width = width;
        this.height = height;
        this.imagen = GAME.images.bosque;
        this.enMovimiento = false;
        this.enReversa = false;
    }

    dibujarse(){
        
        GAME.drawImage(this.imagen, this.x, this.y, this.width, this.height);
    }
    // moverse(){
    //     this.vX = this.speed- this.speed;
    //     this.vY = this.speed-this.speed;
    //     if (this.enMovimiento)
    //     {
    //         if(this.enReversa){
    //             this.x -= this.vX * GAME.dT/1000;
    //             this.y -= this.vY * GAME.dT/1000;
    //         }
    //         else{
    //             this.x += this.vX * GAME.dT/1000;
    //             this.y += this.vY * GAME.dT/1000;
    //         }
// }
    // }
}
class Carro{
    constructor(x, y, speed, width, height, imagen=GAME.images.carro)
    {
        this.x = x;
        this.y = y;
        this.vX;
        this.vY;
        this.r; 
        this.speed = speed
        //this.angle = angle;
        this.width = width;
        this.height = height;
        this.imagen = imagen;
    }

    dibujarse(){
    // console.log(this.imagen);    
        GAME.drawImage(this.imagen, this.x, this.y, this.width, this.height);
    }
    moverse(){
        this.vX = 0;
        this.vY = this.speed;
        this.x -= this.vX * GAME.dT/1000;
        this.y += this.vY * GAME.dT/1000;
    }
}
class Clock{
    constructor(x, y, vX, vY, width, height)
    {
        this.x = x;
        this.y = y;
        this.vX = vX;
        this.vY = vY;
        //this.speed = speed
        //this.angle = angle;
        this.width = width;
        this.height = height;
        this.imagen = GAME.images.clock;
    }

    dibujarse(){
        
        GAME.drawImage(this.imagen, this.x, this.y, this.width, this.height);
    }
    moverse(){
        this.x = this.x + this.vX* GAME.dT/60
        this.y = this.y + this.vY*(GAME.dT/60);
        if (603 - this.y < 10) {
            this.vY = -this.vY; }
        if(1350 - this.x < 10){
            this.vX = -this.vX;}
        if(this.y -0< 25){
            this.vY = -this.vY;}
        if(this.x -0< 25){
            this.vX = -this.vX;}
        }}
class Venado{
    constructor(x, y, speed, width, height)
    {
        this.x = x;
        this.y = y;
        this.vX;
        this.vY;
        this.speed = speed
        //this.angle = angle;
        this.width = width;
        this.height = height;
        this.imagen = GAME.images.venado;
        this.enMovimiento = false;
        this.enReversa = false;
        this.enAbajo = false;
        this.enArriba = false;
    }

    dibujarse(){
        
        GAME.drawImage(this.imagen, this.x, this.y, this.width, this.height);
    }
    moverse(){
        this.vX = this.speed+50;
        this.vY = this.speed-this.speed;
        this.vX1 = this.speed-this.speed;
        this.vY1 = this.speed+50;
        if(this.enMovimiento)
        {     
            if(this.enReversa){
                this.x -= this.vX1 * GAME.dT/1000;
                this.y -= this.vY1 * GAME.dT/1000;}
                else if(this.enAbajo){
                this.x += this.vX * GAME.dT/1000;
                this.y += this.vY * GAME.dT/1000;}
                else if(this.enArriba){
                this.x -= this.vX * GAME.dT/1000;
                this.y += this.vY * GAME.dT/1000;
                }
                else{
                this.x += this.vX1 * GAME.dT/1000;
                this.y += this.vY1 * GAME.dT/1000;
                }
                
            
        }
    }
}
function crearCarros(){
    GAME.objects.carros.push(new Carro(400, 0, 50+150*Math.random(), 100, 200))
    GAME.objects.carros.push(new Carro(400, 300, 50+150*Math.random(), 100, 200)) 
    GAME.objects.carros.push(new Carro(400, -700, 50+150*Math.random(), 100, 80, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(400, -500, 50+150*Math.random(), 100, 200))
    GAME.objects.carros.push(new Carro(400, -500, 50+150*Math.random(), 100, 70, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(400, -500, 50+150*Math.random(), 100, 70, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(400, -500, 50+150*Math.random(), 100, 200))
    GAME.objects.carros.push(new Carro(400, -500, 50+150*Math.random(), 100, 200))
    GAME.objects.carros.push(new Carro(400, -500, 50+150*Math.random(), 100, 200))
    GAME.objects.carros.push(new Carro(400, -500, 50+150*Math.random(), 100, 200))
    GAME.objects.carros.push(new Carro(800, 700, -250+350*Math.random(), 100, 80, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(800, 700, -250+350*Math.random(), 100, 80, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(800, 700, -250+350*Math.random(), 100, 80, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(550, -300, 50+150*Math.random(), 100, 200))    
    GAME.objects.carros.push(new Carro(550, -200, 50+150*Math.random(), 100, 70, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(550, -1700, 50+150*Math.random(), 100, 200)) 
    GAME.objects.carros.push(new Carro(800, 700, -250+350*Math.random(), 100, 80, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(800, 500, -250+350*Math.random(), 100, 200))
    GAME.objects.carros.push(new Carro(800, 700, -250+350*Math.random(), 100, 200))
    GAME.objects.carros.push(new Carro(800, 700, -250+350*Math.random(), 100, 80, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(550, -800, 50+150*Math.random(), 100, 70, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(550, -1000, 50+150*Math.random(), 100, 70, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(550, -200, 50+150*Math.random(), 100, 80, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(550, -500, 50+150*Math.random(), 100, 70, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(800, 700, -250+350*Math.random(), 100, 80, GAME.images.carro2))
    GAME.objects.carros.push(new Carro(800, 800, -150+250*Math.random(), 100, 80, GAME.images.carro2))
}
GAME.setup = function(){
    GAME.objects ={carros:[], player:new Venado(10, 300, 30, 50,70), player1: new Clock(50, 50, 3, 3, 20, 20),
        player2:new Calle(400, 300, 30, 120, 1000), 
        player3:new Calle(800, 300, 30, 120, 1000), player4:new Calle(550, 300, 30, 120, 1000),
    player5: new Bosque(1200, 568, 30, 600, 70), 
    player6:new Corcho(1200, 100, 30, 60, 80),player7:new Corcho(1200, 40, 30, 60, 80), player8:new Corcho(1200, 160, 30, 60, 80),
    player9:new Corcho(1200, 220, 30, 60, 80),player10:new Corcho(1200, 280, 30, 60, 80),player11:new Corcho(1200, 340, 30, 60, 80),
    player12:new Corcho(1200, 400, 30, 60, 80),player13:new Corcho(1200, 460, 30, 60, 80),
    player14:new Corcho(1200, 520, 30, 60, 80), player15:new Corcho(1200, 580, 30, 60, 80),
    player16: new Bosque(0, 568, 30, 600, 70), player17: new Clock(1000, 50, 4, 4, 20, 20),
player18: new Clock(600, 550, 5, 5, 20, 20)}
    crearCarros();
    GAME.score = 2;
    GAME.nitros = 5;
    GAME.tiempoTotal = 18000;// 20 seconds
    GAME.tiempoRestante = GAME.tiempoTotal;// 20 seconds
    GAME.initialTime = window.performance.now();
}
function mostrarPuntaje(){
    GAME.ctx.font = "40px Monaco";
    GAME.ctx.fillStyle = "black"
    GAME.ctx.fillText(`Vidas: ${GAME.score}`, 10, 50);
    GAME.ctx.font = "30px Monaco";
    GAME.ctx.fillText(`Adrenalina: ${GAME.nitros}`, 10, 80);
}
function mostrarTiempo() {
    // console.log(GAME.initialTime)
    // console.log(window.performance.now())
    GAME.ctx.font = "30px Monaco";
    GAME.ctx.fillStyle = "black"
    GAME.ctx.fillText(`Tiempo: ${Math.round(GAME.tiempoRestante/1000)}`, 10, 105);
}
function colisionConVenado(carro)
{
    // console.log(balon.r, GAME.objects.player.width, balon.x,GAME.objects.player.x, balon.y,GAME.objects.player.y )
    let distancia = Math.sqrt(Math.pow(carro.x - GAME.objects.player.x, 2) + Math.pow(carro.y - GAME.objects.player.y, 2));
    if (distancia < (carro.height/7) + GAME.objects.player.width/0.85) return true;
    else return  false;
}
function buscarColisiones()
{
    let colisiones = []
    for (let i=0; i < GAME.objects.carros.length; i++){
        if(colisionConVenado(GAME.objects.carros[i])) colisiones.push(i);
    }
    return colisiones;
}
function quitarCarros(colisiones) {
    for(let pos of colisiones){
        // splice quita elementos de un array.
        GAME.objects.carros.splice(pos, 1);
    }
}
function resetSpeed() {
    GAME.objects.player.speed = 15;
}
GAME.draw =  function(){
    GAME.ctx.clearRect(0,0,1350,603);
    let elapsedT = window.performance.now() - GAME.initialTime;
    GAME.tiempoRestante = GAME.tiempoTotal - elapsedT;
    // console.log(GAME.objects)
    if (GAME.score == 0 || GAME.tiempoRestante < 0 ){
        // detener el juego
        GAME.pause();
        // muestre el mensaje de que ganó
        GAME.ctx.font = "60px Monaco";
        GAME.ctx.fillStyle = "red";
        GAME.ctx.fillText(`PERDISTE`, 40, 180);
    }
    // Si alguna de las particulas se salió, y aún no tiene 10 puntos
    // pierde
    if (GAME.objects.player.x >= 1200){
        // detener el juego
        GAME.pause();
        // muestrar el mensaje de que perdio
        GAME.ctx.font = "60px monaco";
        GAME.ctx.fillStyle = "red";
        GAME.ctx.fillText(`GANASTE`, 40, 180);
    }
    mostrarPuntaje();
    mostrarTiempo();
        // console.log(balon);
    
    GAME.objects.player16.dibujarse();  
    GAME.objects.player15.dibujarse();  
    GAME.objects.player14.dibujarse();    
    GAME.objects.player13.dibujarse();
    GAME.objects.player12.dibujarse();
    GAME.objects.player11.dibujarse();
    GAME.objects.player10.dibujarse();
    GAME.objects.player9.dibujarse();
    GAME.objects.player8.dibujarse();
    GAME.objects.player7.dibujarse();
    GAME.objects.player6.dibujarse();
    GAME.objects.player5.dibujarse();
    GAME.objects.player4.dibujarse();
    GAME.objects.player3.dibujarse();
    GAME.objects.player2.dibujarse();
    for (let carro of  GAME.objects.carros){
            carro.dibujarse();
            carro.moverse();
        } 
    GAME.objects.player.dibujarse();
    GAME.objects.player.moverse();
    GAME.objects.player18.dibujarse();
    GAME.objects.player18.moverse();
    GAME.objects.player17.dibujarse();
    GAME.objects.player17.moverse();
    GAME.objects.player1.dibujarse();
    GAME.objects.player1.moverse();
    //GAME.objects.player2.moverse();
    
    // buscar colisiones devuelve una lista con los índices de los balónes con los cuales la nave chocó
    let colisiones = buscarColisiones();
    // Se quitan los balones de la lista de balones cuando la nave los toca
    quitarCarros(colisiones);

    // Se suman los puntos correspondientes
    GAME.score -= colisiones.length;
}

GAME.start();

// function crearParticula(){

// let ang = 2 * Math.PI * Math.random();
// let newX = 50 + 300 *Math.random()
//      let newY = 50 + 300 *Math.random()
//      let nuevoCarro = new Carro(newX, newY,10 * Math.cos(ang), 10 * Math.sin(ang), 15, 0, 360);

// //     // añado el nuevo balón al array de balones
//     GAME.objects.carros.push(nuevoCarro);
//  }

// // Al hacer click se va a ejecutar la función crear partícula
// GAME.canvas.onclick = crearParticula


function teclaPresionada(e){
    console.log(e.code)
    if (e.code =='Space')
    {
        console.log(e.shiftKey)
        if(e.shiftKey) GAME.reset();
        else{
            if (GAME.running) GAME.pause();
            else GAME.play();
        }

    }
    if (e.code == 'KeyS')
    {
        GAME.objects.player.enMovimiento = true
    }
    if (e.code == 'KeyW')
    {
        GAME.objects.player.enMovimiento = true;
        GAME.objects.player.enReversa = true;
        // console.log('moverse hacia atras')
    }
    if (e.code == 'KeyD')
    {
        GAME.objects.player.enMovimiento = true;
        GAME.objects.player.enAbajo = true;
        // console.log('moverse hacia atras')
    }
    if (e.code == 'KeyA')
    {
        GAME.objects.player.enMovimiento = true;
        GAME.objects.player.enArriba = true;
        // console.log('moverse hacia atras')
    }
    if (e.code == 'KeyE')
    {
        if (GAME.nitros > 0)
        {
            console.log("increasing speed")
            GAME.objects.player.speed = 100;
            GAME.nitros -= 1;
            window.setTimeout(resetSpeed, 1000);
        }
        // console.log('arrancar')
    }
    // console.log(e.code)
}
function aumentarvelocidad(){
    if (GAME.nitros > 0)
    {
        console.log("increasing speed")
        GAME.objects.player.speed = 100;
        GAME.nitros -= 1;
        window.setTimeout(resetSpeed, 1000);
    s}
    // console.log('arrancar')
}
GAME.canvas.onclick = aumentarvelocidad
function teclaLevantada(e)
{
    if (e.code == 'KeyS')
    {
        GAME.objects.player.enMovimiento = false;
        // console.log('detenerse')
    }
    if (e.code == 'KeyW')
    {
        GAME.objects.player.enMovimiento = false;
        GAME.objects.player.enReversa = false;
        // console.log('detener el movimiento hacia atrás')
    }
    if (e.code == 'KeyD')
    {
        GAME.objects.player.enMovimiento = false;
        GAME.objects.player.enAbajo = false;
        // console.log('moverse hacia atras')
    }
    if (e.code == 'KeyA')
    {
        GAME.objects.player.enMovimiento = false;
        GAME.objects.player.enArriba = false;
        // console.log('moverse hacia atras')
    }
}
document.onkeydown = teclaPresionada;
document.onkeyup = teclaLevantada;