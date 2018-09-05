// Creating variables
var myX = 20, myY = 490;
var kaktusX=[], kaktusY=[]
var ik
var broiKaktusi=5
var spawnTime=0
var dy=0
var broiSkachaniq=1
var points=0
var health=3
var gold=0
var menuOn=false
var tutX=700, tutY=20
var skorost=5
var playX=350, playY=275
var isItGameOn=false
var isShopOn=false
var type=0
var dx=0
var fireBallX=[], fireBallY=[]
var iF, broiBalls=1
var tBalls=0

var dino=new Image()
dino.src="dino.png";
var dino2=new Image()
dino2.src="dino2.png";
var dino3=new Image()
dino3.src="dino3.png";
var dino4=new Image()
dino4.src="dino4.png";

var dinord=new Image()
dinord.src="dinord.png";
var dinord2=new Image()
dinord2.src="dinord2.png";
var dinord3=new Image()
dinord3.src="dinord3.png";
var dinord4=new Image()
dinord4.src="dinord4.png";

var dinogr=new Image()
dinogr.src="dinogr.png";
var dinogr2=new Image()
dinogr2.src="dinogr2.png";
var dinogr3=new Image()
dinogr3.src="dinogr3.png";
var dinogr4=new Image()
dinogr4.src="dinogr4.png";

var dinobl=new Image()
dinobl.src="dinobl.png";
var dinobl2=new Image()
dinobl2.src="dinobl2.png";
var dinobl3=new Image()
dinobl3.src="dinobl3.png";
var dinobl4=new Image()
dinobl4.src="dinobl4.png";


var tm=1
var prom=dino
for(iF=1; iF<=broiBalls; iF=iF+1) {
    fireBallX[iF]=8000000000
    fireBallY[iF]=8000000000
}
 for(ik=1; ik<=broiKaktusi; ik=ik+1) {
        kaktusX[broiKaktusi]=Math.floor(Math.random()*1600+800)
        kaktusY[broiKaktusi]=490
  }
function update() {
 tm=tm+1
    if(isItGameOn==true) {
        if(menuOn==false && isShopOn==false) {
          if(health>0) {
              if(isKeyPressed[83]) {
                  dy=dy-1
              }
            if(isKeyPressed[68] && type==0) {
                  dy=-1
             }
            for(ik=1; ik<=broiKaktusi; ik=ik+1) {
                if(areColliding(myX, myY, 30, 60, kaktusX[ik], kaktusY[ik], 30, 60)) {
                        health=health-1
                        myY=kaktusY[ik]-50
                        dy=20
                    if(health==0) {
                        myY=kaktusY[ik]
                        dy=0
                    }    
                }
                for(iF=1; iF<=broiBalls; iF=iF+1) {
                    fireBallX[iF]=fireBallX[iF]+0.1
                    if(areColliding(fireBallX[iF], fireBallY[iF], 10, 10, kaktusX[ik], kaktusY[ik], 120, 60)) {
                        kaktusY[ik]=800
                    }
                }
            }

  
    
                myY=myY-dy
              if(dy>0) {
                 dy=dy-0.5
              }
             if(myY<490) {
                  dy=dy-0.5
                }
              if(dx>0) {
                 dx=dx-0.5
              }
                if(myY>490) {
                        myY=490
                        dy=0
                        broiSkachaniq=1
                    if(type==3) {
                        broiSkachaniq=2
                    }
                }
    spawnTime=spawnTime+1
                    for(ik=1; ik<=broiKaktusi; ik=ik+1) {
                        kaktusX[ik]=kaktusX[ik]-skorost-dx
                    }
                    if(spawnTime>90) {
                        spawn();
                        broiKaktusi=broiKaktusi+1
                        spawnTime=0
                    }

            }
        }  
    }   
}
function spawn() {
        points=points+1
    tBalls=tBalls+1
    for(ik=1; ik<=broiKaktusi; ik=ik+1) {
        kaktusX[broiKaktusi]=Math.random()*1600+800
        kaktusY[broiKaktusi]=490
        skorost=skorost+0.002
    }
}

