// p5 canvas that clouds over when loading and clears up when loaded
// starts clouded and goes clear on page start

let cnv;
let cloudness = 0;
let clouds = [];
let change = 1;
let max = 32;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight)
    cnv.parent('foreground')
    pixelDensity(0.01)
    for (let i = 0; i < max; i++) {
        const r = random(300, 500)
        clouds.push({
            x: random(0 - r, width + r),
            y: random(0 - r, width + r),
            tx: random(width),
            ty: random(height),
            r: r,
            s: 0.01
        })
    }
    document.getElementById('foreground').style.display = "none"
}

function draw() {
    if (document.getElementById('foreground').style.display == "none") return

    clear()
    background(255, 10)
    
    drawClouds()
    
    cloudness += change
    if (cloudness > max) cloudness = max
    if (cloudness == 0) {
        document.getElementById('foreground').style.display = "none"   
        return
    }
}

function drawClouds() {
    const alpha = 100*(cloudness/max)
    fill(100, 100, 100, alpha)
    noStroke()
    for (let i = 0; i < cloudness; i++) {
        const cloud = clouds[i]
        cloud.x = lerp(cloud.x, cloud.tx, cloud.s)
        cloud.y = lerp(cloud.y, cloud.ty, cloud.s)
        if (abs(cloud.x - cloud.tx) < 50) {
            cloud.tx = random(0 - cloud.r, width + cloud.r)
            cloud.ty = random(0 - cloud.r, height + cloud.r)
        }
        circle(cloud.x, cloud.y, cloud.r)
    } 
}

function cloudUp() {
    change = 1
    document.getElementById('foreground').style.display = "block"
}

function clearUp() {
    change = -1
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}