;


function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);
  translate(200,200)  
  hr=hour();
mn=minute();
sc=second();
scangle=map(sc,0,60,0,360)
mnangle=map(mn,0,60,0,360)
hrangle=map(hr%12,0,12,0,360)
push()
rotate(scangle)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
pop()
push()
rotate(mnangle)
stroke(0,255,0)
strokeWeight(7)
line(0,0,75,0)
pop()
push()
rotate(hrangle)
stroke(0,0,255)
strokeWeight(7)
line(0,0,125,0)
pop()
  drawSprites();
}