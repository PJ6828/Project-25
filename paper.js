class Paper {
    constructor(x,y,r) {
        var option = {
            
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,r,option);
        this.r = r;
        this.image = loadImage("paper.png");
        World.add(world,this.image);
    }
    display() {
        var pos = this.body.position;
        push();
			translate(pos.x, pos.y);
			imageMode(CENTER)
			strokeWeight(4);
			fill(255)
			image(this.image,0,0,this.r,this.r);
		pop();
    }
}