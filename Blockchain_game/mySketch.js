var mgr;

function preload(){
		user = loadImage('src/user.png');
		redBlock = loadImage('src/red.png');
		yellowBlock = loadImage('src/yellow.png');
		blueBlock = loadImage('src/blue.png');
		greenBlock = loadImage('src/green.png');
	  faceDownCard = loadImage("src/Back_star.png")
}

function setup()
{
    createCanvas(window.innerWidth, window.innerHeight);

    mgr = new SceneManager();

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
	  mgr.addScene ( Block0 );
    mgr.addScene ( Block1 );
    mgr.addScene ( Block2 );
    mgr.addScene ( Block3 );
    mgr.addScene ( Block4 );
    mgr.addScene ( Block5 );
    mgr.addScene ( Block6_1 );
    mgr.addScene ( Block6_2 );
    mgr.addScene ( Block7_1 );
    mgr.addScene ( Block7_2 );
	  mgr.addScene ( Block8 );

    mgr.showNextScene();

}

function draw()
{
	background("#fbe39e");
    mgr.draw();
}
function mouseClicked(){
	  mgr.handleEvent("mouseClicked");
}
function mousePressed()
{
    mgr.handleEvent("mousePressed");
}
function keyPressed()
{
    // You can optionaly handle the key press at global level...
    // switch(key)
    // {
  	// 		case '0':
    //         mgr.showScene( Block0 );
    //         break;
    //     case '1':
    //         mgr.showScene( Block1 );
    //         break;
    //     case '2':
    //         mgr.showScene( Block2 );
    //         break;
    //     case '3':
    //         mgr.showScene( Block3 );
    //         break;
		// 		case '4':
    //         mgr.showScene( Block4 );
    //         break;
		// 		case '5':
    //         mgr.showScene( Block5 );
    //         break;
		// 		case '6':
    //         mgr.showScene( Block6_1 );
    //         break;
		// 		case '7':
    //         mgr.showScene( Block6_2 );
    //         break;
		// 		case '8':
    //         mgr.showScene( Block7_1 );
    //         break;
		// 		case '9':
    //         mgr.showScene( Block7_2 );
    //         break;
		// 	case 'q':
		// 		mgr.showScene(Block8);
		// 		break;
    // }

    // ... then dispatch via the SceneManager.
    mgr.handleEvent("keyPressed");
}

class Card {
  constructor(x, y, faceUpImage){
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
    this.faceUpImage = faceUpImage
    this.faceDownImage = faceDownCard
    this.isFaceUp = false
  }

  render(){
    fill(255, 255, 255)
    // stroke(0, 0, 0)
    // strokeWeight(4)
    rect(this.x, this.y, this.width, this.height, 20)

    this.isFaceUp ? image(this.faceUpImage, this.x, this.y, this.width, this.height) : image(this.faceDownImage, this.x + 40, this.y + 40, 40, 40)

  }
  setIsFaceUp (isFaceUp){
    this.isFaceUp = isFaceUp
  }
  isUnderMouse(x, y){
    return x >= this.x && x < this.x + this.width &&
          y >= this.y && y < this.y + this.height
  }
}

// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

function Block0()
{
	let game = round(random(0,1));
	// console.log(game);
	let ppts = [];
	let counter = 0;
	let	button = createButton('NEXT >>');
	let a;
	let controlppt;
	if (game == 1){
  	a = createA('https://docs.google.com/forms/d/1gLLPqJnCHwlx38z6u1mmiZ1DWN3IVaOPc7XH6EaCCmI','link','_blank');
	}else{
		a = createA('https://docs.google.com/forms/d/1UjaswEVrmla6J8FyDxOL8hMqP8XVYSimIUu8ngOBfoo','link','_blank');
		controlppt = loadImage("src/Assignment.jpg");
	}
	a.hide();

	this.nextPPT = function(){
		if (counter==19){
      mgr.showScene( Block1 );
			imageMode(CORNER);
			button.hide();
		}else if (counter ==0){
			if (game ==0){
				button.hide();
			}
			a.show();
      a.style("font-size",'50px')
      a.position(window.innerWidth/2,window.innerHeight/2);
      counter++;
    }else if (counter ==1){
      a.hide();
      counter++;
    }else{
			counter++;
		}
		// console.log(counter);
	}
  this.cursor=function(){
    cursor('pointer');
  }
	this.setup=function(){
		textFont('Times New Roman')
		for (let i=1; i<10; i++){
			ppts[i-1] = loadImage("src/part1-0"+i+".jpg");
		}
		for (let i=10; i<21; i++){
			ppts[i-1] = loadImage("src/part1-"+i+".jpg");
		}
		imageMode(CENTER);
    button.style('background-color',"#04AA6D");
    button.style('color',"white");
    button.style('padding','15px 30px');
    button.style('font-size','20px');
		button.position(window.innerWidth*8/9, window.innerHeight*8/9);
    // button.mouseOver(this.cursor);
    button.mousePressed(this.nextPPT);
	}

	this.draw=function(){
		imageMode(CENTER);
		if ((counter ==1) && (game ==0)){
			image(controlppt,width/2,height/2,height*3000/1688,height);
		}else{
			image(ppts[counter],width/2,height/2,height*3000/1688,height);
		}
	}
}

function Block8()
{
	let ppts = [];
  let counter = 0;
  let	button = createButton('NEXT >>');
	button.hide();
  let a = createA('https://docs.google.com/forms/d/1qt_hIo0TmFL2ECr4_W41jHOBq3B9LbNpnoRPUi1mtrs','link','_blank');
	a.hide()

  this.nextPPT = function(){
    if (counter ==2){
			a.show();
      a.style("font-size",'50px')
      a.position(window.innerWidth/2,window.innerHeight/2);
      button.hide();
    }
    counter++;
  }
	this.setup=function(){
		button.show();
		imageMode(CENTER);
    for (let i=1; i<5; i++){
      ppts[i-1] = loadImage("src/part3-0"+i+".jpg");
    }
    button.style('background-color',"#04AA6D");
    button.style('color',"white");
    button.style('padding','15px 30px');
    button.style('font-size','20px');
		button.position(window.innerWidth*8/9, window.innerHeight*8/9);
    button.mousePressed(this.nextPPT);
  }
	this.draw=function(){
		imageMode(CENTER);
		image(ppts[counter],width/2,height/2,height*3000/1688,height);
	}
}


