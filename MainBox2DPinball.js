/**
 * Created by franklinhc on 9/12/15.
 */
document.onkeydown=function(){keyInput()};
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
var myBall2;
var ballCount = 0; //anzahl der Bälle, die gespielt werden
var ballLimit = 5;
var ballPower = 0;

//Variable für alle "krummen" Wände
var mySurface;
var myBondary = [];
var myBuoys = [];

//images
var backgroundImage;
var logo;
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
var drawBalls = true;
var collisions = 0;
var kCollisions= 0;
var collision1, collision2;

var player1, player2, name; //instance of class Player
var activePlayer; //stores the last player who hit the ball
var p1StartPos = [];
var p2StartPos = [];
var points, goalPoints;
var highscore;
var gameOver = false;
var start;
var startScreen = true;

var specials;
//specials
var blackHole1, blackHole2;
var blackHole1X, blackHole1Y,blackHole2X, blackHole2Y;
var imgBlackHole;





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
    backgroundImage.src = "img/17-04-04Marine.png";
    start = new StartScreen();

    //die schwarzen Löcher, die den Ball verschwinden lassen
    imgBlackHole = new Image();
    imgBlackHole.src ="img/trippy-s.gif"
    blackHole1X = 400;
    blackHole1Y = 100;
    blackHole2X = canvas.width - 400;
    blackHole2Y = canvas.height - 100;
    //blackHole1 = new Box2DKCircle(blackHole1X, blackHole1Y, 1, true);
    //blackHole2 = new Box2DKCircle(blackHole2X, blackHole2Y, 1, true);


    // adding boundaries
    mySurface = new Surface();
    //side walls
    myBondary.push(new Box2DBondary(0,55, canvas.width, 2));
    myBondary.push(new Box2DBondary(0, 70, 514, 2));
    myBondary.push(new Box2DBondary(513, 55, 2, 15));
    myBondary.push(new Box2DBondary(556, 55, 2, 15));
    myBondary.push(new Box2DBondary(790, 70, 230, 2));
    myBondary.push(new Box2DBondary(0, canvas.height - 53, canvas.width, 2));
    myBondary.push(new Box2DBondary(0, canvas.height - 68, 514, 2));
    myBondary.push(new Box2DBondary(790 , canvas.height - 68, 230, 2));
    myBondary.push(new Box2DBondary(513, canvas.height-55, 2, 15));
    myBondary.push(new Box2DBondary(556, canvas.height-55, 2, 15));
    //left side
    myBuoys.push(new Box2DKCircle(207, 645, 17, true));
    myBuoys.push(new Box2DKCircle(280, 600, 20, true));
    myBuoys.push(new Box2DKCircle(232, 529, 17, true));
    //right side
    myBuoys.push(new Box2DKCircle(822, 127, 17, true));
    myBuoys.push(new Box2DKCircle(741, 170, 20, true));
    myBuoys.push(new Box2DKCircle(795, 240, 17, true));

    // creating windmill & ball
    myMotor1 = new WindMill(canvas.width/2, canvas.height/2);
    myBall = new Box2DCircle(canvas.width/2+10, 64, 10);


    //from where the ball will be pulled in the game
    p1StartPos = [canvas.width/2+10, 64];
    p2StartPos = [canvas.width/2 +10, canvas.height - 55];
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

    // sounds
    collision1 = document.createElement('AUDIO');
    collision1.src="audio/poing.mp3";

    collision2 = document.createElement('AUDIO');
    collision2.src="audio/witt.mp3";

    name = window.prompt("Player 1: please enter your name", "Player 1");
    player1 = new Player(name);
    name = window.prompt("Player 2: please enter your name", "Player 2");
    player2 = new Player(name);
    activePlayer = player1;

   // window.alert("beim unteren Paddle mit negativem Winkel arbeiten??? ");


    //amount of points u get per colision
    points = 20;
    goalPoints = 50;
    highscore = new Highscore();

    //specials = new Special();


    // collision listener
    var listener = new Box2D.Dynamics.b2ContactListener;
    listener.BeginContact = function (contact) {
        var a = contact.GetFixtureA().GetBody().GetUserData();
        var b = contact.GetFixtureB().GetBody().GetUserData();
        // between particles
        if(a instanceof Box2DCircle && b instanceof Box2DCircle) {
            if (a instanceof Box2DCircle) a.alpha= 0.0;
            if (b instanceof Box2DCircle) b.alpha= 0.0;
            collision1.play();
            collisions ++;

            if (activePlayer === player1){
                player1.addToScore(points);
            }
            else if (activePlayer === player2){
                player2.addToScore(points);
            }
        }
        // between one particle and the kParticle
        if((a instanceof Box2DKCircle && b instanceof Box2DCircle)||(a instanceof Box2DCircle && b instanceof Box2DKCircle)) {
            if (a instanceof Box2DCircle) a.alpha= 0.8;
            if (b instanceof Box2DCircle) b.alpha= 0.8;
            console.log("hit a kCircle");
            collision2.play();
            kCollisions ++;
            console.log("hit kCircle")
            //when ball hits the player's kCircle, player is set as activePlayer
            if (myBall.miX < 140) {
            activePlayer = player1;
            console.log("active player: "+player1.name);
            }
            else if (myBall.miX > 879) {
                activePlayer = player2;
                console.log("active player: "+player1.name);

            }
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
    ctx.drawImage(imgBlackHole, blackHole1X-40, blackHole1Y-40);
    ctx.drawImage(imgBlackHole, blackHole2X-40, blackHole2Y-40);
    ctx.beginPath();
    ctx.fillStyle = "#2e2e2e";
    ctx.arc(blackHole1X, blackHole1Y, 10, 0, 2*Math.PI);
    ctx.arc(blackHole2X, blackHole2Y, 10, 0, 2*Math.PI);
    ctx.closePath();
    ctx.fill();

    //specials.drawTrippy(ctx);
    //specials.randomTree(ctx);
    //specials.tunnelLine(ctx);

    //side bondaries
    for (var i = 0; i < myBondary.length; i++){
        myBondary[i].draw(ctx);
    }
    for(var i = 0; i < myBuoys.length; i++){
        myBuoys[i].draw(ctx);
    }

    //startScreem
    start.draw(ctx);

    //walls made in Surface
    //mySurface.draw(ctx);

    //windmill
    myMotor1.draw(ctx);

    //player controllers
    if (paddleIsActive){
        if(drawPaddles){
            var mill = new Mill(60, 280, 2*Math.PI/8, 5*Math.PI/8, 1);
            pLeftPaddles.push(mill);
            var mill = new Mill(60, canvas.height - 280, -(5*Math.PI/8 + 0.1), -(2*Math.PI/8 + 0.1),  -1);//-5*Math.PI/8, -Math.PI/4, -1);//(10*Math.PI/8), (12*Math.PI/8));
            pLeftPaddles.push(mill);
            //right side paddles
            var mill = new Mill(canvas.width-60, 280, 3*Math.PI/8, 3*Math.PI/4,  -1);//5*Math.PI/8, 2*Math.PI/8, -1);
            pRightPaddles.push(mill);
            var mill = new Mill(canvas.width-60, canvas.height - 280, -3*Math.PI/4, -3*Math.PI/8,  1);//-5*Math.PI/8, -Math.PI/4, -1);//(10*Math.PI/8), (12*Math.PI/8));
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
            //console.log("paddle"+i+".angle: "+pLeftPaddles[i].myAngle);
        }

        //console.log("paddle"+1+".angle: "+pLeftPaddles[1].myAngle);
         if (pLeftPaddles[0].myAngle <= 0.9 && pLeftPaddles[0].shot == true) {
                pLeftPaddles[0].shoot(1.0);
            }

        if (pLeftPaddles[1].myAngle <= 0.9 && pLeftPaddles[1].shot == true){
            pLeftPaddles[1].shoot(-1.0);
        }
        //console.log("paddle0.angle: "+pLeftPaddles[0].myAngle);
        //console.log("paddle1.angle: "+pLeftPaddles[1].myAngle);

        if (pRightPaddles[0].myAngle >= 2.2 && pRightPaddles[0].shot == true) {
            pRightPaddles[0].shoot(-1.0);
            //console.log("RightPaddle0.angle: "+pRightPaddles[0].myAngle);
        }

        if (pRightPaddles[1].myAngle >= 2.2 && pRightPaddles[1].shot == true){
            pRightPaddles[1].shoot(1.0);
            //console.log("RightPaddle1.angle: "+pRightPaddles[1].myAngle);
        }



    }
    else {
        // player drawing & moves; für Bewegung der Kreise
        if(drawBalls){
            playerLeft = new Box2DKCircle(mouseX, mouseY, 40);
            playerRight = new Box2DKCircle(mouseX, mouseY, 40);
            drawBalls = false;
        }
        playerLeft.draw(ctx);
        playerRight.draw(ctx);
        playerLeft.setLocation(100, yPosition);
        playerRight.setLocation(900, xPosition);
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

    if (ballCount < ballLimit) {
        //draw ball and define gravity settings
        myBall.draw(ctx);

        ballActions();


    }
    else{
        if(player1.extraBall >0){

        }
        if(!gameOver) {
            highscore.set(player1.name, player2.name, player1.score, player2.score);
            gameOver = true;
        }
        highscore.draw(ctx);
        //endOfGame();
    }


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

    ctx.fillText("Player1: "+ player1.name+" - " +player1.score+" points. Player2: "+ player2.name+" - " +player2.score+" points.", 10, canvas.height-5);

    world.Step(
        1 / 60   //frame-rate
        ,  10       //velocity iterations
        ,  10       //position iterations
    );

    // frameRate calculating
    frameTime+= (thisFrameTime - frameTime) / filterStrength;
    lastLoop = thisLoop;
    var fpsOut = document.getElementById('frameRate');
    fpsOut.innerHTML = "current frame = " +frameCounter+ "   currente frame rate = "+(1000/frameTime).toFixed(1) + " fps";
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

    switch (e.keyCode){

        case 66: //b-key for ball
            ballPower += 1;
            shootBall();
            break;

        case 75: //k-Taste für Konfetti
            explosion(mouseX, mouseY);
            //explosion();
            //explosion();
            break;
        case 76: // l key
            if (paddleIsActive) {
                console.log("l-key pressed");
                pRightPaddles[1].shoot(-1.0); //rechter Spieler unteres Paddle
            }
            else  xPosition += 20;
            break;
        case 79: //o-key
            if (paddleIsActive) {
                console.log("o-key pressed");
                pRightPaddles[0].shoot(1.0); //rechter Spieler oberes Paddle
            }
            else xPosition -= 20;
            break;

        //case 80: //p-Taste für paddle links oben
            //break;

        case 83: //s-key handle left paddle
            if (paddleIsActive) {
                console.log("s-key pressed");
                pLeftPaddles[1].shoot(1.0);//paddleMove(pLeftPaddles[0]);
            }
            else {
                yPosition += 20; //linker spieler
            }
            break;

        case 87: // w key
            if (paddleIsActive) {
                console.log("w-key pressed");
                pLeftPaddles[0].shoot(-1.0); //linker Spieler oberes Paddle
            }
            else {
                yPosition -= 20; //linker spieler
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
        world.SetGravity(new b2Vec2(-15, 0));
    }
    else {
        world.SetGravity(new b2Vec2(15, 0));
    }
    //check if ball is out of canvas, add points to player's score
    if (myBall.miX >= canvas.width + 10) {
        ballCount++;
        player1.addToScore(goalPoints);
        myBall.setLocation(p2StartPos[0], p2StartPos[1]);
    }
    if (myBall.miX <= -10) {
        ballCount++;
        player2.addToScore(goalPoints);
        myBall.setLocation(p1StartPos[0], p1StartPos[1]);
    }

    //check if ball is in the left "ball" (playerView) and call konfetti function 199/122
    var dis1 = getDistance(199, 122, myBall.miX, myBall.miY);
    var dis2 = getDistance(819, 641, myBall.miX, myBall.miY);
    if (dis1 < 10){
        explosion(199, 122, true);
    }
    if (dis2 < 10){
        explosion(819, 641, true);
    }

    var dis1 = getDistance(blackHole1X, blackHole1Y, myBall.miX, myBall.miY);
    var dis2 = getDistance(blackHole2X, blackHole2Y, myBall.miX, myBall.miY);
    if (dis1< 60) {
        myBall.attraction(blackHole1Y, blackHole1Y);
        console.log("Dist blackHole < 60");
    }
    if (dis1 < 10){
        myBall.disappear();
        player1.addToScore(goalPoints);
        player1.addExtraBall(1);
        myBall2 = new Box2DCircle(p1StartPos[0], p1StartPos[1], 10);

    }
    if (dis2 < 60) myBall.attraction(blackHole2X, blackHole2Y);
    if (dis2 < 10){
        myBall.disappear();
        player2.addToScore(goalPoints);
        player1.addExtraBall(1);
        myBall2 = new Box2DCircle(p2StartPos[0], p2StartPos[1], 10);
    }
    //myBall.draw(ctx);
}

function explosion (x,  y, isKonfetti ) {
    console.log("explosion!!! Konfetti = " + isKonfetti);
    if (isKonfetti) {
       // x = mouseX;
       // y = mouseY;
    }
    else {
        if (activePlayer === player1) {
            player1.addToScore(points);
        }
        else if (activePlayer === player2) {
            player2.addToScore(points);
        }
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

function shootBall () {
    var impulsDirection = 0;
    if (myBall.miY < canvas.height/4)  impulsDirection = 90; //1/4 * Math.PI;
    if (myBall.miY > (canvas.height-canvas.height/4))  impulsDirection = -90; //3/4 * Math.PI;

    myBall.applyImpulse(impulsDirection, 15);
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
        if (mouseX > canvas.width / 2 - 50 && mouseX < canvas.width / 2 + 50 && mouseY > canvas.height / 2 + 150 && mouseY < canvas.height / 2 + 200) {
            player1.delete();
            player2.delete();
            ballCount = 0;
            gameOver = false;
            startScreen = true;
        }
    }
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