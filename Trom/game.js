// Creating variables
var myX = 300, myY = 400;
var mySpeedX=5, mySpeedY=0;
var sledaX=[], sledaY=[];
var kolkoSlediImame=0
var isGameOver=false;

var negoX=300, negoY=200
var negoSpeedX=5, negoSpeedY=0;
var negoSledaX=[], negoSledaY=[];
var kolkoSlediImaToi=0;
function update() {
  if(!isGameOver) {
	  
	  
	  sledaX[kolkoSlediImame] = myX;
	    sledaY[kolkoSlediImame] = myY;
	  kolkoSlediImame=kolkoSlediImame+1;
	  myX=myX+mySpeedX;
	    myY=myY+mySpeedY;
	  
	  
	  //Nakude se dvija.
	  if(isKeyPressed[38] && mySpeedY!=-5) {
		  mySpeedX=0
		  mySpeedY=-5
	  }
	  
	  if(isKeyPressed[39] && mySpeedX!=5) {
		  mySpeedX=5
		  mySpeedY=0
	  }
	  
	  if(isKeyPressed[40] && mySpeedY!=5) {
		  mySpeedX=0
		  mySpeedY=+5
	  }
	  
	  if(isKeyPressed[37] && mySpeedX!=-5) {
		  mySpeedX=-5
		  mySpeedY=0
	  }
	  
	  /*
	   //zabavqne
	  if(isKeyPressed[16]) {
		  mySpeedX=mySpeedX-0.1
		
	  }else{
		  mySpeedX=5
		  mySpeedY=0
	  }
	  
	  //anti zabavqne
	  if(mySpeedX<2) {
		  mySpeedX=mySpeedX+0.6
	  }
	  
	  //zastoqvane na skorost
	   if(mySpeedX>5) {
		  mySpeedX=5
	  }
	  */
	 
	  
	  
	   negoSledaX[kolkoSlediImaToi] = negoX;
	    negoSledaY[kolkoSlediImaToi] = negoY;
	  kolkoSlediImaToi=kolkoSlediImaToi+1;
	  negoX=negoX+negoSpeedX;
	    negoY=negoY+negoSpeedY;
	  
	  //Nakude se dviji supernika.
	  if(isKeyPressed[87] && negoSpeedX!=-5) {
		  negoSpeedX=0
		  negoSpeedY=-5
	  }
	  
	  if(isKeyPressed[68] && negoSpeedX!=5) {
		  negoSpeedX=+5
		  negoSpeedY=0
	  }
	  
	  if(isKeyPressed[83] && negoSpeedY!=5) {
		  negoSpeedX=0
		  negoSpeedY=+5
	  }
	  
	  if(isKeyPressed[65] && negoSpeedX!=-5) {
		  negoSpeedX=-5
		  negoSpeedY=0
	  }
	  
	  
	  
	 /* //zabavqne na supernika.
	  if(isKeyPressed[81]) {
		  negoSpeedX=negoSpeedX-0.1
		
	  }else{
		  negoSpeedX=5
		  negoSpeedY=0
	  }
	  
FFGHY	  //anti zabavqne na supernika.
	  if(negoSpeedX<2) {
		  negoSpeedX=negoSpeedX+1
	  }
	  
	  //zastoqvane na skorost na supernika.
	   if(mySpeedX>5) {
		  mySpeedX=5
	  }
	  */
	  
	  
	  //Game over????
	  if(isKeyPressed[32]) {
		isGameOver=true
	  }
	  
	  //Blusnahli se v chertata si.
	  for(var br =0; br<kolkoSlediImame; br++) {
		  if(myX==sledaX[br] && myY==sledaY[br]) {
			 isGameOver=true
			 	 console.log("Blue win")
		  }
	  }
	  
	  //Blusnal li se e v sebe si.
	   for(var negoBr =0; negoBr<kolkoSlediImaToi; negoBr++) {
		  if(negoX == negoSledaX[negoBr] && negoY == negoSledaY[negoBr] || negoX>795 ||negoY>595 ||negoY<5 || negoX<5) {
			 isGameOver=true
			 	 console.log("red win")
		  }
	  }
		 
	  //Blusnah li se v nego.
		 for(var negoBr=0; negoBr<kolkoSlediImaToi; negoBr++) {
			
			 if(myX==negoSledaX[negoBr] && myY==negoSledaY[negoBr] || myX>795 ||myY>595 ||myY<5 || myX<5) {
				 console.log("Blue win!")
				 isGameOver=true
			 }
		 }
	  
	  
	  		//Blusnal li se e v men.
	  		for(var br=0; br<kolkoSlediImame; br++) {
			
			 if(negoX==sledaX[br] && negoY== sledaY[br]) {
				 console.log("Red win!")
				 isGameOver=true
			 }
		 }
	    
	  		//Ako se blusnat.
	  		if(myX==negoX && myY==negoY) {
				console.log("Draw!")
			}
	  
	  
	  
	  
  }
}

