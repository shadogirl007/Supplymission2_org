class Box{
    constructor(x,y,w,h){
        var options={
            isStatic:true

        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add( world, this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        rect(this.body.position.x-75,this.body.position.y-55,this.height,this.width);
        rect(this.body.position.x+75,this.body.position.y-55,this.height,this.width);
    }
}