// =============================================================
// =                         BLOCK 1                      =
// =============================================================
function Block1()
{
		let coin;
		let played = false;
		let faceDownCard = [];
		let deck = [];
		let cards = [];
		let flippedCards = [];
		let cooldown = null;
		let timer = 0;
		let matches = false;

		const rows = 1;
		const columns = 4;

		faceUpCards= [
			loadImage("src/Card.png"),
			loadImage("src/Card-1.png"),
			// loadImage("src/Card-2.png")
		];

    this.setup = function()
    {
				coin = createAudio('src/coin.mp3');
				coin.loop=false;
				button = createButton('Gotcha');
				button.hide();
				for(let i = 0; i < faceUpCards.length; i++){
					deck.push(faceUpCards[i]);
					deck.push(faceUpCards[i]); //We want 2 cards.. so we duplicate
				}

				//shuffle cards
				deck.sort(function(){
					return 0.5 - random();
				})

				for(let i=0; i < columns; i++){
					for(let j=0; j < rows; j++){
						//image
						let card = new Card(
							150 + i * 120 + 20,
							200 + j * 120 + 20,
							deck.pop()
						);
						cards.push(card);
					}
				}
			// console.log(cards);
			}

	this.draw = function(){
  // console.log(frameRate())
	imageMode(CORNER);

	background("#fbe39e");
		textSize(22);
		image(blueBlock, 80,50,70,70);
		fill(0);
		text("1",105,100);
		text("User",50,250);
		image(user,30,270,90,100);
		text("NPC 1",1300,50);
		image(user,1250,30,50,60);
		text("NPC 2",1300,150);
		image(user,1250,130,50,60);
		text("NPC 3",1300,250);
		image(user,1250,230,50,60);

		noFill();
		rect(150,200,1000,300);
		fill("teal");
		text("You are mining: Block 1",30,30);

		if(cooldown && frameCount - cooldown > 30){
			for(let i = 0; i < cards.length; i++)
			{
				if(!cards[i].isMatch && cards[i].isFaceUp){
					 cards[i].setIsFaceUp(false)
				}
			}

			// remettre la liste de cartes flipped
			flippedCards = []
			cooldown = null
		}
		for(let i = 0; i < cards.length; i++){
    	cards[i].render()
		}

		matches = true
		for(let i = 0; i < cards.length; i++)
		{
			matches = matches && cards[i].isMatch
		}
		if(matches) {
			if (!played){
				coin.play();
				played = !played;
			}
			textSize(18);
			fill(255, 0, 0)
			text("You solved the puzzle!", 170, 190)
			fill(0);
			text("You are the first one to solve this problem. 50 bitcoins are given to you as reward.", 170,520);
			text("You can pack all the transactions up and store it in the block.", 170,550);
			text("Now move to the next block!", 170,580);
			fill(255, 0, 0)
			text("+50",60,400);
			text("0",1230,70);
			text("0",1230,170);
			text("0",1230,270);

			fill(0);
			text("User",95,135);
			button.style('background-color',"#04AA6D");
      button.style('color',"white");
      button.style('padding','15px 30px');
      button.style('font-size','20px');
      button.show();
      button.position(1100 , 570 );
		}	else{
			textSize(18);
			fill(255, 0, 0)
			text("Nail the memory game to mine the block! Start by clicking on the cards below~",170,190);
		}
		if (frameCount%60==0 && !matches){
			timer++;
		}
		fill(255,0,0);
		text(timer+" s",1125,190);
	}
	// this.keyPressed = function(){
	// 	if (keyCode == ENTER){
	// 		// console.log("ENTER");
	// 		for(let i = 0; i < cards.length; i++)
	// 		{
	// 			cards[i].isMatch = true;
	// 		}
	// 	}
	// }
	this.mousePressed = function(){
			if(mouseX  >= 1100 && mouseX  < 1100 + 115 && mouseY  >= 550  && mouseY  < 550 + 50 && matches){
				button.hide();
				this.sceneManager.showNextScene();
			}
  for(let i=0; i < cards.length; i++){
    if(cards[i].isUnderMouse(mouseX , mouseY )){
      // click sur la carte
      if(flippedCards.length < 2 && !cards[i].isFaceUp) {
        // retournement de la carte
        cards[i].setIsFaceUp(true)
        flippedCards.push(cards[i])

        // verifier si les cartes sont similaire
        if(flippedCards.length === 2){
					// console.log("flippedCards.length===2")
          if(flippedCards[0].faceUpImage === flippedCards[1].faceUpImage){
            flippedCards[0].isMatch = true
            flippedCards[1].isMatch = true
          }
          cooldown = frameCount
        }
      }
    }
  }
}
}

// =============================================================
// =                         BLOCK 2                      =
// =============================================================
function Block2()
{
		let coin;
let played = false;
let faceUpCards = [];
		let faceDownCard = [];
		let deck = [];
		let cards = [];
		let flippedCards = [];
		let cooldown = null;
		let timer = 0;
		let matches = false;

    const rows = 1;
		const columns = 6;

		faceUpCards= [
			loadImage("src/Card.png"),
			loadImage("src/Card-1.png"),
			loadImage("src/Card-2.png")
		];

   this.setup = function()
    {

				coin = createAudio('src/coin.mp3');
coin.loop=false;
button = createButton('Gotcha');
				button.hide();
				for(let i = 0; i < faceUpCards.length; i++){
					deck.push(faceUpCards[i]);
					deck.push(faceUpCards[i]); //We want 2 cards.. so we duplicate
				}

				//shuffle cards
				deck.sort(function(){
					return 0.5 - random();
				})

				for(let i=0; i < columns; i++){
					for(let j=0; j < rows; j++){
						//image
						let card = new Card(
							150 + i * 120 + 20,
							200 + j * 120 + 20,
							deck.pop()
						);
						cards.push(card);
					}
				}
			// console.log(cards);
			}

	this.draw = function(){
	background("#fbe39e");


		//Upper GUI showing the blockchain
		textSize(22);
		fill("teal");
		text("You are mining: Block 2",30,30);
		image(blueBlock, 80,50,70,70);
		strokeWeight(3);
		line(150,85,200,85);
		image(blueBlock, 200,50,70,70);
		fill(0);
		strokeWeight(1);
		text("1",105,100);
		text("2",225,100);
		textSize(18);
		text("User",95,135);

		//Left and right side GUI showing user & NPCs
		textSize(22);
		text("User",50,250);
		image(user,30,270,90,100);
		text("NPC 1",1300,50);
		image(user,1250,30,50,60);
		text("NPC 2",1300,150);
		image(user,1250,130,50,60);
		text("NPC 3",1300,250);
		image(user,1250,230,50,60);
		fill(255,0,0);
		textSize(18);
		text("50",60,400);
		text("0",1230,70);
		text("0",1230,170);
		text("0",1230,270);

		noFill();
		rect(150,200,1000,300);

		if(cooldown && frameCount - cooldown > 30){
			for(let i = 0; i < cards.length; i++)
			{
				if(!cards[i].isMatch && cards[i].isFaceUp){
					 cards[i].setIsFaceUp(false)
				}
			}

			// remettre la liste de cartes flipped
			flippedCards = []
			cooldown = null
		}
		for(let i = 0; i < cards.length; i++){
    	cards[i].render()
		}

		matches = true
		for(let i = 0; i < cards.length; i++)
		{
			matches = matches && cards[i].isMatch
		}
		if(matches) {
  if (!played){
    coin.play();
    played = !played;
  }
			//code
			textSize(18);
			fill(255, 0, 0)
			text("You solved the puzzle!", 170, 190)
			fill(0)
			text("Unfortunately, NPC 2 is faster than you. He got 25 bitcoins.", 170,520);
			text("The memory game you are playing now simulates the hash function of the blocks: Each block is encrypted based on the previous block.", 170,550);
			text("Now move to the next block!", 170,580);
			fill(255, 0, 0)
			text("50",60,400);
			text("0",1230,70);
			text("+25",1220,195);
			text("0",1230,270);

			fill(0);
			text("NPC 2",205,135);
			button.style('background-color',"#04AA6D");
button.style('color',"white");
button.style('padding','15px 30px');
button.style('font-size','20px');;
			button.show();
button.position(1100 , 570 );
		}	else{
			fill(255, 0, 0)
			text("Nail the memory game to mine the block!",170,190);
		}
		if (frameCount%60==0 && !matches){
			timer++;
		}
		fill(255,0,0);
		text(timer+" s",1125,190);
	}
	// this.keyPressed = function(){
	// 	if (keyCode == ENTER){
	// 		// console.log("ENTER");
	// 		for(let i = 0; i < cards.length; i++)
	// 		{
	// 			cards[i].isMatch = true;
	// 		}
	// 	}
	// }
	this.mousePressed = function(){
			if(mouseX  >= 1100 && mouseX  < 1100 + 115 && mouseY  >= 550  && mouseY  < 550 + 50 && matches){
				button.hide();
				this.sceneManager.showNextScene();
			}
  for(let i=0; i < cards.length; i++){
    if(cards[i].isUnderMouse(mouseX , mouseY )){
      // click sur la carte
      if(flippedCards.length < 2 && !cards[i].isFaceUp) {
        // retournement de la carte
        cards[i].setIsFaceUp(true)
        flippedCards.push(cards[i])

        // verifier si les cartes sont similaire
        if(flippedCards.length === 2){
					// console.log("flippedCards.length===2")
          if(flippedCards[0].faceUpImage === flippedCards[1].faceUpImage){
            flippedCards[0].isMatch = true
            flippedCards[1].isMatch = true
          }
          cooldown = frameCount
        }
      }
    }
  }
}
}


