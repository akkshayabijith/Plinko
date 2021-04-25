class Particle{
    constructor(x,y){
        var op = {
            restitution: 0.04
        }
        this.x = x;
        this.y = y;
        this.color = color(random(0,255),random(0,255),random(0,255))
        this.that = Bodies.circle(this.x,this.y,10,op);
        World.add(world,this.that)
    }

    display(){
        push();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(this.that.position.x,this.that.position.y,10,10);
        pop();
    }
}