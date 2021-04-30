class Slingshot{
    constructor(A,B){
        var options={
            bodyA:A,
            pointB:B,
            length:10,
            stiffness:0.04
        }
        this.pointB=B
        this.sling=Constraint.create(options); 
    World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null
    }
display(){
    if(this.sling.bodyA){
    var pointA=this.sling.bodyA.position;
    var pointB=this.pointB;
    push()
    strokeWeight(4)
line(pointA.x,pointA.y,pointB.x,pointB.y)
pop()
}
}    
}