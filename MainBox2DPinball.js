 /**
 * Created by franklinhc on 9/12/15.
 */
 var keydown = true;
document.onkeydown=function(){
    keydown = true;
    keyInput()
};
document.onkeyup = function(){
    keydown = false;
    keyInput()
}
window.onload = onReady; // first function call

// mouse position any time
var mouseX, mouseY;

var frameCounter;
var canvas;
var ctx;
// for frame rate
var filterStrength = 20;
var frameTime = 0, lastLoop = new Date, thisLoop;

// box2D world
var world;
var SCALE = 30;
var myBall;
var ballCount = 0; //anzahl der Bälle, die gespielt werden
var ballLimit = 5;
var ballPower = 0;

//Variable für alle "krummen" Wände
var mySurface;
var myWalls = [];
var myBuoys = [];

//images
var backgroundImage;
var coin = [];
var coinX = [];
var coinY = [];
var life = [];

var konfetti = [];

//Windmill
var myMotor1;


//players (KCircle) und Variablen für Sounds
var yPosition;
var xPosition;
var playerLeft, playerRight;
var pLeftPaddles = [];
var pRightPaddles = [];
var paddleIsActive = true;
var drawPaddles = true;
var drawBalls = false;
//sounds
var collisions = 0;
var kCollisions= 0;
var collision1, collision2;
var audioCoin, audioHole, audioStart, audioAbschuss;
var audioBackground;

var player1, player2, name; //instance of class Player
var activePlayer; //stores the last player who hit the ball
var p1StartPos = [];
var p2StartPos = [];
var savePoints = 0;
var points, goalPoints;
var highscore;
var gameOver = false;
var start;
var startScreen = true;

//specials
var specials;
var randomTree;
var specialActive = false;
var specialCount = 1000;
var circleCount = 1000;
var revCircleCount = 1000;
var revCircleCount1 = 1000;
var circleKoords = [0, 0, 0];
var blackHole1, blackHole2;
var blackHole1X, blackHole1Y,blackHole2X, blackHole2Y;
var imgBlackHole;

var resizeActive = false;
var resizeCount = 1000;





// box2D variables
var   b2Vec2 = Box2D.Common.Math.b2Vec2
    , b2BodyDef = Box2D.Dynamics.b2BodyDef
    , b2Body = Box2D.Dynamics.b2Body
    , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    , b2Fixture = Box2D.Dynamics.b2Fixture
    , b2World = Box2D.Dynamics.b2World
    , b2MassData = Box2D.Collision.Shapes.b2MassData
    , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
    , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
    , revoluteJointDef =  Box2D.Dynamics.Joints.b2RevoluteJointDef
    , revoluteJoint =  Box2D.Dynamics.Joints.b2RevoluteJoint
    ;



