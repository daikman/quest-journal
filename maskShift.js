//function draw() {
//  //let a = map(sin(frameCount/100), -1, 1, 0.8, 0.96)
//  //console.log(sin(frameCount/500), frameCount)
//  if (frameCount % 1000 == 0) {
//    let a = document.getElementsByClassName("mask")[0].style.opacity
//    if (a == 0.85) {
//      document.getElementsByClassName("mask")[0].style.opacity = 0.96
//    } else if (a == 0.96) {
//      document.getElementsByClassName("mask")[0].style.opacity = 0.85
//    } else if (a == '') {
//      document.getElementsByClassName("mask")[0].style.opacity = 0.85
//    }
//  }
// 
//}

let particles = [];
let histories = [];
let n = 20;

function setup() {
  let cv = createCanvas($(window).width() + 100, $(window).height() + 200);
  cv.position(0, 0)
  cv.style("z-index", -1)
  for (let i = 0; i < n; i++) {
    particles.push(
      {
        pos: createVector(random(width), random(height)),
        lerpPos: createVector(0, 0),
        vel: randomVel(),
        timer: randomTime(100, 200),
        cruise: true,
        turnTarget: createVector(random(width), random(height)),
        lerpTarget: createVector(0, 0),
        angle: 0,
        acc: createVector(0, 0)
      }
    )
    particles[i].lerpTarget = particles[i].turnTarget
    particles[i].lerpPos = particles[i].pos
  }
  background(0)
  noStroke()
  fill(255, 50)
}

function draw() {
  clear();
  background(0, 240)
  
  // if (frameCount % 1000 == 0) {
  //   let a = document.getElementsByClassName("mask")[0].style.opacity
  //   if (a == 0.85) {
  //     document.getElementsByClassName("mask")[0].style.opacity = 0.96
  //   } else if (a == 0.96) {
  //     document.getElementsByClassName("mask")[0].style.opacity = 0.85
  //   } else if (a == '') {
  //     document.getElementsByClassName("mask")[0].style.opacity = 0.85
  //   }
  // }
  
  for (let part of particles) {
    
    part.lerpTarget.x = lerp(part.lerpTarget.x, part.turnTarget.x, 0.1)
    
    part.lerpTarget.y = lerp(part.lerpTarget.y, part.turnTarget.y, 0.1)
    
    part.lerpPos.x = lerp(part.lerpPos.x, part.lerpPos.x, 0.01)
    
    part.lerpPos.y = lerp(part.lerpPos.y, part.lerpPos.y, 0.01)
    // draw particles
    
    //point(part.lerpTarget.x, part.lerpTarget.y)
    
    // move them
    //if (!part.cruise) {
      let x = part.turnTarget.y - part.lerpPos.y
      let y = part.turnTarget.y - part.lerpPos.y
      // part.acc.add(r)
      // part.acc.setMag(10)
      push();
      translate(part.lerpTarget.x, part.lerpTarget.y)
      rotate(part.angle)
      circle(x, y, 2)
      pop()
      if (!part.cruise) {
        part.angle += 0.05
      }
      
    //} else {
    //  part.vel.add(part.acc);
    //  // position changes by velocity
    //  part.vel.setMag(5)
    //  part.pos.add(part.vel);
    //  // We must clear acceleration each frame
    //  part.acc.mult(0);
    //  circle(part.pos.x, part.pos.y, 10)
    //}
    
    
    
    
    // restrict them
    let buffer = 100;
    if (part.pos.x < (0 - buffer) | part.pos.x > (width + buffer) |
       part.pos.y > (height + buffer) | part.pos.y < (0 - buffer)) {
      part.vel.mult(-1)
    }
    
    if (frameCount % part.timer == 0) {
      if (part.cruise) {
        part.timer = randomTime(100, 200)
      } else {
        part.timer = randomTime(300, 400)
      }
      part.cruise = !part.cruise
      //part.vel = randomVel()
      
      part.turnTarget = createVector(part.pos.x + random(-100, 100), part.pos.y + random(-100, 100));
    }
    
  }

}

function randomVel() {
  let vector = createVector(random(-1, 1), random(-1, 1))
  vector.setMag(5)
  return(
    vector
  )
}

function randomTime(min, max) {
  return(
    int(random(min, max))
  )
}

function windowResized() {
  resizeCanvas($(window).width() + 100, $(window).height() + 500)
}