function Block3( )
{
		let coin;
let played = false;
let faceUpCards = [];
		let faceDownCard = [];
		let deck = [];
		let cards = [];
		let flippedCards = [];
		let cooldown = null;
		let timer = 0;
		let matches = false;

    const rows = 1;
		const columns = 8;

		faceUpCards= [
			loadImage("src/Card.png"),
			loadImage("src/Card-1.png"),
			loadImage("src/Card-2.png"),
			loadImage("src/Card-3.png")
		];

   this.setup = function()
    {
				coin = createAudio('src/coin.mp3');
coin.loop=false;
button = createButton('Gotcha');
				button.hide();
				for(let i = 0; i < faceUpCards.length; i++){
					deck.push(faceUpCards[i]);
					deck.push(faceUpCards[i]); //We want 2 cards.. so we duplicate
				}

				//shuffle cards
				deck.sort(function(){
					return 0.5 - random();
				})

				for(let i=0; i < columns; i++){
					for(let j=0; j < rows; j++){
						//image
						let card = new Card(
							150 + i * 120 + 20,
							200 + j * 120 + 20,
							deck.pop()
						);
						cards.push(card);
					}
				}
			// console.log(cards);
			}

	this.draw = function(){
	background("#fbe39e");


		//Upper GUI showing the blockchain
		textSize(22);
		fill("teal");
		text("You are mining: Block 3",30,30);
		image(blueBlock, 80,50,70,70);
		strokeWeight(3);
		line(150,85,200,85);
		image(blueBlock, 200,50,70,70);
		line(270,85,320,85);
		image(blueBlock, 320,50,70,70);

		fill(0);
		strokeWeight(1);
		text("1",105,100);
		text("2",225,100);
		text("3",345,100);
		textSize(18);
		text("User",95,135);
		text("NPC 2",205,135);

		//Left and right side GUI showing user & NPCs
		textSize(22);
		text("User",50,250);
		image(user,30,270,90,100);
		text("NPC 1",1300,50);
		image(user,1250,30,50,60);
		text("NPC 2",1300,150);
		image(user,1250,130,50,60);
		text("NPC 3",1300,250);
		image(user,1250,230,50,60);
		fill(255,0,0);
		textSize(18);
		text("50",60,400);
		text("0",1230,70);
		text("25",1230,170);
		text("0",1230,270);

		noFill();
		rect(150,200,1000,300);

		if(cooldown && frameCount - cooldown > 30){
			for(let i = 0; i < cards.length; i++)
			{
				if(!cards[i].isMatch && cards[i].isFaceUp){
					 cards[i].setIsFaceUp(false)
				}
			}

			// remettre la liste de cartes flipped
			flippedCards = []
			cooldown = null
		}
		for(let i = 0; i < cards.length; i++){
    	cards[i].render()
		}

		matches = true
		for(let i = 0; i < cards.length; i++)
		{
			matches = matches && cards[i].isMatch
		}
		if(matches) {
  if (!played){
    coin.play();
    played = !played;
  }
			//code
			textSize(18);
			fill(0)
			text("Unfortunately, NPC 3 is faster than you. He got 25 bitcoins.", 170,520);
			text("Have you noticed that the bitcoin reward has decreased? It is true: The reward drops when more blocks are mined in the chain.", 170,550);
			text("Now move to the next block!", 170,580);
			fill(255, 0, 0)
			text("You solved the puzzle!", 170, 190)
			text("50",60,400);
			text("0",1230,70);
			text("25",1230,170);
			text("0",1230,270);
			text("+25",1220,295);

			fill(0);
			text("NPC 3",325,135);
			button.style('background-color',"#04AA6D");
button.style('color',"white");
button.style('padding','15px 30px');
button.style('font-size','20px');;
			button.show();
button.position(1100 , 570 );
		}	else{
			fill(255, 0, 0)
			text("Nail the memory game to mine the block!",170,190);
		}
		if (frameCount%60==0 && !matches){
			timer++;
		}
		fill(255,0,0);
		text(timer+" s",1125,190);
	}
	// this.keyPressed = function(){
	// 	if (keyCode == ENTER){
	// 		// console.log("ENTER");
	// 		for(let i = 0; i < cards.length; i++)
	// 		{
	// 			cards[i].isMatch = true;
	// 		}
	// 	}
	// }
	this.mousePressed = function(){
			if(mouseX  >= 1100 && mouseX  < 1100 + 115 && mouseY  >= 550  && mouseY  < 550 + 50 && matches){
				button.hide();
				this.sceneManager.showNextScene();
			}
  for(let i=0; i < cards.length; i++){
    if(cards[i].isUnderMouse(mouseX , mouseY )){
      // click sur la carte
      if(flippedCards.length < 2 && !cards[i].isFaceUp) {
        // retournement de la carte
        cards[i].setIsFaceUp(true)
        flippedCards.push(cards[i])

        // verifier si les cartes sont similaire
        if(flippedCards.length === 2){
					// console.log("flippedCards.length===2")
          if(flippedCards[0].faceUpImage === flippedCards[1].faceUpImage){
            flippedCards[0].isMatch = true
            flippedCards[1].isMatch = true
          }
          cooldown = frameCount
        }
      }
    }
  }
}
}