function onReady() {
    // your inicialization code here  ----------------------------------------------
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    frameCounter = 0;
    canvas.addEventListener('mousedown', pick);
    //canvas.addEventListener('mousemove', pick);
    canvas.addEventListener('mouseup', reload);

    // setup world
    world = new b2World(
        new b2Vec2(0, 0)    //gravity
        ,  true              //allow sleep
    );

    // loading pictures
    backgroundImage = new Image();
    backgroundImage.src = "img/background2.png";
    start = new StartScreen();


    //special effects
    specials = new Special();
    randomTree = new RandomTree();
    //die schwarzen Löcher, die den Ball verschwinden lassen
    imgBlackHole = new Image();
    imgBlackHole.src ="img/blackHole.png";
    blackHole1X = 400;
    blackHole1Y = 75;
    blackHole2X = canvas.width - 450;
    blackHole2Y = canvas.height - 120;




    // adding boundaries
    mySurface = new Surface();
    //linke Seite Startrampe begrenzung
    //myWalls.push(new Box2DBondary(0, 619, 2, 73, 0));
    //rechte Seite
    //myWalls.push(new Box2DBondary(canvas.width-2, 61, 2, 73, 0));

    //left side
    myBuoys.push(new Box2DKCircle(220, 629, 17, true));
    myBuoys.push(new Box2DKCircle(302, 581, 21, true));
    myBuoys.push(new Box2DKCircle(244, 514, 16, true));
    //right side
    myBuoys.push(new Box2DKCircle(806, 140, 17, true));
    myBuoys.push(new Box2DKCircle(720, 182, 21, true));
    myBuoys.push(new Box2DKCircle(776, 253, 16, true));
    //middle left
    myBuoys.push(new Box2DKCircle(311, 228, 17, true));
    myBuoys.push(new Box2DKCircle(380, 270, 28, true));
    myBuoys.push(new Box2DKCircle(298, 300, 20, true));
    //middle right
    myBuoys.push(new Box2DKCircle(canvas.width-325, canvas.height-232, 17, true));
    myBuoys.push(new Box2DKCircle(canvas.width-394, canvas.height-273, 28, true));
    myBuoys.push(new Box2DKCircle(canvas.width-314, canvas.height-306, 20, true));


    //from where the ball will be pulled in the game
    p1StartPos = [101, 723];//[47, 717];
    p2StartPos = [923, 45];
    // creating windmill & ball
    myMotor1 = new WindMill(canvas.width/2, canvas.height/2);
    myBall = new Box2DCircle(p1StartPos[0], p1StartPos[1], 11);


    /*
    für Torwart
     */
    //document.onkeydown=function(){keyInput()};

    // adding kParticle
    mouseX = canvas.width/2;
    mouseY = canvas.height/2;

    //if (paddleIsActive) {
        //left side paddles

    //}

    //für Positionen der Kreise; xPosition bedeutet nicht Bewegung auf xAchse
    yPosition = canvas.height/2;
    xPosition = canvas.height/2;



    //name = window.prompt("Player 1: please enter your name", "Player 1");
    player1 = new Player("Player 1");
    //name = window.prompt("Player 2: please enter your name", "Player 2");
    player2 = new Player("Player 2");
    //activePlayer = player1;*/

   // window.alert("beim unteren Paddle mit negativem Winkel arbeiten??? ");


    //amount of points u get per colision
    points = 20;
    goalPoints = 50;
    highscore = new Highscore();

    //background music
    audioBackground  = document.createElement('AUDIO');
    audioBackground.src = "audio/hintergrund/through space.ogg";

    // sounds
    collision1 = document.createElement('AUDIO');
    collision1.src="audio/poing.mp3";

    collision2 = document.createElement('AUDIO');
    collision2.src="audio/witt.mp3";

    audioCoin = document.createElement('AUDIO');
    audioHole = document.createElement('AUDIO');
    audioStart = document.createElement('AUDIO');
    audioAbschuss = document.createElement('AUDIO');

    audioCoin.src="audio/coins.wav";
    audioHole.src="audio/blackHole.wav";
    audioStart.src="audio/start.wav";
    audioAbschuss.src="audio/abschuss.wav";

    // collision listener
    var listener = new Box2D.Dynamics.b2ContactListener;
    listener.BeginContact = function (contact) {
        var bodyA = contact.GetFixtureA().GetBody().GetUserData();
        var bodyB = contact.GetFixtureB().GetBody().GetUserData();

        //checkCollision(collisionA, collisionB);
        // between ball and paddles
        if(bodyA instanceof Box2DCircle && bodyB instanceof Mill || bodyA instanceof Mill && bodyB instanceof Box2DCircle) {
            //console.log("collision circle & Mill");
           audioAbschuss.play();
            collisions ++;
        }
        // between ball and zylinders
        if((bodyA instanceof Box2DCircle && bodyB instanceof Box2DKCircle)||(bodyA instanceof Box2DKCircle && bodyB  instanceof Box2DCircle)) {
            //if (bodyA.get)
            if(bodyA instanceof Box2DKCircle){
                circleKoords = [bodyA.miX, bodyA.miY, bodyA.radius];
            }
            else circleKoords = [bodyB.miX, bodyB.miY, bodyB.radius];
            savePoints += points;

            circleCount = 0;
            //console.log("collision circle & Kcircle");
            collision2.play();
            kCollisions ++;
        }
        // between ball and walls
        if((bodyA instanceof Box2DCircle && bodyB  instanceof Surface)|| (bodyA instanceof Surface && bodyB instanceof Box2DCircle)) {
            //console.log("collision circle & surface");
            collision2.play();
            kCollisions ++;
        }
    };
    world.SetContactListener(listener);


    draw();
    console.log("ready to go!");
} // end onReady()


