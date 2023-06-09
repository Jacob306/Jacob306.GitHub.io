// setup variables
const walkAcceleration = 2.5; // how much is added to the speed each frame
const gravity = 0.5; // how much is subtracted from speedY each frame
const friction = 1.5; // how much the player is slowed each frame
const maxSpeed = 8; // maximum horizontal speed, not vertical
const playerJumpStrength = 12; // this is subtracted from the speedY each jump
const projectileSpeed = 8; // the speed of projectiles

/////////////////////////////////////////////////
//////////ONLY CHANGE ABOVE THIS POINT///////////
/////////////////////////////////////////////////

// Base game variables
const frameRate = 60;
const playerScale = 0.8; //makes the player just a bit smaller. Doesn't affect the hitbox, just the image

// Player variables
const player = {
  x: 50,
  y: 100,
  speedX: 0,
  speedY: 0,
  width: undefined,
  height: undefined,
  onGround: false,
  facingRight: true,
  deadAndDeathAnimationDone: false,
};

let hitDx;
let hitDy;
let hitBoxWidth = 50 * playerScale;
let hitBoxHeight = 105 * playerScale;
let firstTimeSetup = true;

const keyPress = {
  any: false,
  up: false,
  left: false,
  down: false,
  right: false,
  space: false,
};

// Player animation variables
const animationTypes = {
  duck: "duck",
  flyingJump: "flying-jump",
  frontDeath: "front-death",
  frontIdle: "front-idle",
  jump: "jump",
  lazer: "lazer",
  run: "run",
  stop: "stop",
  walk: "walk",
};
let currentAnimationType = animationTypes.run;
let frameIndex = 0;
let jumpTimer = 0;
let duckTimer = 0;
let DUCK_COUNTER_IDLE_VALUE = 14;
let debugVar = false;

let spriteHeight = 0;
let spriteWidth = 0;
let spriteX = 0;
let spriteY = 0;
let offsetX = 0;
let offsetY = 0;

// Platform, cannon, projectile, and collectable variables
let platforms = [];
let cannons = [];
const cannonWidth = 118;
const cannonHeight = 80;
let projectiles = [];
const defaultProjectileWidth = 24;
const defaultProjectileHeight = defaultProjectileWidth;
const collectableWidth = 40;
const collectableHeight = 40;
let collectables = [];

// canvas and context variables; must be initialized later
let canvas;
let ctx;

// setup function variable
let setup;

let halleImage;
let animationDetails = {};

var collectableList = {
  database: { image: "images/collectables/database.png" },
  diamond: { image: "images/collectables/diamond-head.png" },
  grace: { image: "images/collectables/grace-head.png" },
  kennedi: { image: "images/collectables/kennedi-head.png" },
  max: { image: "data:image/png;base64,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"},
  steve: { image: "images/collectables/steve-head.png" },
};
