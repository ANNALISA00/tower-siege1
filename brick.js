class Brick {
  constructor(x,y,width,height){
    var options={
       restitution:1,
   }
   
    this.body=Bodies.rectangle(200,100,50,50,options);
    World.add(world.this.body);
  }
    display(){
var pos=this.body.position;
rectMode(CENTR);
fill(225);
rect(pos.x,pos.ythis.width,this.height);

    }
}