// your drawing code here ---------------------------------------------------
function draw () {
    var thisFrameTime = (thisLoop=new Date) - lastLoop;
    // for background
    ctx.drawImage(backgroundImage, 0, 0);
    ctx.drawImage(imgBlackHole, blackHole1X-25, blackHole1Y-25);
    ctx.drawImage(imgBlackHole, blackHole2X-25, blackHole2Y-25);
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    //ctx.arc(blackHole1X, blackHole1Y, 15, 0, 2*Math.PI);
    //ctx.arc(blackHole2X, blackHole2Y, 15, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fill();

    audioBackground.loop = true;
    audioBackground.play();

    if (specialActive) {
       specialCount++;
        if(specialCount < 300) {
            //specials.drawTrippy(ctx);
            //specials.randomTree(ctx);

            // if(frameCounter % 20 == 0)
            specials.tunnels(ctx, myBall.miX, myBall.miY);
        }
        else specialActive = false;
    }
    else specialCount = 0;

    if(resizeActive) {
        if (resizeCount < 300) {
            resizeCount++;
            console.log("resize is active")
        }
        else {
            resizeCount = 0;
            specialActive = false;
        }
    }
    //specials.tunnels(ctx, myBall.miX, myBall.miY);

    //specials.circles();

    if (circleCount < 50){
        specials.circles(ctx, circleKoords[0], circleKoords[1], circleKoords[2]);
        circleCount++;
    }
    if (Math.random()<0.1   ) {
        randomTree.draw(ctx, blackHole1X + 25, blackHole1Y + 25);
        randomTree.draw(ctx, blackHole2X +25, blackHole2Y+25);
    }
    if (Math.random() < 0.01){
        revCircleCount1 = 0;
    }
    if(Math.random()<0.01){
        revCircleCount = 0;
    }
    if(revCircleCount1 < 15) {
        revCircleCount1++;
        specials.revCircles(ctx, 221, 135);
    }
    if (revCircleCount < 15){
        revCircleCount++;
        specials.revCircles(ctx, canvas.width - 221, canvas.height - 135);

    }


    //startScreem
    //start.draw(ctx);

    /*walls made in Surface
    mySurface.draw(ctx);
    for (var i = 0; i < myWalls.length; i++){
        myWalls[i].draw(ctx);
    }*/
    /*
    for (var j = 0; j < myBuoys.length; j++){
        myBuoys[j].draw(ctx);
    }*/

    //windmill
    myMotor1.draw(ctx);

    //player controllers
    if (paddleIsActive){
        if(drawPaddles){
            var mill = new Mill(20, 288, 1*Math.PI/4, 9*Math.PI/16, 1);
            pLeftPaddles.push(mill);
            var mill = new Mill(20, canvas.height - 295, -(9*Math.PI/16 ), -1*Math.PI/4,  -1);//-5*Math.PI/8, -Math.PI/4, -1);//(10*Math.PI/8), (12*Math.PI/8));
            pLeftPaddles.push(mill);
            //right side paddles
            var mill = new Mill(canvas.width-20, 292, 7*Math.PI/16, 3*Math.PI/4, -1); //3*Math.PI/8, 3*Math.PI/4,  -1)
            pRightPaddles.push(mill);
            var mill = new Mill(canvas.width-20, canvas.height - 288, -3*Math.PI/4, -7*Math.PI/16, 1); //-3*Math.PI/4, -3*Math.PI/8,  1);
            pRightPaddles.push(mill);
            // }
            // else {
            //Kreise:
            /*
             playerLeft = new Box2DKCircle(100, canvas.height/2, 40);
             playerRight = new Box2DKCircle(900, canvas.height/2, 40);
             */
            drawPaddles = false;
        }
        for(var i = 0; i < pLeftPaddles.length; i++) {
            pRightPaddles[i].draw(ctx);
            pLeftPaddles[i].draw(ctx);
            //console.log("paddle"+i+".angle: "+pLeftPaddles[0].myAngle);
        }
/*
        //console.log("paddle"+1+".angle: "+pLeftPaddles[1].myAngle);
         if (pLeftPaddles[0].myAngle <= 0.9 && pLeftPaddles[0].shot === true) {
             audioAbschuss.play();
                //pLeftPaddles[0].shoot(1.0);
            }

        if (pLeftPaddles[1].myAngle <= 0.9 && pLeftPaddles[1].shot === true){
            audioAbschuss.play();
            //pLeftPaddles[1].shoot(-1.0);
        }
        //console.log("paddle0.angle: "+pLeftPaddles[0].myAngle);
        //console.log("paddle1.angle: "+pLeftPaddles[1].myAngle);

        if (pRightPaddles[0].myAngle >= 2.2 && pRightPaddles[0].shot === true) {
            audioAbschuss.play();
            pRightPaddles[0].shoot(-1.0);
            //console.log("RightPaddle0.angle: "+pRightPaddles[0].myAngle);
        }

        if (pRightPaddles[1].myAngle >= 2.2 && pRightPaddles[1].shot === true){
            audioAbschuss.play();
            //pRightPaddles[1].shoot(1.0);
            //console.log("RightPaddle1.angle: "+pRightPaddles[1].myAngle);
        }
        */



    }
    else {
        // player drawing & moves; für Bewegung der Kreise
        if(drawBalls){
            playerLeft = new Box2DKCircle(mouseX, mouseY, 35);
            playerRight = new Box2DKCircle(mouseX, mouseY, 35);
            drawBalls = false;
        }
        playerLeft.draw(ctx);
        playerRight.draw(ctx);
        playerLeft.setLocation(60, yPosition);
        playerRight.setLocation(964, xPosition);
        //console.log("xPosition = " + xPosition);
    }

    //creating and drawing coins
    if (Math.random() < 0.01){
        var myCurrCoin = new Image();
        myCurrCoin.src = "img/coin16px.png";
        coin.push(myCurrCoin);
        life.push(1);
    }

    for(var i = 0; i < coin.length; i++){
        var xPos = Math.random()*(canvas.width-200)+100;
        var yPos = Math.random()*(canvas.height-200)+100;
        coinX.push(xPos);
        coinY.push(yPos);

        ctx.globalAlpha = 0.5;
        ctx.drawImage(coin[i], coinX[i], coinY[i]);
        life[i]++;

        //vll auch in ne klasse packen??
        if (life[i] >200){
            coin.splice(i, 1);
            life.splice(i, 1);
        }
        var distance = getDistance(coinX[i], coinY[i], myBall.miX, myBall.miY);

        var minDist = 12;

        if (distance < minDist) {
            explosion(coinX[i], coinY[i], false);
            coin.splice(i, 1);
            //console.log("coin splice");
            life.splice(i, 1);
        }
    }
    ctx.globalAlpha = 1.0;

    /*
    if limit of balls is not reached, draw ball and set gravity.
    check if ball is out of canvas, add the score to the player& put tha ball back in canvas.

    if limit of balls is reached, set value of gameOver to "true", add player and points to the highscore
    draw the highscore.
     */
    drawActualPoints(savePoints, player1.score, player2.score); //left player
    //drawActualPoints(playerLeft.name, savePoints, playerLeft.score);
    if (ballCount < ballLimit) {
        //draw ball and define gravity settings
        myBall.draw(ctx);

        ballActions();


    }
    else{

        if(!gameOver) {
            highscore.set(player1.name, player2.name, player1.score, player2.score);
            gameOver = true;
        }
        highscore.draw(ctx);
        //endOfGame();
    }
    //draw circleReverse where Konfetti shoots



    //draw and remove konfetti
    if (konfetti.length > 0) {
        for (var i = 0; i < konfetti.length; i++) {
            konfetti[i].draw(ctx);

            if (konfetti[i].done()) {
                konfetti.splice(i, 1);
            }
        }
    }

    //circleOfLife(ctx, 0);


    // printing text in canvas
    ctx.fillStyle = "#bbbbbb";
    ctx.font = "normal 11px Roboto-Medium";

   // ctx.fillText("Player1: "+ player1.name+" - " +player1.score+" points. Player2: "+ player2.name+" - " +player2.score+" points.", 10, canvas.height-5);

    world.Step(
        1 / 60   //frame-rate
        ,  10       //velocity iterations
        ,  10       //position iterations
    );


    // frameRate calculating
    frameTime+= (thisFrameTime - frameTime) / filterStrength;
    lastLoop = thisLoop;
    var fpsOut = document.getElementById('frameRate');
    //fpsOut.innerHTML = "current frame = " +frameCounter+ "   currente frame rate = "+(1000/frameTime).toFixed(1) + " fps";
    frameCounter += 1;
    requestAnimFrame(draw);
} //End of draw

