let button;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;
let bell;
let applause;
let boo;
let buzz;
let theme1;
let theme2;
let advert1;
let advert2;
let col;
let col2;
let col3;
let col4;
let col5;
let col6;
let col7;
let col8;


function preload() {

bell = loadSound ("bellsound.mp3");
applause = loadSound ("applausesound.mp3");
boo = loadSound  ("boosound.mp3");
buzz = loadSound ("errorsound.mp3");
theme1 = loadSound  ("theme song 1.mp3");
theme2 = loadSound  ("theme song 2.mp3");
advert1 = loadSound ("burger king ad.mp3");
advert2 = loadSound ("monoxide advert.mp3");
img5 = loadImage ("redcurtains.jpg");

}

function setup() {
  createCanvas(400, 400);
 

  //bell.play()
//applause.play()
//boo.play()
//buzz.play()

// Applause button
let col = color(255,234,0);
button = createButton("Applause!!");
button.mouseClicked(buttonSound);
button.size(150,80);
button.position(10,200);
button.style("font-family", "Roboto-Black" );
button.style("font-size","20px");
button.style("background-color", col);


  // Boo button
let col2 = color(137,207,240);
button2  = createButton("Boo!!");
button2.mouseClicked(buttonSound2);
button2.size(150,80);
button2.position(240,200);
button2.style("font-family", "Roboto-Black" );
button2.style("font-size","20px");
button2.style("background-color", col2);


//Correct button
let col3 = color(0,240,0);
button3  = createButton("Correct !!");
button3.mouseClicked(buttonSound3);
button3.size(150,80);
button3.position(10,310);
button3.style("font-family", "Roboto-Black" );
button3.style("font-size","20px");
button3.style("background-color", col3);


 
//Wrong button
let col4 = color(240,0,0);
button4 = createButton("Wrong !!");
button4.mouseClicked(buttonSound4);
button4.size(150,80);
button4.position(240,310);
button4.style("font-family", "Roboto-Black" );
button4.style("font-size","20px");
button4.style("background-color", col4);


// Theme 1 button
let col5 = color(210,130,50);
button5 = createButton("theme 1")
button5. mouseClicked(buttonSound5)
button5.size(80,80);
button5.position(10,100);
button5.style("font-family", "Roboto-Black" );
button5.style("font-size","20px");
button5.style("background-color", col5);
 

//theme 2 button

let col6 = color(210,130,50);
button6 = createButton("theme 2")
button6. mouseClicked(buttonSound6)
button6.size(80,80);
button6.position(100,100);
button6.style("font-family", "Roboto-Black" );
button6.style("font-size","20px");
button6.style("background-color", col5);



//Advert 1 button

let col7 = color(100,200,90);
button7 = createButton("Advert 1")
button7.mouseClicked(buttonSound7);
button7.size(80,80);
button7.position(230,100);
button7.style("font-family", "Roboto-Black" );
button7.style("font-size","20px");
button7.style("background-color", col7);

// Advert 2 button
let col8 = color(100,200,90);
button8 = createButton("Advert 2")
button8.mouseClicked(buttonSound8);
button8.size(80,80);
button8.position(320,100);
button8.style("font-family", "Roboto-Black" );
button8.style("font-size","20px");
button8.style("background-color", col8);











}



function draw() {
  background(220);

//red curtain image
image(img5, 0, 0,400,400);

//Heading
stroke(225);
strokeWeight(3);
fill(90,70,200);
rect(60,10,300,40);
stroke(255);
fill(0,0,0);
text("GAME SHOW SOUND BOARD",100,35);
textSize(15)


//image(img,0,0);
}


function buttonSound () {
applause.play()

}





function buttonSound2 () {
boo.play()

}

function buttonSound3 () {
bell.play()  
 
}


function buttonSound4 () {
buzz.play()
 
}


function buttonSound5 () {
 theme1.play()
 
 
}


function buttonSound6 ()  {
 theme2.play()
 
}


function buttonSound7 ()  {
advert1.play()
 
}


function buttonSound8 ()   {
advert2.play()


}


