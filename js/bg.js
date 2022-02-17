const n = 3;
let particles = [];
let targets = [];

let minWidth, maxWidth, minHeight, maxHeight;

function setup() {
  let cv = createCanvas($(window).width() + 100, $(window).height() + 200);
  cv.position(0, 0)
  cv.style("z-index", -1)
  cv.style("width", "100%")

  minWidth = -500
  maxWidth = width + 500
  minHeight = -500
  maxHeight = height + 500
  for (let i = 0; i < n; i++) {
    particles.push(createVector(
      random(minWidth, maxWidth),
      random(minHeight, maxHeight)
    ))
    targets.push(createVector(
      random(minWidth, maxWidth),
      random(minHeight, maxHeight)
    ))
  }

  noStroke()
  pixelDensity(0.01)
}

function draw() {
  background(0)
  fill(255, 10)

  for (let i in particles) {
    let part = particles[i]
    let target = targets[i]
    circle(part.x, part.y, 1000)

    part.x = lerp(part.x, target.x, 0.005)
    part.y = lerp(part.y, target.y, 0.005)
  }

  if (frameCount % 50 == 0) {
    let target = targets[floor(random(targets.length))]

    target.x = random(minWidth, maxWidth)
    target.y = random(minHeight, maxHeight)
  }
}

function windowResized() {
  resizeCanvas($(window).width() + 100, $(window).height() + 200);
}