// for events  ---------------------------------------------------
function pick(event) {
    mouseX = event.layerX;
    mouseY = event.layerY;
    console.log("mouse x = " + mouseX + "   mouse y = " + mouseY);
}

//Steuerung der Spieler:
function keyInput(e) {
    e = e || window.event;
    if(gameOver || startScreen) reload();


    switch (e.keyCode) {

        case 32: //Space for ball
            if(keydown) {
                ballPower += 10;
            }
            else {
                shootBall(ballPower);
            }
            break;

        case 75: //k-Taste für Konfetti
            explosion(mouseX, mouseY);
            //explosion();
            //explosion();
            break;

        case 79: //"O"
            audioAbschuss.play();
            var dir = 1.0;
            if(!keydown) dir *= -1;
            pRightPaddles[0].shoot(dir); //rechter Spieler oberes Paddle
            break;

        case 76: //"L"
            audioAbschuss.play();
            var dir = 1.0;
            if(keydown) dir *= -1;
            pRightPaddles[1].shoot(dir); //rechter Spieler unteres Paddle
            break;

        case 83: //"S"
            audioAbschuss.play();
            var dir = 1.0;
            if(!keydown) dir *= -1;
            pLeftPaddles[1].shoot(dir); //rechter Spieler unteres Paddle
            break;

        case 87: //"W"
            audioAbschuss.play();
            var dir = 1.0;
            if(keydown) dir *= -1;
            pLeftPaddles[0].shoot(dir); //rechter Spieler unteres Paddle
            break;


        case 38: // rechts key
            if (myBall.miX > 957 && myBall.miY < 101) {
                ballPower += 1;
                shootBall();
            }
            else {
                if (paddleIsActive) {
                    pRightPaddles[1].shoot(-1.0); //rechter Spieler unteres Paddle
                }
            }
            break;
        case 40: //links-key
            if (myBall.miX > 957 && myBall.miY < 101) {
                ballPower += 1;
                shootBall();
            }
            else {
                if (paddleIsActive) {
                    pRightPaddles[0].shoot(1.0); //rechter Spieler oberes Paddle
                }
            }

            break;

        //case 80: //p-Taste für paddle links oben
        //break;

        case 37: //oben -key handle left paddle
            if (myBall.miX < 78 && myBall.miY > 660) {
                ballPower += 1;
                shootBall();
            }
            else {
                if (paddleIsActive) {
                    pLeftPaddles[1].shoot(1.0);//paddleMove(pLeftPaddles[0]);
                }
            }
            break;

        case 39: // unten  key
            if (myBall.miX < 78 && myBall.miY > 660) {
                ballPower += 1;
                shootBall();
            }
            else {
                if (paddleIsActive) {
                    pLeftPaddles[0].shoot(-1.0); //linker Spieler oberes Paddle
                }
            }
            break;
    }
}

