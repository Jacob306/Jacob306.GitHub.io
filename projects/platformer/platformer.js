$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    var response = prompt("Easy or Hard")

    if (response === "Easy") {
      alert("Good Luck")
createPlatform(100,125,30,500)
createPlatform(100,625,350,30)
createPlatform(700,580,100,30)
createPlatform(800,580,100,200)
createPlatform(1000,600,100,30)
createPlatform(1300,370,100,30)
createPlatform(1200,500,100,30)
createPlatform(100,350,1000,30)
createPlatform(200,220,100,30)
createPlatform(630,220,100,30)
createPlatform(900,220,100,30)
createPlatform(1000,220,30,150)
createPlatform(450,220,30,150)
createPlatform(100,100,100,30)
createPlatform(400,100,800,30)
createPlatform(100,0,30,100)
createCannon("bottom", 1000, 2000);
    createCannon("left", 600, 3000);
    createCannon("right",250, 3000);
    }

    if (response === "Hard") {
      alert("Good Luck")
createPlatform(100,125,30,500)
createPlatform(100,625,350,30)
createPlatform(700,580,100,30)
createPlatform(800,580,100,200)
createPlatform(1000,600,100,30)
createPlatform(1300,370,100,30)
createPlatform(1200,500,100,30)
createPlatform(100,350,1000,30)
createPlatform(200,220,100,30)
createPlatform(630,220,100,30)
createPlatform(900,220,100,30)
createPlatform(1000,220,30,150)
createPlatform(450,220,30,150)
createPlatform(100,100,100,30)
createPlatform(400,100,800,30)
createPlatform(100,0,30,100)
createCannon("bottom", 1000, 2000);
    createCannon("left", 600, 1000);
    createCannon("right",250, 1000);
}



    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

createPlatform(100,125,30,500)
createPlatform(100,625,350,30)
createPlatform(700,580,100,30)
createPlatform(800,580,100,200)
createPlatform(1000,600,100,30)
createPlatform(1300,370,100,30)
createPlatform(1200,500,100,30)
createPlatform(100,350,1000,30)
createPlatform(200,220,100,30)
createPlatform(630,220,100,30)
createPlatform(900,220,100,30)
createPlatform(1000,220,30,150)
createPlatform(450,220,30,150)
createPlatform(100,100,100,30)
createPlatform(400,100,800,30)
createPlatform(100,0,30,100)
// TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
  
    createCollectable("max",700,700)
    createCollectable("max",1000,550)
    createCollectable("max",1300,300)
    createCollectable("max",1300,700)
    createCollectable("max",500,300)
    createCollectable("max",700,50)
  
    

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});