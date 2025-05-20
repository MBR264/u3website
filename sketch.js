let img
// Loading my images in.
function preload() {
  img = loadImage('assets/deqtypeweb.jpg');
  img1 = loadImage('assets/medtempweb1.jpg');
  img2 = loadImage('assets/medtempweb2.jpg');
  img3 = loadImage('assets/medtempweb3.jpg');
  img4 = loadImage('assets/medtempweb4.jpg');
  img5 = loadImage('assets/medtempweb5.jpg');
  img6 = loadImage('assets/medtempweb6.jpg');
  img7 = loadImage('assets/medtempweb7.jpg');
  img8 = loadImage('assets/medtempweb8.jpg');
  img9 = loadImage('assets/medtempweb9.jpg');
  img10 = loadImage('assets/medtempweb10.jpg');
  img11 = loadImage('assets/medtempweb11.jpg');
  img12 = loadImage('assets/medtempweb12.jpg'); 
  img13 = loadImage('assets/medtempweb13.jpg');

  img14 = loadImage('assets/largetempweb1.jpg');
  img15 = loadImage('assets/largetempweb2.jpg');
  img16 = loadImage('assets/largetempweb3.jpg');
  img17 = loadImage('assets/largetempweb4.jpg');

  img18 = loadImage('assets/smalltempweb1.jpg');
  img19 = loadImage('assets/smalltempweb2.jpg');
  img20 = loadImage('assets/smalltempweb3.jpg');
  img21 = loadImage('assets/smalltempweb4.jpg');
  img22 = loadImage('assets/smalltempweb5.jpg');
  img23 = loadImage('assets/smalltempweb6.jpg');
  img24 = loadImage('assets/smalltempweb7.jpg');
  img25 = loadImage('assets/smalltempweb8.jpg');
  img26 = loadImage('assets/smalltempweb9.jpg');
  img27 = loadImage('assets/smalltempweb10.jpg');
  img28 = loadImage('assets/smalltempweb11.jpg');

  gif1 = loadImage('assets/back.gif');
  gif2 = loadImage('assets/groundsmall.gif');
  gif4 = loadImage('assets/pounce.gif');
  gif5 = loadImage('assets/limbs.gif');
  gif6 = loadImage('assets/rollsmall.gif');
  gif7 = loadImage('assets/rolllarge.gif');
  gif8 = loadImage('assets/creep.gif');
  gif9 = loadImage('assets/crawl.gif');
  gif10 = loadImage('assets/laugh.gif');
   
}

// Getting camera footage.
let capture;

let timer = 0
let increment = 1000

function setup() {



  describe('Video capture from the device webcam.');
  //createCanvas(1240, 720);
  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);
  capture.size(540, 360);
  capture.hide();
   
  background(0);
  textSize(20);
  fill('white');
  text('[DEQUIZATION]', 160, 365, 540, 20);
  textSize(12);
  text('Dec-qui-zae-tion ', 160, 390, 540, 20);
  text('A study on the effects of sleep. A heightening of senses. An embrace of animalistic quality’s for the sake of productivity. A means to an end no matter the consequences. A new-found joy.', 160, 415, 540, 40);
  text('EPILEPSY WARNING: This website contains flashing imagery.', 160, 675, 540, 40);
  text('Do you wish to proceed? (Click ENTER)', 160, 700, 540, 20);

  image(img, 0, 0);
  image(img1, 700, 0);
  
  
  


}

//function keyPressed() {}
function two(){

}

function three() {

}

function four() {
  
}