//returns the distance of two points
function getDistance(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;
    var distance = Math.sqrt(a * a + b * b);
    return distance;
}

function ballActions() {
    //set gravity of both sides
    if (myBall.miX < canvas.width / 2) {
        world.SetGravity(new b2Vec2(-17, 0));
    }
    else {
        world.SetGravity(new b2Vec2(17, 0));
    }
    //check if ball is out of canvas, add points to player's score
    if (myBall.miX >= canvas.width + 20) {
        myBall.setVelocity(new b2Vec2(0, 0));

        audioStart.play();
        ballCount++;
        player1.addToScore(goalPoints);
        player1.addToScore(savePoints);
        savePoints = 0;;
        myBall.setLocation(p1StartPos[0], p1StartPos[1]);

    }
    if (myBall.miX <= -20) {
        myBall.setVelocity(new b2Vec2(0, 0));
        audioStart.play();
        ballCount++;
        player2.addToScore(goalPoints);
        player2.addToScore(savePoints);
        savePoints = 0;
        myBall.setLocation(p2StartPos[0], p2StartPos[1]);
    }

    //check if ball is in the left "ball" (playerView) and call konfetti function 199/122
    var di1 = getDistance(221, 135, myBall.miX, myBall.miY);
    var di2 = getDistance(canvas.width-221, canvas.height-135, myBall.miX, myBall.miY);
    if (di1 < 20){
        explosion(221, 135);
    }
    if (di2 < 20){
        explosion(canvas.width-221, canvas.height-135);
    }
    // Black Hole
    var dista1 = getDistance(blackHole1X, blackHole1Y, myBall.miX, myBall.miY);
    var dista2 = getDistance(blackHole2X, blackHole2Y, myBall.miX, myBall.miY);
    if (dista1< 50) {
        myBall.attraction(blackHole1Y, blackHole1Y);
        console.log("Dist blackHole < 60");
    }
    if (dista1 < 10){
        audioHole.play();
        myBall.disappear();
        ballLimit++;
        specialActive = true;
        specialCount = 0;
        player1.addToScore(goalPoints);
        player1.addExtraBall(1);
        myBall.setLocation(p1StartPos[0], p1StartPos[1]);
        //myBall2 = new Box2DCircle(p1StartPos[0], p1StartPos[1], 10);

    }
    if (dista2 < 50) myBall.attraction(blackHole2X, blackHole2Y);
    if (dista2 < 20){
        audioHole.play();
        myBall.disappear();
        ballLimit++;
        specialActive = true;
        specialCount = 0;
        player2.addToScore(goalPoints);
        player2.addExtraBall(1);
        myBall.setLocation(p2StartPos[0], p2StartPos[1]);
        //myBall2 = new Box2DCircle(p2StartPos[0], p2StartPos[1], 10);
    }
    //myBall.draw(ctx);

    //resize Ball if Ball is near special place
    var d1 = getDistance(430, 647, myBall.miX, myBall.miY);
    var d2 = getDistance(canvas.width - 430, canvas.height - 647,myBall.miX, myBall.miY);
    if (d1 < 20 || d2 < 20){
        specialCount = 0;
        myBall.resize();
    }
}

