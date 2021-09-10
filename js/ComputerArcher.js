class ComputerArcher {
    constructor(x, y, width, height) {

      this.width = width;
      this.height = height;
      this.angle = PI/2;

    var options = {
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      World.add(world, this.body);
      Matter.Body.setAngle(this.body,this.angle);

      this.image = loadImage("assets/computerArcher.png")
    }


    display() {
      
      var angle = this.body.angle;
      var pos = this.body.position;

      if (keyIsDown(UP_ARROW) && angle < 1.9) {
        angle += 0.01;
        Matter.Body.setAngle(this.body,angle);
      }
  
      if (keyIsDown(DOWN_ARROW) && angle > 1.2) {
        angle -= 0.01;
        Matter.Body.setAngle(this.body,angle);
      }
      push()
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop()
    }
  }