function Block4( )
{
	let coin;
let played = false;
let faceUpCards = [];
		let faceDownCard = [];
		let deck = [];
		let cards = [];
		let flippedCards = [];
		let cooldown = null;
		let timer = 0;
		let matches = false;

    const rows = 2;
		const columns = 5;

		faceUpCards= [
			loadImage("src/Card.png"),
			loadImage("src/Card-1.png"),
			loadImage("src/Card-2.png"),
			loadImage("src/Card-3.png"),
			loadImage("src/Card-4.png")
		];

   this.setup = function()
    {
				coin = createAudio('src/coin.mp3');
coin.loop=false;
button = createButton('Gotcha');
				button.hide();
				for(let i = 0; i < faceUpCards.length; i++){
					deck.push(faceUpCards[i]);
					deck.push(faceUpCards[i]); //We want 2 cards.. so we duplicate
				}

				//shuffle cards
				deck.sort(function(){
					return 0.5 - random();
				})

				for(let i=0; i < columns; i++){
					for(let j=0; j < rows; j++){
						//image
						let card = new Card(
							150 + i * 120 + 20,
							200 + j * 120 + 20,
							deck.pop()
						);
						cards.push(card);
					}
				}
			// console.log(cards);
			}

	this.draw = function(){
	background("#fbe39e");


		//Upper GUI showing the blockchain
		textSize(22);
		fill("teal");
		text("You are mining: Block 4",30,30);
		image(blueBlock, 80,50,70,70);
		strokeWeight(3);
		line(150,85,200,85);
		image(blueBlock, 200,50,70,70);
		line(270,85,320,85);
		image(blueBlock, 320,50,70,70);
		line(390,85,440,85);
		image(blueBlock, 440,50,70,70);

		fill(0);
		strokeWeight(1);
		text("1",105,100);
		text("2",225,100);
		text("3",345,100);
		text("4",465,100);
		textSize(18);
		text("User",95,135);
		text("NPC 2",205,135);
		text("NPC 3",325,135);

		//Left and right side GUI showing user & NPCs
		textSize(22);
		text("User",50,250);
		image(user,30,270,90,100);
		text("NPC 1",1300,50);
		image(user,1250,30,50,60);
		text("NPC 2",1300,150);
		image(user,1250,130,50,60);
		text("NPC 3",1300,250);
		image(user,1250,230,50,60);
		fill(255,0,0);
		textSize(18);
		text("50",60,400);
		text("0",1230,70);
		text("25",1230,170);
		text("25",1230,270);

		noFill();
		rect(150,200,1000,300);

		if(cooldown && frameCount - cooldown > 30){
			for(let i = 0; i < cards.length; i++)
			{
				if(!cards[i].isMatch && cards[i].isFaceUp){
					 cards[i].setIsFaceUp(false)
				}
			}

			// remettre la liste de cartes flipped
			flippedCards = []
			cooldown = null
		}
		for(let i = 0; i < cards.length; i++){
    	cards[i].render()
		}

		matches = true
		for(let i = 0; i < cards.length; i++)
		{
			matches = matches && cards[i].isMatch
		}
		if(matches) {
  if (!played){
    coin.play();
    played = !played;
  }
			//code
			textSize(18);
			fill(0)
			text("You are the first one to solve this problem. 25 bitcoins are given to you as reward.", 170,520);
			text("A little tired of the memory game? The actual hash functions are mathematical problems. It would take much longer to solve! ", 170,550);
			text("The only approach to solve the problem is to guess with brute force. ", 170,580);
      text("If you have large computational power, then you’ll be able to guess quicker and thus mine quicker.", 170,610)
			fill(255, 0, 0)
			text("You solved the puzzle!", 170, 190)
			text("50",60,400);
			text("+25",60,425);
			text("0",1230,70);
			text("25",1230,170);
			text("25",1230,270);

			fill(0);
			text("User",455,135);
			button.style('background-color',"#04AA6D");
button.style('color',"white");
button.style('padding','15px 30px');
button.style('font-size','20px');;
			button.show();
button.position(1100 , 570 );
		}	else{
			fill(255, 0, 0)
			text("Nail the memory game to mine the block!",170,190);
		}
		if (frameCount%60==0 && !matches){
			timer++;
		}
		fill(255,0,0);
		text(timer+" s",1125,190);
	}
	// this.keyPressed = function(){
	// 	if (keyCode == ENTER){
	// 		// console.log("ENTER");
	// 		for(let i = 0; i < cards.length; i++)
	// 		{
	// 			cards[i].isMatch = true;
	// 		}
	// 	}
	// }
	this.mousePressed = function(){
			if(mouseX  >= 1100 && mouseX  < 1100 + 115 && mouseY  >= 550  && mouseY  < 550 + 50 && matches){
				button.hide();
				this.sceneManager.showNextScene();
			}
  for(let i=0; i < cards.length; i++){
    if(cards[i].isUnderMouse(mouseX , mouseY )){
      // click sur la carte
      if(flippedCards.length < 2 && !cards[i].isFaceUp) {
        // retournement de la carte
        cards[i].setIsFaceUp(true)
        flippedCards.push(cards[i])

        // verifier si les cartes sont similaire
        if(flippedCards.length === 2){
					// console.log("flippedCards.length===2")
          if(flippedCards[0].faceUpImage === flippedCards[1].faceUpImage){
            flippedCards[0].isMatch = true
            flippedCards[1].isMatch = true
          }
          cooldown = frameCount
        }
      }
    }
  }
}
}