function explosion (x,  y, isKonfetti ) {
    audioCoin.play();
    //console.log("explosion!!! Konfetti = " + isKonfetti);
    if (isKonfetti) {
       // x = mouseX;
       // y = mouseY;
    }
    else {

            savePoints+= points;
    }

    var miniSize = Math.random() + 2;
    for (var i = 0; i < 10; i++) {
        var currentObj = new Box2DCircle(x + miniSize, y + miniSize, miniSize);
        var dir;
        if (isKonfetti){
            if (x < 260)  dir = Math.PI/8 + Math.random() - 0.5;
            if (x >771)  dir = 5* Math.PI/8 + Math.random() - 0.5;
            currentObj.applyImpulse(dir, 20);
        }
        konfetti.push(currentObj);
        /*
         var frequency = 0.3;
         konfetti.red = Math.sin(frequency + 0) * 127 + 128;
         konfetti.green = Math.sin(frequency + 2) * 127 + 128;
         konfetti.blue = Math.sin(frequency + 4) * 127 + 128;
         */
        //exploted[i].explosion(mouseX, mouseY);
    }
    if(!isKonfetti){
        for (var i = 0; i < konfetti.length; i++) {
            konfetti[i].explosion(mouseX, mouseY);
        }
    }
    //console.log("mouse x = " + mouseX + "   mouse y = " + mouseY);}
}

