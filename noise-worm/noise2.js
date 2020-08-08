function sketch(s) {
  let range = 1;

  s.setup = function () {
    s.createCanvas(600, 600);
    s.background(51);
  };

  s.draw = function () {
    let x = s.noise(range) * s.width;
    let y = s.noise(range + 1) * s.height;

    s.fill(Math.floor(s.noise(range) * 255));
    console.log(Math.floor(s.noise(range) * 255));
    s.ellipse(x, y, 20);

    range += 0.01;
  };
}

const noiseSketch = new p5(sketch);
