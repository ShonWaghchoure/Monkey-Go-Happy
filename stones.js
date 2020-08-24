function obstacles(){
  if (frameCount%80===0){
    var obs = createSprite(width,360);
    obs.addImage("obsimg",obsimg);
    obs.scale = 0.18;
    obs.velocityX=speed-2;
    obs.lifetime=130;
    stonegrp.add(obs);
  }
}