function draw() {
    // This is how you draw a rectangle
    
            if(isItGameOn==true) {
        context.fillStyle="yellow"
        context.fillRect(0, 0, 800, 600)
        context.font = "bold 18pt Arial";
        context.fillStyle="black"
        context.fillText("POINTS",20, 50 )
        context.fillText(points, 150, 50 )
    
        context.fillText("HEALTH",20, 100 )
     
    for(let HP=1; HP<=health; HP=HP+1) {
        context.fillStyle="pink"
        context.fillRect(HP*40+120, 80, 30, 30)
    }
        context.fillStyle="black"
        context.fillText("GOLD",20, 150 )
        context.fillText(gold, 150, 150 )
    
        context.fillStyle="aqua"
        context.fillRect(tutX, tutY, 100, 50)
    
    if(menuOn==true) {
        context.fillStyle="aqua"
        context.fillRect(0, 0, 800, 600);
        context.fillStyle="black"
        context.fillText("CLICK R FOR RESETING WHEN YOU DIE", 10, 50);
        context.fillText("CLICK SPACE FOR JUMP", 10, 100);
        context.fillText("YOU CAN GET NEW DINOS FROM THE SHOP", 10, 150);
        context.fillText("CLICK S FOR FALLING FASTER", 10, 200);
        context.fillText("THE RED AND THE BLUE DINOS HAVE ABILITY:ACTIVATE WITH D", 10, 250);
        context.fillText("THE NORMAL DINO HAS A GLIDER ACTIVATE WITH D", 10, 300);
    }
       
    if(isShopOn==true) {
        context.fillStyle="orange"
        context.fillRect(0, 0, 800, 600)
        context.fillStyle="black"
        context.fillText("YOU ARE IN THE SHOP", 300, 20)
        context.fillStyle="red"
        context.fillRect(20, 75, 750, 50)
        context.fillStyle="black"
        context.fillText("RED DINO: HAS FIREBALLS WHICH RECHARGE HAS 1HP", 20, 100)
        context.fillStyle="green"
        context.fillRect(20, 175, 750, 50)
        context.fillStyle="black"
        context.fillText("GREEN DINO: HAS 6HP", 20, 200)
        context.fillStyle="aqua"
        context.fillRect(20, 275, 750, 50)
        context.fillStyle="black"
        context.fillText("SKY BLUE DINO: CAN DOUBLE JIMB AND DASH HAS 1HP", 20, 300)
        context.fillStyle="magenta"
        context.fillRect(165, 475, 425, 50)
        context.fillStyle="black"
        context.fillText("EVERY DINO COSTS 100 GOLD", 190, 500)
    }
        context.fillStyle="orange"
        context.fillRect(550, 20, 100, 50);
        context.fillStyle="blue"
        context.fillText("SHOP", 570, 55);
        
        context.fillStyle="brown"
        context.fillText("Controls",tutX+0, tutY+35 )
   
   
 for(ik=1; ik<=broiKaktusi; ik=ik+1) {
        context.fillStyle="green"
        context.fillRect(kaktusX[ik], kaktusY[ik], 30, 60)
    }
	    context.fillStyle="blue"
               
                if(type==0) {
                     if(tm>=1 && tm<=6) {
                    prom=dino
                }
                if(tm>=7 && tm<=13) {
                    prom=dino2
                }
                if(tm>=14 && tm<=20) {
                    prom=dino3
                }
                if(tm>=24) {
                    tm=1
                }
                if(health<=0) {
                   tm=undefined
                    prom=dino4
                }
                }
                
                 if(type==1) {
                     if(tm>=1 && tm<=6) {
                    prom=dinord
                }
                if(tm>=7 && tm<=13) {
                    prom=dinord2
                }
                if(tm>=14 && tm<=20) {
                    prom=dinord3
                }
                if(tm>=24) {
                    tm=1
                }
                if(health<=0) {
                   tm=undefined
                    prom=dinord4
                }
                }
                
                 if(type==2) {
                     if(tm>=1 && tm<=6) {
                    prom=dinogr
                }
                if(tm>=7 && tm<=13) {
                    prom=dinogr2
                }
                if(tm>=14 && tm<=20) {
                    prom=dinogr3
                }
                if(tm>=24) {
                    tm=1
                }
                if(health<=0) {
                   tm=undefined
                    prom=dinogr4
                }
                 }
                
                 if(type==3) {
                     if(tm>=1 && tm<=6) {
                    prom=dinobl
                }
                if(tm>=7 && tm<=13) {
                    prom=dinobl2
                }
                if(tm>=14 && tm<=20) {
                    prom=dinobl3
                }
                if(tm>=24) {
                    tm=1
                }
                if(health<=0) {
                   tm=undefined
                    prom=dinobl4
                }
                }
	    context.drawImage(prom, myX, myY, 30, 60);
        context.fillStyle="brown";
        context.fillRect(0, 550, 800, 50);
        
        context.fillStyle="green";
        context.fillRect(0, 550, 800, 4);
                
          for(iF=1; iF<broiBalls; iF=iF+1) {
              context.fillStyle="red"
              context.fillRect(fireBallX[broiBalls], fireBallY[broiBalls], 10, 10)
          }      
                }else{
        context.font = "bold 18pt Arial";
        context.fillStyle="yellow"
        context.fillRect(playX, playY, 100, 50)
        context.fillStyle="black"
        context.strokeRect(playX, playY, 100, 50)
        context.fillStyle="black"
        context.fillText("PLAY",playX+17, playY+30)
}
};
function keydown(key) {
        if(broiSkachaniq>0) {
            if(isKeyPressed[32]) {
                    dy=20
                    broiSkachaniq=broiSkachaniq-1
            }
        }
        if(isKeyPressed[68]) {
            if(type==3) {
                    dx=20
                    gold=gold+1
            }
            if(type==1) {
                if(tBalls>=5) {
                      broiBalls=broiBalls+1
                    tBalls=tBalls-5
                    for(iF=1; iF<=broiBalls; iF=iF+1)  {
                        fireBallX[broiBalls]=myX
                        fireBallY[broiBalls]=myY
                    }
                }
              
                
            }
        }
    
    }
 
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
        if(health==0) {
            if(key==82) {
                    tBalls=0
                    skorost=5
                    gold=gold+points
                    points=0
                    broiKaktusi=5
                    health=3
                    kaktusX=[]
                    kaktusY=[]
                    fireBallX=[]
                    fireBallY=[]
                    broiBalls=1
                    broiKaktusi=5
                    tm=1
                    prom=dino
                broiSkachaniq=1
                  if(type==1) {
                    health=1
                      broiSkachaniq=1
                }
                if(type==2) {
                    health=6
                    broiSkachaniq=1
                }
                if(type==3) {
                    health=1
                    broiSkachaniq=2
                }
            }
        }
    }
          
      


function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
     if(areColliding(mouseX, mouseY, 1, 1, playX, playY, 100, 50)) {
                isItGameOn=true
     }
    
    if(areColliding(mouseX, mouseY, 1, 1, 550, 20, 100, 50)) {
        if(isShopOn==false) {
                isShopOn=true  
        }else{
                isShopOn=false
        }
         
     }
    if(isShopOn==true) {
         if(areColliding(mouseX, mouseY, 1, 1, 20, 75, 750, 50)) {
            if(gold>=100) {
                gold=gold-100
                type=1
                health=1
                console.log(type)
              }        
        }
        
        if(areColliding(mouseX, mouseY, 1, 1, 20, 175, 425, 50)) {
            if(gold>=100) {
                gold=gold-100
                type=2
              }
            
            if(type==2) {
                health=6
             }
        }
        
          if(areColliding(mouseX, mouseY, 1, 1,20, 275, 750, 50)) {
              if(gold>=100) {
                gold=gold-100
                type=3
              }
              
             if(type==3) {
                health=1
             }
        }
    }
        if(areColliding(mouseX, mouseY, 1, 1, tutX, tutY, 100, 50)) {
            if(menuOn==false) {
                menuOn=true  
            }else{
                menuOn=false       
        }
      
    }
};
