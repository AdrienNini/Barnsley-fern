
var x = 0;
var y = 0;

var points = [];

function setup() {
    var c = createCanvas(600, 600);
    c.parent('canvasContainer');
    background(0);
    noLoop();
}


function preload() {
    for (let i = 0; i < 50000; i++) {
        points.push(nextPoint());
    }
}

function nextPoint() {
    var nextX;
    var nextY;

    var r = random(1);

    if (r < 0.01) {
        // 1
        nextX = 0;
        nextY = 0.16 * y;
    } else if (r < 0.86) {
        // 2
        nextX = 0.85 * x + 0.04 * y;
        nextY = -0.04 * x + 0.85 * y + 1.6;
    } else if (r < 0.93) {
        // 3
        nextX = 0.20 * x + -0.26 * y;
        nextY = 0.23 * x + 0.22 * y + 1.6;
    } else {
        // 4
        nextX = -0.15 * x + 0.28 * y;
        nextY = 0.26 * x + 0.24 * y + 0.44;
    }

    x = nextX;
    y = nextY;

    return {x: x, y: y};
}

function drawPoint(p) {
    if ($('#multi-color').prop('checked')) {
        colorMode(HSB, 255, 255, 255);
        stroke(map(p.y, 0, 9.9983,0,255),255,255,200);
    } else {
        colorMode(RGB, 255);
        stroke($('#R').val(), $('#G').val(), $('#B').val());
    }
    
    strokeWeight(2);
    var px = map(p.x, -2.1820, 2.6558, 0, width);
    var py = map(p.y, 0, 9.9983, height, 0);
    point(px, py);
}

function reset() {
    background(0);
    x = 0;
    y = 0;
}

function draw() {
    for (let i = 0; i < 100; i++) {
        drawPoint({x: x, y: y});
        nextPoint();
    }
}