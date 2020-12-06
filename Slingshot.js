class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){  //bodyA exists
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
            
    }
    fly(){
        //bodyA should be emptied
        this.sling.bodyA = null;
    }
    
    
}
/*
draw(){
    fly();
    slingshot.fly();

    null - nothing/empty
}
*/