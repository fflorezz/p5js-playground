function sketch(s) {
  const circles = [];
  let height = 600;
  let width = 600;
  let circlesAmount = 300;

  class Circle {
    constructor() {
      this.size = s.random(20, 40);
      this.y = -this.size;
      this.x = s.random(0, height);
      this.velocity = s.random(1, 10);
      this.color = s.color(`rgba(0, 0,${Math.floor(s.random(0, 255))} , 1)`);
      this.bottomEdge = height + this.size / 2;
    }
    draw = () => {
      s.fill(this.color);
      s.ellipse(this.x, this.y, this.size);
    };
    move = () => {
      if (this.y > this.bottomEdge) {
        this.y = -this.size / 2;
      }
      this.y += this.velocity;
    };
  }

  // Create all the circles
  for (let i = 0; i < circlesAmount; i++) {
    circles.push(new Circle());
  }

  s.setup = function () {
    s.createCanvas(width, height);
    s.background(200, 400, 100);
  };

  s.draw = function () {
    s.noStroke();
    // Draw and move every circle
    circles.forEach(circle => {
      circle.draw();
      circle.move();
    });
  };
}

const myp5 = new p5(sketch);
