// project setup
// draw something simple
// translate()
// push() + pop()
// rotate() + angleMode()
// rectMode()

const CRYSTAL_SIZE = 500 
const SIDES = 6
let PALETTE = []

function setup() {
  createCanvas(530, 530, SVG)

  PALETTE = [
    color(255, 52, 154), //pink
    color(4, 0, 152) //blue
  ]
  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  testLines()
}

// function to set design constraints
function testLines () {
  noFill()
  push()
    translate(width/2, height/2)
    stroke(PALETTE[0])
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    stroke(PALETTE[1])
    const angle = 360/SIDES
    for (let i = 0; i < SIDES; i++){
      line(0, 0,  CRYSTAL_SIZE/2, 0)
      rotate(angle)
    }
  pop()
}