function Block5( )
{
		let coin;
let played = false;
let faceUpCards = [];
		let faceDownCard = [];
		let deck = [];
		let cards = [];
		let flippedCards = [];
		let cooldown = null;
		let timer = 0;
		let matches = false;

    const rows = 2;
		const columns = 6;

		faceUpCards= [
			loadImage("src/Card.png"),
			loadImage("src/Card-1.png"),
			loadImage("src/Card-2.png"),
			loadImage("src/Card-3.png"),
			loadImage("src/Card-4.png"),
			loadImage("src/Card-5.png")
		];

   this.setup = function()
    {

				NPC1 = createButton('NPC 1');
		 		NPC3 = createButton('NPC 3');

				for(let i = 0; i < faceUpCards.length; i++){
					deck.push(faceUpCards[i]);
					deck.push(faceUpCards[i]); //We want 2 cards.. so we duplicate
				}

				//shuffle cards
				deck.sort(function(){
					return 0.5 - random();
				})

				for(let i=0; i < columns; i++){
					for(let j=0; j < rows; j++){
						//image
						let card = new Card(
							150 + i * 120 + 20,
							200 + j * 120 + 20,
							deck.pop()
						);
						cards.push(card);
					}
				}
			// console.log(cards);
			}

	this.draw = function(){
	background("#fbe39e");


		//Upper GUI showing the blockchain
		textSize(22);
		fill("teal");
		text("You are mining: Block 5",30,30);
		image(blueBlock, 80,50,70,70);
		strokeWeight(3);
		line(150,85,200,85);
		image(blueBlock, 200,50,70,70);
		line(270,85,320,85);
		image(blueBlock, 320,50,70,70);
		line(390,85,440,85);
		image(blueBlock, 440,50,70,70);
		line(510,85,560,85);
		image(blueBlock, 560,50,70,70);

		fill(0);
		strokeWeight(1);
		text("1",105,100);
		text("2",225,100);
		text("3",345,100);
		text("4",465,100);
		text("5",585,100);

		textSize(18);
		text("User",95,135);
		text("NPC 2",205,135);
		text("NPC 3",325,135);
		text("User",455,135);

		//Left and right side GUI showing user & NPCs
		textSize(22);
		text("User",50,250);
		image(user,30,270,90,100);
		text("NPC 1",1300,50);
		image(user,1250,30,50,60);
		text("NPC 2",1300,150);
		image(user,1250,130,50,60);
		text("NPC 3",1300,250);
		image(user,1250,230,50,60);
		fill(255,0,0);
		textSize(18);
		text("75",60,400);
		text("0",1230,70);
		text("25",1230,170);
		text("25",1230,270);

		noFill();
		rect(150,200,1000,300);

		if(cooldown && frameCount - cooldown > 30){
			for(let i = 0; i < cards.length; i++)
			{
				if(!cards[i].isMatch && cards[i].isFaceUp){
					 cards[i].setIsFaceUp(false)
				}
			}

			// remettre la liste de cartes flipped
			flippedCards = []
			cooldown = null
		}
		for(let i = 0; i < cards.length; i++){
    	cards[i].render()
		}

		matches = true
		for(let i = 0; i < cards.length; i++)
		{
			matches = matches && cards[i].isMatch
		}
		if(matches) {

			//code
			textSize(18);
			strokeWeight(3);
			line(510,85,560,45);
			image(yellowBlock, 560,10,70,70);
			line(510,85,560,125);
			image(redBlock, 560,90,70,70);
			strokeWeight(1);
			fill(0);
			text("5.1",585,60);
			text("5.2",585,140);

			text("Oops! NPC 1 and NPC 3 are ahead of you, and they solved this problem at almost the same time!", 170, 520)
			text("Two blocks are published. There is a fork now!", 170,550);
			text("Click one of the buttons near the top to make a choice of which chain you want to attach your future block to.", 170,580);

			fill(255, 0, 0)
			text("X",540,90);
			text("You solved the puzzle!", 170, 190)
			text("75",60,400);
			text("0",1230,70);
			text("25",1230,170);
			text("25",1230,270);

			fill(0);
      NPC1.style('background-color',"#f6b235");
      NPC1.style('color',"white");
      NPC1.style('padding','15px 30px');
      NPC1.style('font-size','20px');
			NPC1.position(650 , 20 );
      NPC3.style('background-color',"red");
      NPC3.style('color',"white");
      NPC3.style('padding','15px 30px');
      NPC3.style('font-size','20px');
			NPC3.position(650 , 100 );

		}	else{
			fill(255, 0, 0)
			text("Nail the memory game to mine the block!",170,190);
		}
		if (frameCount%60==0 && !matches){
			timer++;
		}
		fill(255,0,0);
		text(timer+" s",1125,190);
	}
	// this.keyPressed = function(){
	// 	if (keyCode == ENTER){
	// 		// console.log("ENTER");
	// 		for(let i = 0; i < cards.length; i++)
	// 		{
	// 			cards[i].isMatch = true;
	// 		}
	// 	}
	// }
	this.mousePressed = function(){
			if(mouseX  >= 650 && mouseX  < 650 + 115 && mouseY  >= 40  && mouseY  < 40 + 50 && matches){
				NPC1.hide();
				NPC3.hide();
				this.sceneManager.showScene( Block6_1 );
			}
			if(mouseX  >= 650 && mouseX  < 650 + 115 && mouseY  >= 120  && mouseY  < 120 + 50 && matches){
				NPC1.hide();
				NPC3.hide();
				this.sceneManager.showScene( Block6_2 );
			}
  for(let i=0; i < cards.length; i++){
    if(cards[i].isUnderMouse(mouseX , mouseY )){
      // click sur la carte
      if(flippedCards.length < 2 && !cards[i].isFaceUp) {
        // retournement de la carte
        cards[i].setIsFaceUp(true)
        flippedCards.push(cards[i])

        // verifier si les cartes sont similaire
        if(flippedCards.length === 2){
					// console.log("flippedCards.length===2")
          if(flippedCards[0].faceUpImage === flippedCards[1].faceUpImage){
            flippedCards[0].isMatch = true
            flippedCards[1].isMatch = true
          }
          cooldown = frameCount
        }
      }
    }
  }
}
}

function Block6_1( )
{
		let coin;
let played = false;
let faceUpCards = [];
		let faceDownCard = [];
		let deck = [];
		let cards = [];
		let flippedCards = [];
		let cooldown = null;
		let timer = 0;
		let matches = false;

    const rows = 2;
		const columns = 7;

		faceUpCards= [
			loadImage("src/Card.png"),
			loadImage("src/Card-1.png"),
			loadImage("src/Card-2.png"),
			loadImage("src/Card-3.png"),
			loadImage("src/Card-4.png"),
			loadImage("src/Card-5.png"),
			loadImage("src/Card-6.png")
		];

   this.setup = function()
    {

			button = createButton('Gotcha');

				for(let i = 0; i < faceUpCards.length; i++){
					deck.push(faceUpCards[i]);
					deck.push(faceUpCards[i]); //We want 2 cards.. so we duplicate
				}

				//shuffle cards
				deck.sort(function(){
					return 0.5 - random();
				})

				for(let i=0; i < columns; i++){
					for(let j=0; j < rows; j++){
						//image
						let card = new Card(
							150 + i * 120 + 20,
							200 + j * 120 + 20,
							deck.pop()
						);
						cards.push(card);
					}
				}
			// console.log(cards);
			}

	this.draw = function(){
	background("#fbe39e");


		//Upper GUI showing the blockchain
		textSize(22);
		fill("teal");
		text("You are mining: Block 6, on the yellow sub-chain",30,30);
		image(blueBlock, 80,50,70,70);
		strokeWeight(3);
		line(150,85,200,85);
		image(blueBlock, 200,50,70,70);
		line(270,85,320,85);
		image(blueBlock, 320,50,70,70);
		line(390,85,440,85);
		image(blueBlock, 440,50,70,70);
		line(510,85,560,45);
		image(yellowBlock, 560,10,70,70);
		line(710,45,760,45);
		image(yellowBlock, 760,10,70,70);
		line(510,85,560,125);
		image(redBlock, 560,90,70,70);


		fill(0);
		strokeWeight(1);
		text("1",105,100);
		text("2",225,100);
		text("3",345,100);
		text("4",465,100);
		text("5.1",585,60);
		text("5.2",585,140);
		text("6",785,60);


		textSize(18);
		text("User",95,135);
		text("NPC 2",205,135);
		text("NPC 3",325,135);
		text("User",455,135);
		text("NPC 1",650,50);
		text("NPC 3",650,130);

		//Left and right side GUI showing user & NPCs
		textSize(22);
		fill("#f6b235");
		text("User",50,250);
		image(user,30,270,90,100);
		text("NPC 1",1300,50);
		image(user,1250,30,50,60);
		fill("red");
		text("NPC 2",1300,150);
		image(user,1250,130,50,60);
		text("NPC 3",1300,250);
		image(user,1250,230,50,60);
		textSize(18);
		fill("#f6b235");
		text("75",60,400);
		text("0",1230,70);
		fill(255,0,0);
		text("25",1230,170);
		text("25",1230,270);

		noFill();
		rect(150,200,1000,300);

		if(cooldown && frameCount - cooldown > 30){
			for(let i = 0; i < cards.length; i++)
			{
				if(!cards[i].isMatch && cards[i].isFaceUp){
					 cards[i].setIsFaceUp(false)
				}
			}

			// remettre la liste de cartes flipped
			flippedCards = []
			cooldown = null
		}
		for(let i = 0; i < cards.length; i++){
    	cards[i].render()
		}

		matches = true
		for(let i = 0; i < cards.length; i++)
		{
			matches = matches && cards[i].isMatch
		}
		if(matches) {
			//code
			textSize(22);
			fill(0);
			strokeWeight(3);
			line(710,125,760,125);
			image(redBlock, 760,90,70,70);
			strokeWeight(1);
			text("6.1",785,60);
			text("6.2",785,140);

			textSize(18);
			text("Oops! You and NPC 2 solved this problem at almost the same time!", 170, 520)
			text("The two sub-chains are still of the same length.", 170,550);
			text("Try mining one more block!", 170,580);
			text("BTW, nobody is going to get any reward until the fork is settled (when there is a winner chain).", 170,610);
			fill(255, 0, 0)
			text("You solved the puzzle!", 170, 190)
			text("25",1230,170);
			text("25",1230,270);

			fill(0);
			text("User",850,50);
			text("NPC 2",850,130);
      button.style('background-color',"#04AA6D");
button.style('color',"white");
button.style('padding','15px 30px');
button.style('font-size','20px');;
			button.position(1100 , 570 );
		}	else{
			fill(255, 0, 0)
			text("Nail the memory game to mine the block!",170,190);
		}
		if (frameCount%60==0 && !matches){
			timer++;
		}
		fill(255,0,0);
		text(timer+" s",1125,190);
	}
	// this.keyPressed = function(){
	// 	if (keyCode == ENTER){
	// 		// console.log("ENTER");
	// 		for(let i = 0; i < cards.length; i++)
	// 		{
	// 			cards[i].isMatch = true;
	// 		}
	// 	}
	// }
	this.mousePressed = function(){
			if(mouseX  >= 1100 && mouseX  < 1100 + 115 && mouseY  >= 550  && mouseY  < 550 + 50 && matches){
				button.hide();
				this.sceneManager.showScene( Block7_1 );
			}
  for(let i=0; i < cards.length; i++){
    if(cards[i].isUnderMouse(mouseX , mouseY )){
      // click sur la carte
      if(flippedCards.length < 2 && !cards[i].isFaceUp) {
        // retournement de la carte
        cards[i].setIsFaceUp(true)
        flippedCards.push(cards[i])

        // verifier si les cartes sont similaire
        if(flippedCards.length === 2){
					// console.log("flippedCards.length===2")
          if(flippedCards[0].faceUpImage === flippedCards[1].faceUpImage){
            flippedCards[0].isMatch = true
            flippedCards[1].isMatch = true
          }
          cooldown = frameCount
        }
      }
    }
  }
}
}