function draw() {

  //timer = timer + increment

  image(capture, 160, 0, 0, 0);
  filter(THRESHOLD);

  image(img, 0, 0);
  image(img1, 700, 0);

  if (keyCode === ENTER) {
   
   // image(gif1, 160, 0);
   //image(gif1, 700, 0);
   timer = timer + increment
  }

  if (timer >= 1) {

   image(gif1, 160, 0);

   }
   
  //if (timer >= 30000) {
    
   // image(img20, 700, 360);
   //}

   if (timer >= 30000) {
    
    image(gif1, 700, 0);
   }

   if (timer >= 90000) {
    
    image(img14, 160, 0);
   }

   if (timer >= 120000) {
    
    image(gif6, 700, 0);
   }
   if (timer >= 140000) {
    
    image(gif6, 700, 360);
   }
   if (timer >= 160000) {
    
    image(gif6, 160, 0);
   }
   if (timer >= 180000) {
    
    image(gif6, 160, 360);
   }
   if (timer >= 210000) {
    
    image(img5, 160, 0);
   }

   if (timer >= 240000) {
    
    image(img26, 700, 360);
   }
   if (timer >= 260000) {
    
    image(img26, 700, 0);
   }
   //if (timer >= 280000) {
    
   // image(img26, 160, 0);
   //}
   if (timer >= 280000) {
    
    image(img7, 700, 0);
   }

   if (timer >= 300000) {
    
    image(gif4, 700, 0);
   }
   if (timer >= 400000) {
    
    image(img15, 160, 0);
   }
   if (timer >= 420000) {
    
    image(gif2, 160, 0);
   }
   if (timer >= 460000) {
    
    image(gif2, 700, 0);
   }

   if (timer >= 480000) {
    
    image(img22, 700, 360);
    image(img22, 160, 360);
   }
   if (timer >= 510000) {
    
    image(img3, 700, 0);
   }
   if (timer >= 530000) {
    
    image(img6, 160, 0);
   }
   if (timer >= 530000) {
    
    image(gif8, 700, 0);
    image(gif8, 160, 0);
   }
   if (timer >= 560000) {
    
    image(img27, 700, 0);
   }
   if (timer >= 580000) {
    
    image(img27, 700, 360);
   }
   if (timer >= 600000) {
    
    image(img27, 160, 360);
   }
   if (timer >= 620000) {
    
    image(img27, 160, 0);
   }

   if (timer >= 640000) {
    
    image(gif9, 160, 0);
   }
   if (timer >= 690000) {
    
    image(img5, 700, 0);
   }
   if (timer >= 720000) {
    
    image(img19, 160, 0);
   }
   if (timer >= 740000) {
    
    image(img19, 160, 360);
   }
   if (timer >= 770000) {
    
    image(gif5, 160, 0);
   }
   if (timer >= 850000) {
    
    image(gif7, 160, 0);
   }
   //if (timer >= 870000) {
    
    //image(gif6, 160, 0);
   //}
   if (timer >= 900000) {
    
    image(img10, 160, 0);
   }
   if (timer >= 930000) {
    
    image(gif10, 700, 0);
   }

   if (timer >= 960000) {
    
    image(img28, 700, 0);
   }
   if (timer >= 970000) {
    
    image(img28, 700, 360);
   }
   if (timer >= 980000) {
    
    image(img28, 160, 0);
   }
   if (timer >= 990000) {
    
    image(img28, 160, 360);
   }
   if (timer >= 1000000) {
    
    image(img17, 160, 0);
   }
   if (timer >= 1010000) {
    
    image(img8, 700, 0);
   }
   if (timer >= 1015000) {
    
    image(capture, 160, 0, 0, 0);
    filter(THRESHOLD);
   }

   if (timer >= 1020000) {
    
  textSize(78);
  fill('white');
  text('[DEQUIZATION COMPLETE]', 180, 360, windowWidth, windowHeight);
  
   }

//image(gif1, 700, 0);




  }



 // image(gif1, 160, 0);


    

  // Inserting camera feed
 // image(capture, 160, 0, 540, 360);
//filter(THRESHOLD);
//filter(BLUR, 1); 

   // Inserting Images.
   //image(img, 0, 0);
  // image(img1, 700, 0);
   







   //image(capture, 700, 0, 540, 360);
  //filter(THRESHOLD);
  //image(capture, 160, 360, 540, 360);
  //filter(THRESHOLD);
  //image(capture, 700, 360, 540, 360);
  //filter(THRESHOLD);


   //back
   //image(gif1, 160, 0);
   //image(gif1, 700, 0);

   //ground small
   //image(gif2, 160, 0);
   //image(gif2, 700, 0);
   //image(gif2, 160, 360);
   //image(gif2, 700, 360);

   //pounce
   //image(gif4, 160, 0)

   //limbs
   //image(gif5, 160, 0)

   //roll small
   //image(gif6, 160, 0);
   //image(gif6, 700, 0);
   //image(gif6, 160, 360);
   //image(gif6, 700, 360);

   //roll large
   //image(gif7, 160, 0)

   //creep
   //image(gif8, 160, 0)

   //crawl
   //image(gif9, 160, 0)

   //laugh
   //image(gif10, 160, 0)

  //medium
  
 //image(img1, 160, 0)
 //image(img1, 700, 0)

  //image(img2, 160, 0)
 //image(img2, 700, 0)



 