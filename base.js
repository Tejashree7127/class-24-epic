class Base{
    constructor(x,y,w,h){

        var option={
      isStatic:true
        }
        this.image=loadImage("assets/base1.png")
        this.body=Bodies.rectangle(x,y,w,h,option)
        this.w=w
        this.h=h
        World.add(world,this.body)
    }

    display(){
        
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    }
}