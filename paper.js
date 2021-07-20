class Paper{
    constructor(){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.body = Bodies.circle(250,540,(50/2),options);
        
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        push();
        translate(pos.x,pos.y)
        //rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,(50/2));
        pop();
    }
}