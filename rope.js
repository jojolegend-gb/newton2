class Sling{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {

        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        stroke("green");
        var px = pointA.x;
        var py = pointA.y;

        var sx = pointB.x+this.offsetX;
        var sy = pointB.y+this.offsetY;
        line(px, py, sx, sy);
    }
}