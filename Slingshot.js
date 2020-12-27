class SlingShot{
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

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,50)
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(48,22,8)
            if (pointA.x<220) {
                line(pointA.x-20, pointA.y, pointB-10, pointB);
                line(pointA.x-20,pointA.y,pointB+30,pointB-3)
            }
            else{
                line(pointA.x+25, pointA.x, pointB-10, pointB);
                line(pointA.x+25,pointA.x,pointB+30,pointB-3)
            }
            
            pop();
        }
    }
    
}