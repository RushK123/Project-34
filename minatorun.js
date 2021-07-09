class MinatoRun{
  constructor(x,y,w, h, pos, minatoAnimation){
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      this.pos = pos;
      this.minatoAnimation = minatoAnimation;
      this.speed = 0.05
      var options = {
        restitution : 0.1,
        friction : 1, 
        density : 1
      }
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
      World.add(world,this.body);
  }

  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      var index = floor(this.speed%this.minatoAnimation.length);
      push ();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode (CENTER);
      image(this.minatoAnimation,0,this.pos,this.width, this.height);
      pop ();
  
  }
  animate(){
    this.speed += 0.05 % 1.1;
  }
  remove(index){
    this.speed = 0.05;
    this.width = 300;
    this.height = 300;
    setTimeout(() => {
      World.remove(world,minato[index].body);
      minato.splice(index,1);
    }, 2000);
  }
}