function setup() {
  createCanvas(500, 500, SVG) 
  noLoop() // one time action
  angleMode(DEGREES)//default p5.js is radians
  rectMode(CENTER)
}

function draw() {
    background('teal')
    fill(0)
    push() // isolate matrix changes
        translate(width/2, height/2) //move the origin
        rotate(45)
        rect(0, 0, 25, 25)
    pop() //return back to matrix origin before push
    fill('red')
    rect(0,0,25,25)
}