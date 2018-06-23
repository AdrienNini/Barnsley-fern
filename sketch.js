
var x = 0;
var y = 0;

var nPoints = 0;

var algo = 'default';

var equations = {
    default: [
        {a: 0, b: 0, c: 0, d: 0.16, e: 0, f: 0, p: 0.01},
        {a: 0.85, b: 0.04, c: -0.04, d: 0.85, e: 0, f: 1.6, p: 0.85},
        {a: 0.2, b: -0.26, c: 0.23, d: 0.22, e: 0, f: 1.6, p: 0.07},
        {a: -0.15, b: 0.28, c: 0.26, d: 0.24, e: 0, f: 0.44, p: 0.07}
    ],
    mutated: [
        {a: 0, b: 0, c: 0, d: 0.25, e: 0, f: -0.4, p: 0.02},
        {a: 0.95, b: 0.005, c: -0.005, d: 0.93, e: -0.002, f: 0.5, p: 0.84},
        {a: 0.035, b: -0.2, c: 0.16, d: 0.04, e: -0.09, f: 0.2, p: 0.07},
        {a: -0.04, b: 0.2, c: 0.16, d: 0.04, e: 0.083, f: 0.12, p: 0.07}
    ]
}

var ranges = {
    default: {
        xmin: -2.1820,
        xmax: 2.6558,
        ymin: 0,
        ymax: 9.9983
    },
    mutated: {
        xmin: -1.4777,
        xmax: 1.4699,
        ymin: -0.5251,
        ymax: 7.0580
    }
}

function setup() {
    var c = createCanvas(600, 600);
    c.parent('canvasContainer');
    background(0);
    noLoop();
}

function nextPoint(equation) {
    var nextX;
    var nextY;

    var r = random(1);
    var f;

    if (r < equation[0].p) {
        // 1
        f = 0;
    } else if (r < equation[1].p + equation[0].p) {
        // 2
        f = 1;
    } else if (r < equation[2].p + equation[1].p + equation[0].p) {
        // 3
        f = 2;
    } else {
        // 4
        f = 3;
    }

    nextX = equation[f].a * x + equation[f].b * y + equation[f].e;
    nextY = equation[f].c * x + equation[f].d * y + equation[f].f;

    x = nextX;
    y = nextY;

    return {x: x, y: y};
}

function drawPoint(range) {
    if ($('#multi-color').prop('checked')) {
        colorMode(HSB, 255, 255, 255);
        stroke(map(y, range.ymin, range.ymax,0,255),255,255,200);
    } else {
        colorMode(RGB, 255);
        stroke($('#R').val(), $('#G').val(), $('#B').val());
    }
    
    strokeWeight(0.1);
    var px = map(x, range.xmin, range.xmax, 0, width);
    var py = map(y, range.ymin, range.ymax, height, 0);
    point(px, py);
}

function reset() {
    background(0);
    nPoints = 0;
    x = 0;
    y = 0;
}

function draw() {
    for (let i = 0; i < 100; i++) {
        drawPoint(ranges[algo]);
        nextPoint(equations[algo]);
        nPoints++;
    }
    if (nPoints === 500000) noLoop();
}