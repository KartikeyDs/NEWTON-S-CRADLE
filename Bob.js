class Bob{
constructor(x,y){

var options = {
isStatic:true,
'restitution':0.3,
'friction':0.5,
'density':4
}



this.x = x;
this.y = y;


this.body =  Bodies.circle(this.x,this.y,35,options);
this.image = loadImage("paper.png");
World.add(world, this.body)
}
display() {
var pos = this.body.position;
push()
translate(pos.x,pos.y)
ellipseMode(CENTER)
fill(255,0,255);
ellipse(0,0,35);
pop();
}
};