function shootBall (ballPower) {

    var impulsDirection = 0;
    var speed = ballPower;
    for(var i = 0; i < konfetti.length; i++){
        if(konfetti[i].miX > 949 && konfetti[i].miY < 98) konfetti[i].applyImpulse(200, speed);
        else if(konfetti[i].miX < 72 && konfetti[i].miY > 669) konfetti[i].applyImpulse(20, speed);
    }
    if (myBall.miX> 949 &&myBall.miY < 98)  impulsDirection = 200; //1/4 * Math.PI;
    else if (myBall.miX < 72 &&myBall.miY > 669)  impulsDirection = 20; //linker Spieler
    else speed = 0;

    myBall.applyImpulse(impulsDirection, speed);
}

function reload () {
    if(startScreen){
        if (mouseY >canvas.height/2+150 &&mouseY < canvas.height / 2 + 200) {
            if (mouseX > canvas.width / 2 - 150 && mouseX < canvas.width / 2 - 50) {
                paddleIsActive = false;
                startScreen = false;

            }
            else if (mouseX < canvas.width / 2 + 150 && mouseX > canvas.width / 2 + 50) {
                paddleIsActive = true;
                startScreen = false;
            }
        }
    }
    if (gameOver) {
        //if (mouseX > canvas.width / 2 - 50 && mouseX < canvas.width / 2 + 50 && mouseY > canvas.height / 2 + 150 && mouseY < canvas.height / 2 + 200) {
            player1.delete();
            player2.delete();
            ballCount = 0;
            ballLimit = 5;
            gameOver = false;
            startScreen = true;
            myBall.setVelocity(new Vec2(0, 0));
            myBall.setLocation(p1StartPos[0], p1StartPos[1]);
       // }
    }
}
/*
function checkCollision(bodyA, bodyB){
    // between ball and paddles
    if(bodyA instanceof Box2DCircle && bodyB instanceof Mill || bodyA instanceof Mill && bodyB instanceof Box2DCircle) {
        console.log("collision circle & Mill");
        collision1.play();
        collisions ++;
    }
    // between ball and zylinders
    if((bodyA instanceof Box2DCircle && bodyB instanceof Box2DKCircle)||(bodyA instanceof Box2DKCircle && bodyB  instanceof Box2DCircle)) {
        console.log("collision circle & Kcircle");
        collision2.play();
        kCollisions ++;
    }
    // between ball and walls
    if((bodyA instanceof Box2DCircle && bodyB  instanceof Surface)|| (bodyA instanceof Surface && bodyB instanceof Box2DCircle)) {
        console.log("collision circle & surface");
        collision2.play();
        kCollisions ++;
    }
}*/

function drawActualPoints( gamePonts,playerPoints1, playerPoints2) {
    ctx.save();
    ctx.fillStyle = "rgba(187, 187, 187, 0.5)";
    ctx.font = "normal 18px Roboto-Medium";

    //left Player
    ctx.save();
    ctx.translate(130, 280);
    ctx.rotate(Math.PI/2);
    ctx.fillText("Player 1: " +playerPoints1+" Points.", 20, 0);
    ctx.fillText("points in current game: " +gamePonts, 0, 30);
    ctx.fillText("Ball No. "+(ballCount+1)+" of "+(ballLimit) , 30, 60);
    ctx.restore();

    ctx.save();
    ctx.translate(canvas.width-130, canvas.height-280);
    ctx.rotate(-Math.PI/2);
    ctx.fillText("Player 2: " +playerPoints2+" Points.", 20, 0);
    ctx.fillText("points in current game: " +gamePonts, 0, 30);
    ctx.fillText("Ball No. "+(ballCount+1)+" of "+(ballLimit) , 30, 60);
    ctx.restore();

    ctx.restore();
}




// for animation request  ---------------------------------------------------
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
        };
})();
