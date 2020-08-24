function bananas(){
  if (frameCount%125===0){
    var banana = createSprite(width+30,random(220,350));
    banana.addImage("bananaimg",bananaimg);
    banana.scale=0.06;
    banana.velocityX=speed;
    banana.lifetime=130;
    bananagrp.add(banana);
  }
}