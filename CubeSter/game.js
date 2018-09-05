// Creating variables
var platformaX=[], platformaY=[]
var broqch=0
var broiPlatformi=6
var platformaGoleminaX=[]
	platformaGoleminaX[0]=Math.random()*100+100;
	platformaGoleminaX[1]=Math.random()*100+100;
	platformaGoleminaX[2]=Math.random()*100+100;
	platformaGoleminaX[3]=Math.random()*100+100;
	platformaGoleminaX[4]=Math.random()*100+100;
	platformaGoleminaX[5]=Math.random()*100+80;


var patronX=800; patronY=600;

var skorost=0

var vragX=0;
var vragY=0;

var points=0;

var healthX=[]
var healthY=[]

var health=3
var broiJivoti=3
var broqchNaJivoti=0


 healthX[0] = 650;
 healthY[0] = 10;

healthX[1] = 650;
 healthY[1] = 10;

healthX[2] = 650;
 healthY[2] = 10;

var mishkaPoMalkoOt400=true

myY=100
myX=385
platformaX[0]=Math.random()*700;	    platformaY[0]=600;	
platformaX[1]=Math.random()*700;		platformaY[1]=700;
platformaX[2]=Math.random()*700;		platformaY[2]=800;
platformaX[3]=Math.random()*700;		platformaY[3]=900;
platformaX[4]=Math.random()*700;		platformaY[4]=1000;
platformaX[5]=Math.random()*700+20;		platformaY[5]=1100;

var background1=new Image()
background1.src="background1.jpg"

var zaekdqsno=new Image()
zaekdqsno.src="zaekdqsno.jpg"

var zaeklqvo=new Image()
zaeklqvo.src="zaeklqvo.jpg"

var lovecdqsno=new Image()
lovecdqsno.src="lovecdqsno.jpg"

var loveclqvo=new Image()
loveclqvo.src="loveclqvo.jpg"

var surce1=new Image()
surce1.src="surce1.jpg"

var patrondqsno2=new Image()
patrondqsno2.src="patrondqsno2.jpg"

function update() {
	patronX=patronX+15
	

	
	
	
	if(health!=0) {
		 
		
		if(patronX<-1500 || patronX>1500) {
			if(isKeyPressed[39] || isKeyPressed[37]) {
				patronX=vragX
				patronY=myY
			}
			
			
		} 
		
			  
		
		if(vragY>600) {
		vragY=-600
	}
		
		
	

	if(myY>600) {
		myY=-100
		health=health-1
	}
	
	
	
		if(myX>755) {
			myX=755
		}
		
		if(myX<5) {
			myX=5
		}
		
		
		
	
	
			
	
vragX = vragX+(mouseX-vragX)/70;
	vragY=vragY+3	
		
		if(skorost==3) {
			skorost=2.9
		}
	
		
   myY=myY+3
   			if(isKeyPressed[68]) {
	   myX=myX+5
   			}
	
	
	 			if(isKeyPressed[65]) {
					myX=myX-5
   	  
		}
		for(broqch=0; broqch<broiPlatformi; broqch=broqch+1){
			platformaY[broqch]=platformaY[broqch]-1
			
			if(areColliding(myX, myY, 60, 60, platformaX[broqch], platformaY[broqch], platformaGoleminaX[broqch]+20, 1)){
	   		myY=platformaY[broqch]-60
			if(isKeyPressed[32]){
		myY=myY-100}
				
				
				
				if(isKeyPressed[83]){
		myY=myY+31}
	   }
				if(platformaY[broqch]<=-20) {
					
					skorost=skorost+0.1
					platformaX[broqch]=Math.random()*700+20;
					platformaY[broqch]=700;
				}
			
			if(areColliding(myX, myY, 60, 60, platformaX[5], platformaY[5], platformaGoleminaX[5]+20, 1)){
	   		myY=999999999
			
			
	   }
			
			if(areColliding(myX, myY, 60, 60, patronX, patronY, 15, 5)){
	   		myY=999999999
			
			
	   }
			
			
			
			
			
		}
	
	
	
	for(broqch=0; broqch<broiPlatformi; broqch=broqch+1){
			platformaY[broqch]=platformaY[broqch]-2
			
				if(platformaY[5]<=-20) {
					
					for(platformaY[5]=-700; platformaY[5]<=-20; platformaY[5]=platformaY[5]-1) {
						platformaX[broqch]=Math.random()*700+20;
					
					platformaGoleminaX[broqch]=Math.random()*200+30;
					platformaY[5]=700;
				}
					
					
				}
			
			
			
			
			
		}
	
	
		for(broqch=0; broqch<broiPlatformi; broqch=broqch+1){
			platformaY[broqch]=platformaY[broqch]-2
			
			if(areColliding(vragX, vragY, 100, 100, platformaX[broqch], platformaY[broqch], platformaGoleminaX[broqch]+20, 1)){
	   		vragY=platformaY[broqch]-100
	   }
				if(platformaY[broqch]<=-20) {
					
					
					platformaX[broqch]=Math.random()*700+20;
					platformaY[broqch]=700;
				}
			
			
			
			
		}
	
	
	
	
	if(areColliding(vragX, vragY, 100, 100, platformaX[5], platformaY[5], platformaGoleminaX[5]+20, 1)){
	   	vragY=platformaY[5]-100
	   }
	
	
	
	
	if(platformaY[5]<=-15) {
					points=points+1
					console.log("points", points)
					
				}
	
	
	
	
	}
	
	
}

function draw() {
	
	
	
	
	context.drawImage(background1, 0, 0, 800, 600);
	
	
	context.drawImage(patrondqsno2, patronX, patronY, 15, 5);
	
	
	context.fillStyle="#74f04e"
	context.fillRect(795, 0, 20, 600);
	context.fillRect(0, 0, 5, 600);
	

	
 if(mouseX<=400) {
	 context.drawImage(loveclqvo,vragX, vragY, 100, 100);
	 
 }
	
	context.drawImage(lovecdqsno, vragX, vragY, 100, 100);
	
	
   
	 context.drawImage(zaekdqsno,myX, myY, 60, 60);
	if(isKeyPressed[65]) {
		 context.drawImage(zaeklqvo,myX, myY, 60, 60);
	}
	
	for(broqch=0; broqch<broiPlatformi; broqch=broqch+1) {
		context.fillStyle="blue"
		context.fillRect(platformaX[broqch], platformaY[broqch], platformaGoleminaX[broqch]+23, 30);
		
	}
	context.fillStyle="red"
		context.fillRect(platformaX[5], platformaY[5], platformaGoleminaX[5]+23, 30)
		
		
		
	
	if(health>2) {context.drawImage(surce1, healthX[0], healthY[0], 40, 30);}
	if(health>1) {context.drawImage(surce1, healthX[1]+50, healthY[1], 40, 30);}
	if(health>0){context.drawImage(surce1, healthX[2]+100, healthY[2], 40, 30);}
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
	
	

};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
