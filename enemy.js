class Circle {
    constructor(x,y){
        var options = {
            'isStatic':false,
            'restitution':0,
            'friction':0.5,
            'density':1.2

        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        stroke("Yellow");
        fill(255,165,0);
        ellipse(pos.x,pos.y, this.radius);
        pop();
    }
};