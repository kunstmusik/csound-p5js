/* Glowing Orbs
 * Author: Steven Yi <stevenyi@gmail.com>
 * Description: 
 * p5.js sketch to draw visual using Glorb ("Glowing Orb") objects.
 * Csound code found in csound-p5js.js that uses livecode.orc from 
 * https://github.com/kunstmusik/csound-live-code
 * */

var glorbs = [];
var sketchFS = false;

var textAlpha = 0;
var textAlphaSpeed = 1;

function setup() { 

  var cnvs = createCanvas(windowWidth, windowHeight);
  cnvs.style('display', 'block');
  
  textAlign(CENTER);

  for(var i = 0; i < 100; i++) {
    glorbs[i] = new Glorb();
  }
} 

function draw() { 
  background(0);

  if(csoundLoaded) {

    for(var i = 0; i < glorbs.length; i++) {
      glorbs[i].tick();
    }
  } else {
    fill(255, 255, 255, textAlpha);    
    //fill('white');
    text("...LOADING CSOUND...", width/2, height/2);

    textAlpha += textAlphaSpeed;
    if(textAlpha > 100 || textAlpha < 0) {
      textAlphaSpeed *= -1;
    }
  }

}


function Glorb() {
  this.animAmount = 0.0;

  this.reset = function() {
    this.x = int(random(width / 49)) * 50;
    this.y = int(random(height / 49)) * 50;
    this.hue = random(200, 300);
    this.animSpeed = random(0.0001, 0.005);
  }

  this.reset();

  this.tick = function() {
    ellipseMode(CENTER);
    colorMode(HSB);
    noStroke();
    fill(this.hue, 100, this.animAmount * 100, this.animAmount);
    var w = this.animAmount * 20 + 50;
    ellipse(this.x, this.y, w, w);

    this.animAmount += this.animSpeed;
    
    if(this.animAmount > 1) {
      this.animSpeed *= -1;
    } else if(this.animAmount < 0) {
      this.reset();
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  sketchFS = !sketchFS;
  fullscreen(!sketchFS);
}