function Block6_2( )
{
			let coin;
let played = false;
let faceUpCards = [];
		let faceDownCard = [];
		let deck = [];
		let cards = [];
		let flippedCards = [];
		let cooldown = null;
		let timer = 0;
		let matches = false;

    const rows = 2;
		const columns = 7;

		faceUpCards= [
			loadImage("src/Card.png"),
			loadImage("src/Card-1.png"),
			loadImage("src/Card-2.png"),
			loadImage("src/Card-3.png"),
			loadImage("src/Card-4.png"),
			loadImage("src/Card-5.png"),
			loadImage("src/Card-6.png")
		];

   this.setup = function()
    {

			button = createButton('Gotcha');

				for(let i = 0; i < faceUpCards.length; i++){
					deck.push(faceUpCards[i]);
					deck.push(faceUpCards[i]); //We want 2 cards.. so we duplicate
				}

				//shuffle cards
				deck.sort(function(){
					return 0.5 - random();
				})

				for(let i=0; i < columns; i++){
					for(let j=0; j < rows; j++){
						//image
						let card = new Card(
							150 + i * 120 + 20,
							200 + j * 120 + 20,
							deck.pop()
						);
						cards.push(card);
					}
				}
			// console.log(cards);
			}

	this.draw = function(){
	background("#fbe39e");


		//Upper GUI showing the blockchain
		textSize(22);
		fill("teal");
		text("You are mining: Block 6, on the red sub-chain",30,30);
		image(blueBlock, 80,50,70,70);
		strokeWeight(3);
		line(150,85,200,85);
		image(blueBlock, 200,50,70,70);
		line(270,85,320,85);
		image(blueBlock, 320,50,70,70);
		line(390,85,440,85);
		image(blueBlock, 440,50,70,70);
		line(510,85,560,45);
		image(yellowBlock, 560,10,70,70);
		line(510,85,560,125);
		image(redBlock, 560,90,70,70);
		line(710,125,760,125);
		image(redBlock, 760,90,70,70);

		fill(0);
		strokeWeight(1);
		text("1",105,100);
		text("2",225,100);
		text("3",345,100);
		text("4",465,100);
		text("5.1",585,60);
		text("5.2",585,140);
		text("6",785,140);


		textSize(18);
		text("User",95,135);
		text("NPC 2",205,135);
		text("NPC 3",325,135);
		text("User",455,135);
		text("NPC 1",650,50);
		text("NPC 3",650,130);

		//Left and right side GUI showing user & NPCs
		textSize(22);
		fill("#f6b235");
		text("NPC 1",1300,50);
		image(user,1250,30,50,60);
		text("NPC 2",1300,150);
		image(user,1250,130,50,60);
		fill("red");
		text("User",50,250);
		image(user,30,270,90,100);
		text("NPC 3",1300,250);
		image(user,1250,230,50,60);
		textSize(18);
		fill("#f6b235");
		text("0",1230,70);
		text("25",1230,170);
		fill(255,0,0);
		text("75",60,400);
		text("25",1230,270);

		noFill();
		rect(150,200,1000,300);

		if(cooldown && frameCount - cooldown > 30){
			for(let i = 0; i < cards.length; i++)
			{
				if(!cards[i].isMatch && cards[i].isFaceUp){
					 cards[i].setIsFaceUp(false)
				}
			}

			// remettre la liste de cartes flipped
			flippedCards = []
			cooldown = null
		}
		for(let i = 0; i < cards.length; i++){
    	cards[i].render()
		}

		matches = true
		for(let i = 0; i < cards.length; i++)
		{
			matches = matches && cards[i].isMatch
		}
		if(matches) {
			//code
			textSize(22);
			fill(0);
			strokeWeight(3);
			line(710,45,760,45);
			image(yellowBlock, 760,10,70,70);
			strokeWeight(1);
			text("6.1",785,60);
			text("6.2",785,140);

			textSize(18);
			text("Oops! You and NPC 2 solved this problem at almost the same time!", 170, 520)
			text("The two sub-chains are still of the same length.", 170,550);
			text("Try mining one more block!", 170,580);
			text("BTW, nobody is going to get any reward until the fork is settled (when there is a winner chain).", 170,610);
			fill(255, 0, 0)
			text("75",60,400);
			text("You solved the puzzle!", 170, 190)
			text("25",1230,270);

			fill(0);
			text("NPC 2",850,50);
			text("User",850,130);
			button.style('background-color',"#04AA6D");
button.style('color',"white");
button.style('padding','15px 30px');
button.style('font-size','20px');button.position(1100 , 570 );
		}	else{
			fill(255, 0, 0)
			text("Nail the memory game to mine the block!",170,190);
		}
		if (frameCount%60==0 && !matches){
			timer++;
		}
		fill(255,0,0);
		text(timer+" s",1125,190);
	}
	// this.keyPressed = function(){
	// 	if (keyCode == ENTER){
	// 		// console.log("ENTER");
	// 		for(let i = 0; i < cards.length; i++)
	// 		{
	// 			cards[i].isMatch = true;
	// 		}
	// 	}
	// }
	this.mousePressed = function(){
			if(mouseX  >= 1100 && mouseX  < 1100 + 115 && mouseY  >= 550  && mouseY  < 550 + 50 && matches){
				button.hide();
				this.sceneManager.showScene( Block7_2 );
			}

  for(let i=0; i < cards.length; i++){
    if(cards[i].isUnderMouse(mouseX , mouseY )){
      // click sur la carte
      if(flippedCards.length < 2 && !cards[i].isFaceUp) {
        // retournement de la carte
        cards[i].setIsFaceUp(true)
        flippedCards.push(cards[i])

        // verifier si les cartes sont similaire
        if(flippedCards.length === 2){
					// console.log("flippedCards.length===2")
          if(flippedCards[0].faceUpImage === flippedCards[1].faceUpImage){
            flippedCards[0].isMatch = true
            flippedCards[1].isMatch = true
          }
          cooldown = frameCount
        }
      }
    }
  }
}
}
function Block7_1( )
{
			let coin;
let played = false;
let faceUpCards = [];
		let faceDownCard = [];
		let deck = [];
		let cards = [];
		let flippedCards = [];
		let cooldown = null;
		let timer = 0;
		let matches = false;
	let button;

    const rows = 2;
		const columns = 8;

		faceUpCards= [
			loadImage("src/Card.png"),
			loadImage("src/Card-1.png"),
			loadImage("src/Card-2.png"),
			loadImage("src/Card-3.png"),
			loadImage("src/Card-4.png"),
			loadImage("src/Card-5.png"),
			loadImage("src/Card-6.png"),
			loadImage("src/Card-7.png")
		];

   this.setup = function()
    {
			coin = createAudio('src/coin.mp3');
			coin.loop=false;
		 button = createButton("Gotcha");
				for(let i = 0; i < faceUpCards.length; i++){
					deck.push(faceUpCards[i]);
					deck.push(faceUpCards[i]); //We want 2 cards.. so we duplicate
				}

				//shuffle cards
				deck.sort(function(){
					return 0.5 - random();
				})

				for(let i=0; i < columns; i++){
					for(let j=0; j < rows; j++){
						//image
						let card = new Card(
							150 + i * 120 + 20,
							200 + j * 120 + 20,
							deck.pop()
						);
						cards.push(card);
					}
				}
			// console.log(cards);
			}

	this.draw = function(){
	background("#fbe39e");


		//Upper GUI showing the blockchain
		textSize(22);
		fill("teal");
		text("You are mining: Block 7, on the yellow sub-chain",30,30);
		image(blueBlock, 80,50,70,70);
		strokeWeight(3);
		line(150,85,200,85);
		image(blueBlock, 200,50,70,70);
		line(270,85,320,85);
		image(blueBlock, 320,50,70,70);
		line(390,85,440,85);
		image(blueBlock, 440,50,70,70);
		line(510,85,560,45);
		image(yellowBlock, 560,10,70,70);
		line(710,45,760,45);
		image(yellowBlock, 760,10,70,70);
		line(910,45,960,45);
		image(yellowBlock, 960,10,70,70);
		line(510,85,560,125);
		image(redBlock, 560,90,70,70);
		line(710,125,760,125);
		image(redBlock, 760,90,70,70);

		fill(0);
		strokeWeight(1);
		text("1",105,100);
		text("2",225,100);
		text("3",345,100);
		text("4",465,100);
		text("5.1",585,60);
		text("5.2",585,140);
		text("6.1",785,60);
		text("6.2",785,140);
		text("7",985,60);

		textSize(18);
		text("User",95,135);
		text("NPC 2",205,135);
		text("NPC 3",325,135);
		text("User",455,135);
		text("NPC 1",650,50);
		text("NPC 3",650,130);
		text("User",850,50);
		text("NPC 2",850,130);

		//Left and right side GUI showing user & NPCs
		textSize(22);
		fill("#f6b235");
		text("User",50,250);
		image(user,30,270,90,100);
		text("NPC 1",1300,50);
		image(user,1250,30,50,60);
		fill("red");
		text("NPC 2",1300,150);
		image(user,1250,130,50,60);
		text("NPC 3",1300,250);
		image(user,1250,230,50,60);
		textSize(18);
		fill("#f6b235");
		text("75",60,400);
		text("0",1230,70);
		fill(255,0,0);
		text("25",1230,170);
		text("25",1230,270);

		noFill();
		rect(150,200,1000,300);

		if(cooldown && frameCount - cooldown > 30){
			for(let i = 0; i < cards.length; i++)
			{
				if(!cards[i].isMatch && cards[i].isFaceUp){
					 cards[i].setIsFaceUp(false)
				}
			}

			// remettre la liste de cartes flipped
			flippedCards = []
			cooldown = null
		}
		for(let i = 0; i < cards.length; i++){
    	cards[i].render()
		}

		matches = true
		for(let i = 0; i < cards.length; i++)
		{
			matches = matches && cards[i].isMatch
		}
		if(matches) {
  if (!played){
    coin.play();
    played = !played;
  }
			textSize(18);
			fill("#f6b235");
			text("75",60,400);
			text("+25",60,425);
			text("0",1230,70);
			text("+12.5",1220,95);

			fill(0)
			text("Yes!! You are the first to solve this problem! Also, someone else has attached their block to this chain. So, we have a winner now!", 170, 520)
			text("The shorter sub-chain (the red chain) will be abandoned-- You can still mine on it, but there is no point in doing so: You won't be awarded.", 170,550);
			text("You are awarded 25 bitcoins for the two blocks you mined.", 170,580);
			fill(255, 0, 0)
			text("You solved the puzzle!", 170, 190)
			text("25",1230,170);
			text("25",1230,270);
			text("X",540,120);
			text("X",735,130);

			fill(0);
			text("User",1050,50);
      strokeWeight(3)
      line(1100,45,1150,45);
      image(yellowBlock, 1150,10,70,70);
      strokeWeight(1)
      // text("NPC1",1250,50);

			button.style('background-color',"#04AA6D");
button.style('color',"white");
button.style('padding','15px 30px');
button.style('font-size','20px');
button.position(1100 , 570 );
		}	else{
			fill(255, 0, 0)
			text("Nail the memory game to mine the block!",170,190);
		}
		if (frameCount%60==0 && !matches){
			timer++;
		}
		fill(255,0,0);
		text(timer+" s",1125,190);
	}
	// this.keyPressed = function(){
	// 	if (keyCode == ENTER){
	// 		// console.log("ENTER");
	// 		for(let i = 0; i < cards.length; i++)
	// 		{
	// 			cards[i].isMatch = true;
	// 		}
	// 	}
	// }
	this.mousePressed = function(){
			if(mouseX  >= 1100 && mouseX  < 1100 + 115 && mouseY  >= 550  && mouseY  < 550 + 50 && matches){
				button.hide();
				this.sceneManager.showScene( Block8 );
			}
  for(let i=0; i < cards.length; i++){
    if(cards[i].isUnderMouse(mouseX , mouseY )){
      // click sur la carte
      if(flippedCards.length < 2 && !cards[i].isFaceUp) {
        // retournement de la carte
        cards[i].setIsFaceUp(true)
        flippedCards.push(cards[i])

        // verifier si les cartes sont similaire
        if(flippedCards.length === 2){
					// console.log("flippedCards.length===2")
          if(flippedCards[0].faceUpImage === flippedCards[1].faceUpImage){
            flippedCards[0].isMatch = true
            flippedCards[1].isMatch = true
          }
          cooldown = frameCount
        }
      }
    }
  }
}
}
function Block7_2( )
{
			let coin;
let played = false;
let faceUpCards = [];
		let faceDownCard = [];
		let deck = [];
		let cards = [];
		let flippedCards = [];
		let cooldown = null;
		let timer = 0;
		let matches = false;
		let button;

    const rows = 2;
		const columns = 8;

		faceUpCards= [
			loadImage("src/Card.png"),
			loadImage("src/Card-1.png"),
			loadImage("src/Card-2.png"),
			loadImage("src/Card-3.png"),
			loadImage("src/Card-4.png"),
			loadImage("src/Card-5.png"),
			loadImage("src/Card-6.png"),
			loadImage("src/Card-7.png")
		];

   this.setup = function()
    {
		 				coin = createAudio('src/coin.mp3');
coin.loop=false;
button = createButton('Gotcha');
				for(let i = 0; i < faceUpCards.length; i++){
					deck.push(faceUpCards[i]);
					deck.push(faceUpCards[i]); //We want 2 cards.. so we duplicate
				}

				//shuffle cards
				deck.sort(function(){
					return 0.5 - random();
				})

				for(let i=0; i < columns; i++){
					for(let j=0; j < rows; j++){
						//image
						let card = new Card(
							150 + i * 120 + 20,
							200 + j * 120 + 20,
							deck.pop()
						);
						cards.push(card);
					}
				}
			// console.log(cards);
			}

	this.draw = function(){
	background("#fbe39e");


		//Upper GUI showing the blockchain
		textSize(22);
		fill("teal");
		text("You are mining: Block 7, on the red sub-chain",30,30);
		image(blueBlock, 80,50,70,70);
		strokeWeight(3);
		line(150,85,200,85);
		image(blueBlock, 200,50,70,70);
		line(270,85,320,85);
		image(blueBlock, 320,50,70,70);
		line(390,85,440,85);
		image(blueBlock, 440,50,70,70);
		line(510,85,560,45);
		image(yellowBlock, 560,10,70,70);
		line(710,45,760,45);
		image(yellowBlock, 760,10,70,70);
		line(510,85,560,125);
		image(redBlock, 560,90,70,70);
		line(710,125,760,125);
		image(redBlock, 760,90,70,70);
		line(910,125,960,125);
		image(redBlock, 960,90,70,70);

		fill(0);
		strokeWeight(1);
		text("1",105,100);
		text("2",225,100);
		text("3",345,100);
		text("4",465,100);
		text("5.1",585,60);
		text("5.2",585,140);
		text("6.1",785,60);
		text("6.2",785,140);
		text("7",985,140);

		textSize(18);
		text("User",95,135);
		text("NPC 2",205,135);
		text("NPC 3",325,135);
		text("User",455,135);
		text("NPC 1",650,50);
		text("NPC 3",650,130);
		text("NPC 2",850,50);
		text("User",850,130);

		//Left and right side GUI showing user & NPCs
		textSize(22);
		fill("#f6b235");
		text("NPC 1",1300,50);
		image(user,1250,30,50,60);
		text("NPC 2",1300,150);
		image(user,1250,130,50,60);
	  fill("red");
		text("User",50,250);
		image(user,30,270,90,100);
		text("NPC 3",1300,250);
		image(user,1250,230,50,60);
		textSize(18);
		fill("#f6b235");
		text("0",1230,70);
		text("25",1230,170);
		fill(255,0,0);
		text("75",60,400);
		text("25",1230,270);

		noFill();
		rect(150,200,1000,300);

		if(cooldown && frameCount - cooldown > 30){
			for(let i = 0; i < cards.length; i++)
			{
				if(!cards[i].isMatch && cards[i].isFaceUp){
					 cards[i].setIsFaceUp(false)
				}
			}

			// remettre la liste de cartes flipped
			flippedCards = []
			cooldown = null
		}
		for(let i = 0; i < cards.length; i++){
    	cards[i].render()
		}

		matches = true
		for(let i = 0; i < cards.length; i++)
		{
			matches = matches && cards[i].isMatch
		}
		if(matches) {
  if (!played){
    coin.play();
    played = !played;
  }
			textSize(18);
			fill("#f6b235");
			text("+12.5",1220,95);
			fill(0)
			text("Yes!! You are the first to solve this problem! Also, someone else has attached their block to this chain. So, we have a winner now!", 170, 520)
			text("The shorter sub-chain (the yellow chain) will be abandoned-- You can still mine on it, but there is no point in doing so: You won't be awarded.", 170,550);
			text("You are awarded 25 bitcoins for the two blocks you mined.", 170,580);
			fill(255, 0, 0)
			text("You solved the puzzle!", 170, 190)
			text("75",60,400);
			text("+25",60,425);
			text("25",1230,270);
			text("X",540,60);
			text("X",735,50);

			fill(0);
			text("User",1050,130);
      strokeWeight(3)
      line(1100,125,1150,125);
      image(redBlock, 1150,90,70,70);
      strokeWeight(1)

			button.style('background-color',"#04AA6D");
button.style('color',"white");
button.style('padding','15px 30px');
button.style('font-size','20px');
button.position(1100 , 570 );
		}	else{
			fill(255, 0, 0)
			text("Nail the memory game to mine the block!",170,190);
		}
		if (frameCount%60==0 && !matches){
			timer++;
		}
		fill(255,0,0);
		text(timer+" s",1125,190);
	}
	// this.keyPressed = function(){
	// 	if (keyCode == ENTER){
	// 		// console.log("ENTER");
	// 		for(let i = 0; i < cards.length; i++)
	// 		{
	// 			cards[i].isMatch = true;
	// 		}
	// 	}
	// }
	this.mousePressed = function(){
			if(mouseX  >= 1100 && mouseX  < 1100 + 115 && mouseY  >= 550  && mouseY  < 550 + 50 && matches){
				button.hide();
				this.sceneManager.showScene( Block8 );
			}
  for(let i=0; i < cards.length; i++){
    if(cards[i].isUnderMouse(mouseX , mouseY )){
      // click sur la carte
      if(flippedCards.length < 2 && !cards[i].isFaceUp) {
        // retournement de la carte
        cards[i].setIsFaceUp(true)
        flippedCards.push(cards[i])

        // verifier si les cartes sont similaire
        if(flippedCards.length === 2){
					// console.log("flippedCards.length===2")
          if(flippedCards[0].faceUpImage === flippedCards[1].faceUpImage){
            flippedCards[0].isMatch = true
            flippedCards[1].isMatch = true
          }
          cooldown = frameCount
        }
      }
    }
  }
}
}
