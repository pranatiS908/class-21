function bounceOff(a,b){
    if(b.x-a.x<a.width/2+b.width/2
      && a.x-b.x<b.width/2+a.width/2){
        b.velocityX=b.velocityX*-1
        a.velocityX=a.velocityX*-1
      }
      if(b.y-a.y<a.width/2+b.width/2
        && a.y-b.y<b.width/2+a.width/2){
          b.velocityY=b.velocityY*-1
          a.velocityY=a.velocityY*-1
        }
  }