function draw() {
    // This is how you draw a rectangle
				 context.fillStyle="grey"
				 context.fillRect(0, 0, 5, 600);
				 context.fillRect(0, 595, 800, 5);
				 context.fillRect(795, 0, 5, 600);
				 context.fillRect(0, 0, 800, 5);
					
				 context.fillStyle="#241111"
				 context.fillRect(5, 5, 790, 590);
				 
	//Risuvam uglite tuk.
	for(var br=0; br<kolkoSlediImame; br++) {
			 if(negoX==sledaX[br] && negoY== sledaY[br] || negoX>795 ||negoY>595 ||negoY<5 || negoX<5 ) {
				 context.fillStyle="red"
				 context.fillRect(0, 0, 5, 600);
				 context.fillRect(0, 595, 800, 5);
				 context.fillRect(795, 0, 5, 600);
				 context.fillRect(0, 0, 800, 5);
				 isGameOver=true
			 }
		
		 }
	
	 for(var negoBr=0; negoBr<kolkoSlediImaToi; negoBr++) {
			
			 if(myX==negoSledaX[negoBr] && myY==negoSledaY[negoBr] || myX>795 ||myY>595 ||myY<5 || myX<5) {
			context.fillStyle="blue"
				 context.fillRect(0, 0, 5, 600);
				 context.fillRect(0, 595, 800, 5);
				 context.fillRect(795, 0, 5, 600);
				 context.fillRect(0, 0, 800, 5);
				 isGameOver=true
			 }
		 }
	
	 for(var negoBr =0; negoBr<kolkoSlediImaToi; negoBr++) {
		  if(negoX == negoSledaX[negoBr] && negoY == negoSledaY[negoBr]) {
			 	context.fillStyle="red"
			 	context.fillRect(0, 0, 5, 600);
				 context.fillRect(0, 595, 800, 5);
				 context.fillRect(795, 0, 5, 600);
				 context.fillRect(0, 0, 800, 5);
			  isGameOver=true
		  }
	  }
	
	 for(var br =0; br<kolkoSlediImame; br++) {
		  if(myX==sledaX[br] && myY==sledaY[br]) {
			 context.fillStyle="blue"
			 	context.fillRect(0, 0, 5, 600);
				 context.fillRect(0, 595, 800, 5);
				 context.fillRect(795, 0, 5, 600);
				 context.fillRect(0, 0, 800, 5);
		  }
	  }
	  
	
	
	
	context.fillStyle="#0a2ded"
    context.fillRect(myX, myY, 5, 5);
	context.fillStyle="#ff1400"
	

	//Sledite mi se risuvat tuk.
	for(var br=0; br<kolkoSlediImame; br++) {
		 context.fillRect(sledaX[br], sledaY[br], 5, 5);
	}
	
	
	//Toi se risuva tuk.
		context.fillStyle="#267ee5"
	 context.fillRect(negoX, negoY, 5, 5);
	
	
	//Sledite na supernika se risuvat tuk.
	for(var negoBr=0; negoBr<kolkoSlediImaToi; negoBr++) {
		 context.fillRect(negoSledaX[negoBr], negoSledaY[negoBr], 5, 5);
	}
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
