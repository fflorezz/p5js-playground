function sketch(s) {
  let range = 5;

  s.setup = function () {
    s.createCanvas(600, 600);
  };

  s.draw = function () {
    s.background(51);

    let x = s.noise(range) * s.width;
    let x2 = s.noise(range + 5) * s.width;

    s.stroke(255);
    s.line(x, 0, x, s.height);

    s.stroke(100, 200, 100);
    s.line(x2, 0, x2, s.height);
    range += 0.01;
  };
}

const noiseSketch = new p5(sketch);
