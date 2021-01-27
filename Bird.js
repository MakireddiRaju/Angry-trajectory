class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke=loadImage("sprites/smoke.png")
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position=[this.body.position.x,this.body.position.y]
    this.trajectory.push(position)
    for(var b=0;b<this.trajectory.length;b++){
      image(this.smoke,this.trajectory[b][0],this.trajectory[b][1])
    }
  }
}
