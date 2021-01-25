class rubber {
    constructor(x,y) {
      var options = {
          'restitution':0.9,
          'friction':15.9,
          'density':1.1
      }
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     // strokeWeight(4);
      //stroke("green");
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  