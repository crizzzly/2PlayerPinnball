/**
 * Created by franklinhc on 9/24/15.
 */

function Player (player) {
    this.name = player;
    this.score = 0;
    this.extraBall = 0;


    this.update = function (points){
        this.score += points

    };

    this.addExtraBall = function (n) {
        this.extraBall += n;
    }

    this.addToScore = function (points){
        this.score += points;
        console.log(this.name+" - "+points+"added to score");
    };

    this.delete = function(){
        this.name = "";
        this.score = 0;

    };

    /*this.draw = function(ctx) {
        for (var i = 0; i < this.myAxes.length; ++i) {
            this.myAxes[i].draw(ctx);
        }
    }; // end draw function */
}
function Highscore () {

    this.p1 = [];
    this.p2 = [];

    //this.score = []; //new Array(5).fill(new Array(2)); new Array(10);/
    canvas.addEventListener('mouseup', this.reload);
    /*for (var i = 0; i < this.score.length; i++){
     this.score[i] = new Array(2);
     }*/
    this.set = function (p1, p2, p1Points, p2Points) {
        this.p1 = [p1, p1Points];
        this.p2 = [p2, p2Points];
        /*score.push(this.p1);
         score.push(this.p2);
         this.p1 = [p1, p1Points];
         this.p2 = [p2, p2Points];
         this.score.push(this.p1);//this.p1);//
         this.score.push(this.p2);//this.p2);//[p2, p2Points]  */
        console.log("p1: " + p1 + ", points: " + p1Points);
        console.log("p2: " + p2 + ", points: " + p2Points);
        //console.log("this.score.length: "+this.score.length);

        /* score.sort(function(a,b) {
         if (a[1] == b[1])
         return a[0] < b[0] ? -1 : 1;
         return a[1] < b[1] ? 1 : -1;
         }
         );*/
    };

    this.draw = function (ctx) {
        //Highscore rect
        var alpha = 0.8;
        ctx.save();
        ctx.fillStyle = "rgba(50, 50, 50, " + alpha + ")";
        ctx.strokeStyle = "rgba(0, 0, 0, " + alpha + ")";
        ctx.beginPath();
        ctx.translate(canvas.width / 2 - 250, canvas.height / 2 - 250);
        ctx.rect(0, 0, 500, 500);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle = "#bbbbbb";
        ctx.font = "normal 11px Roboto-Medium";

        /* for (var i = 0; i < score.length; i++) {
         var yPos = i * 20;
         ctx.fillText((i + 1) + ": " + score[i][0] + "  :  " + score[i][1], 50, (200 + yPos));
         }*/

        //players in score
        ctx.fillText("1.: " + this.p1[0] + "  :  " + this.p1[1] + " Punkte", 100, 100);
        ctx.fillText("2.: " + this.p2[0] + "  :  " + this.p2[1] + " Punkte", 100, 120);

        // ctx.restore();
        //Button for loading new game
        //ctx.save();
        ctx.beginPath();
        ctx.translate(200, 400);
        ctx.rect(0, 0, 100, 50);
        ctx.fillStyle = "rgba(30, 30, 30, " + alpha + ")";
        ctx.strokeStyle = "rgba(0, 0, 0, " + alpha + ")";
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = "rgba(187, 187, 187, 1)";
        ctx.fillText("New Game?", 210, 410);
        ctx.closePath();
        ctx.restore();
    };
//ctx.translate(200, 400);
    //ctx.translate(canvas.width/2-250, canvas.height/2-250);
    this.reload = function (mouseX, mouseY) {
        if (mouseX > canvas.width / 2 - 50 && mouseX < canvas.width / 2 + 50 && mouseY > canvas.height / 2 + 150 && mouseY < canvas.height / 2 + 200) {
            player1.delete();
            player2.delete();
            gameOver = false;
            startScreen = true;
        }
    }
}

    function StartScreen () {
        canvas.addEventListener('mouseup', this.load);
        this.draw = function (ctx) {
            if (startScreen) {
                ctx.save();
                ctx.beginPath();
                //großes Rechteck
                ctx.translate(canvas.width / 2 - 250, canvas.height / 2 - 250);
                ctx.rect(0, 0, 500, 500);
                ctx.strokeStyle = "#000000";
                ctx.fillStyle = "#2e2e2e";
                ctx.stroke();
                ctx.fill();
                //text

                //button links
                ctx.rect(100, 410, 100, 50);

                //button rechts
                ctx.rect(300, 410, 100, 50);
                var alpha = 0.7;
                ctx.fillStyle = "rgba(30, 30, 30, " + alpha + ")";
                ctx.strokeStyle = "rgba(0, 0, 0, " + alpha + ")";
                ctx.stroke();
                ctx.fill();
                ctx.fillStyle = "rgba(187, 187, 187, 1)";

                ctx.fillText("Play with paddles?", 310, 440);
                ctx.fillText("Play with balls?", 110, 440);


                ctx.closePath();
                ctx.restore();

            }//if (startScreen) ende
        };

        this.load = function (mouseX, mouseY) {
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
        };

    }


