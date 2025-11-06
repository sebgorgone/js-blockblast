let debuginfo = true;

// interaction variables
let dragging = false;
let draggedBlock;
let follower;
let endgame;

function setup() {
   endgame = false;
   createCanvas(windowWidth, windowHeight);
   if (windowHeight < windowWidth) {
      landscapeSetup();
   } else {
      portraitSetup();
   }

   getGridpoints();
   getGrabpoints();

   getHighscore();
}

function draw() {
   background(255);
   drawlayout();
   initialize();
   checkGrid();
   bonusDisplay();


   blockDisplay()



   deathMessage();
   build_restartbutton();
   showhighscore();


}

