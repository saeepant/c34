class Ball {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.r = 30;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        
        
        fill("red");
        ellipse(0, 0, this.r, this.r);
        pop();
        
      }
    };