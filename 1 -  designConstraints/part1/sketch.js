
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
const rando = random(1) // generate random number between 0 and 1
let numShape // variable to store number of sides

// rule to make a decision (if statement)
if (rando > 0.5) {
  numShape = SIDES
} else {
  numShape = SIDES * 2
} 

// we want to select colors at random from the PALETTE array
// To do this, we the random function to generate a random number between 0 and the klength of array
// we then floor the output to ensure integers only,
//finaly we index this random number from the PALETTE list

const rando2 = floor(random(0, PALETTE.length))
const strokeColor = PALETTE[rando2]
console.log(rando2)

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