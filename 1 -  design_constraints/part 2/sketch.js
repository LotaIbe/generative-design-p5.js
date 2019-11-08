
const CRYSTAL_SIZE = 500 
const SIDES = 6
let PALETTE = []

function setup() {
  createCanvas(530, 530, SVG)

  PALETTE = [
    color(255, 52, 154), //pink
    color(4, 0, 152), //blue
    'limegreen'
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
let numShape = randomSelectTwo() ? SIDES : SIDES*2 // ternar operator, true = LHS, false = RHS

// set stroke color to output from random palette color select function
const strokeColor = getRandomFromPalette()
console.log(strokeColor)

  noFill() // no infil color
  push() // isolate actions below
    translate(width/2, height/2) // shift origin to center
    stroke(PALETTE[0]) //pink color for circumference
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    stroke(strokeColor) // random color for stroke selection
    const angle = 360/numShape
    for (let i = 0; i < numShape; i++){
      line(0, 0,  CRYSTAL_SIZE/2, 0) // draw stroke from x0
      rotate(angle) // rotate 
    }
  pop()
}

// function to generate random number between 0 and 1, returns true if result > 0.5 and vice versa
function randomSelectTwo() {
  const rando = random(1)
  if (rando > 0.5) {
    return true
  } else {
    return false
  }
} 

// function to select random color from palette
function getRandomFromPalette() {
  const rando2 = floor(random(0, PALETTE.length))
  return PALETTE[rando2]
}