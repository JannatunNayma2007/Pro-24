class PlayerArrow {
    constructor(x, y, width, height,archerAngle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      this.archerAngle = archerAngle;
      World.add(world, this.body);
    }
      
  shoot(archerAngle){
        var velocity = p5.Vector.fromAngle(archerAngle+PI/2);
        velocity.mult(20);
        console.log(velocity)
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
       }

   display() {
      var pos = this.body.position;
      var angle = this.body.angle;

      Matter.Body.setAngle(this.body, playerArcher.body.angle+PI/2);
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
 