class Divisions {

 constructor(x,y,w,h){

 var options={

     'isStatic':true


 }


this.body=Bodies.rectangle(x,y,w,h,options);
this.w=w;
this.h=h;

World.add(world,this.body);

}display(){

push();

var pos=this.body.position;

translate(pos.x,pos.y)

rectMode(CENTER);

fill("white");

rect(pos.x,pos.y,this.w,this.h);

pop();


}













}