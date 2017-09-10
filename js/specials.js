/**
 * Created by crost on 05/04/17.
 */


function Special() {

    var s = 1;
    var radius = 50 * s;
    var n = 4;

    this.crackScreen = function(ctx){
      var midX = canvas.width/2;
      var midY = canvas.height/2;


      drawLine = function(startX, startY, endX, endY){
        ctx.beginPath();
        ctx.strokeStyle = "#ffffff";
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.closePath();
      } //end drawLine

      
    }
    //end of crackScreen

    this.drawTrippy = function (ctx) {
        radius = 10 * s;
        if (n < 5) {
            n *= 1.02;
            s *= 1.02;
        }
        else {
            n = 0.1;
            s = 1;
        }


        //background
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "rgba(0, 0, 0,0.7)";
        ctx.rect(0, 0, 1024, 768);
        ctx.fill();
        ctx.closePath();
        //circles
        ctx.fillStyle = "rgba(0, 0, 0,0.0)";
        ctx.lineWidth = 5;
        ctx.strokeStyle = "rgba(66, 00, 99, 0.7)"; //lila
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc((canvas.width / 2 + n * radius), canvas.height / 2, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc((canvas.width / 2 + n * radius), canvas.height / 2 + n * radius, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc((canvas.width / 2), (canvas.height / 2 - n * radius), radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc((canvas.width / 2 - n * radius), (canvas.height / 2 - n * radius), radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc((canvas.width / 2 - n * radius), canvas.height / 2, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc((canvas.width / 2 - n * radius), (canvas.height / 2 + n * radius), radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(canvas.width / 2, (canvas.height / 2 + n * radius), radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc((canvas.width / 2 + n * radius), (canvas.height / 2 + n * radius), radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();


        ctx.restore();
    };

    //End of trippy
    this.tunnels = function (ctx, x, y) {
        var mX = x; //canvas.width / 2;
        var mY = y; //canvas.height / 2;

        var pX = [];
        var pY = [];

        var mX1 = [];
        var mY1 = [];

        var pX2 = [];
        var pY2 = [];

        var r = 150;
        var once = 0;

        if (once < 1) {
            for (var i = 0; i < 360; i++) {
                r = Math.random() * 370 + 200;
                pX.push(r * Math.cos(i * 2 * Math.PI / 360) + mX);
                pY.push(r * Math.sin(i * 2 * Math.PI / 360) + mY);

                r = Math.random() * 30;
                mX1.push(r * Math.cos(i * 2 * Math.PI / 360) + mX);
                mY1.push(r * Math.sin(i * 2 * Math.PI / 360) + mY);
                once++;
            }
            once = true;
        }
        //if(Math.random()<0.2) {
        for (var j = 0; j < Math.random() + 50; j++) {
            //
            var iter = Math.floor(Math.random() * 359);
            var color = getRainbowColor(j);
            ctx.beginPath();
            ctx.strokeWidth = 3;
            ctx.strokeStyle = "rgba(" + color[0] + "," + color[1] + "," + color[2] + ", 1)";
            ctx.moveTo(mX, mY);//mX1[iter], mY1[iter]);
            ctx.lineTo(pX[iter], pY[iter]);
            ctx.stroke();
            ctx.closePath();
        }
        //}
    };

    this.drawFlowerOfLife = function (ctx) {
        ctx.beginPath();
        var alpha = 0.3;
        var pointX = [];
        var pointY = [];
        ctx.fillStyle = "rgba (50, 50, 50, 50, " + alpha + ")";
        ctx.DrawRect(0, 0, canvas.width, canvas.height);
        ctx.closePath();
        alpha = 0;
        var mX = canvas.width / 2;
        var mY = canvas.height / 2;
        var r = 50;
        ctx.beginPath()
        ctx.StrokeStyle = "black";
        ctx.fillStyle = "rgba (50, 50, 50, 50, " + alpha + ")";

        ctx.DrawCircle(mX, mY, r);
        getPointsOnCircle(mX, mY, r, 6);

        for (var i = 0; i < points.length; i++) {
            ctx.DrawCircle(pointX[i], pointY[i], r);
            getPointsOnCircle(pointX[i], pointY[i], r, 6);
        }

        ctx.closePath();

        getPointsOnCircle = function (mX, mY, r, anzahl) {
            for (var i = 0; i <= anzahl; i++) {
                pointX[i] = (rx * Math.cos(i * Math.PI / anzahl)) + rx;
                pointY[i] = -(ry * Math.sin(i * Math.PI / anzahl)) + ry;
            }
        }
    };

    this.blackHole = function (x, y, ballX, ballY) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.DrawCircle(x, y, 10);

        // var
    };


    this.circles = function (ctx, x, y, radius) {
        //console.log("called circles");
        var alpha = 0;

        for (var i = 0; i < 8; i++) {
            var rad = radius;
            if (rad < radius) {
                rad *= 6;
                // alpha -=2;
            }
            else rad = radius;
            if(rad-i*4>0) var r = rad-i*4 ;
            else var r = 1; //raduis*i/2;//*i/2;// + i*40;
            ctx.save();
            ctx.lineWidth = 4.5;
            var color = getRainbowColor(i);
            ctx.strokeStyle = "rgba(" + color[0] + ", " + color[1] + ", " + color[2] + ","+alpha+" )"; //lila
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
            alpha+= 0.25;
        }
    };

    this.revCircles = function (ctx, x, y){
        var radius = 20;
        var rad = 1;
        var alpha = 1;
        for (var i = 0; i < 7; i++) {

                //var rad = radius;
                if (rad <= radius) {
                    rad *= 1.2;
                    // alpha -=2;
                }
                else rad = radius;
                if (rad + i * 4 < radius) var r = rad + i * 4;
                else var r = radius; //raduis*i/2;//*i/2;// + i*40;
                ctx.save();
                ctx.lineWidth = 2;
                var color = getRainbowColor(i);
                ctx.strokeStyle = "rgba(" + color[0] + ", " + color[1] + ", " + color[2] + ","+alpha+")"; //lila
                ctx.beginPath();
                ctx.arc(x, y, r, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();

                alpha *= 0.6

        }
    };



    function getRainbowColor(i) {
        this.frequency = 0.3;
        this.red = Math.floor(Math.sin(this.frequency * ((i + frameCounter) % 32)) * 127 + 128);
        this.green = Math.floor(Math.sin(this.frequency * ((i + frameCounter) % 32) + 2) * 127 + 128);
        this.blue = Math.floor(Math.sin(this.frequency * ((i + frameCounter) % 32) + 4) * 127 + 128);

        return [this.red, this.green, this.blue];
    }

    /*
     function getXPointsOnCircle(x, r, anzahl) {
     var point = [];
     for (var i = 0; i < anzahl; i++) {
     point[i] = (x * Math.cos(i * Math.PI / anzahl)) + r;
     }
     return point;
     }

     function getYPointsOnCircle(r, y, anzahl) {
     var point = [];
     for (var i = 0; i < anzahl; i++) {
     point[i] = (y * Math.cos(i * Math.PI / anzahl)) + r;
     }
     return point;

     }*/
}
this.RandomTree = function () {

        var iterations = 4;
        var points = [];
        var nextPoints = [];
        var points2 = [];



        this.x = canvas.width/2;
        this.y = canvas.height/2;

        function drawLine(x, y) {
            var nextX = x + Math.random() * 40 - 20;
            var nextY = y + Math.random() * 40 - 20;
            ctx.beginPath();
            ctx.strokeStyle = "#ffffff";
            ctx.moveTo(x, y);
            ctx.lineTo(nextX,nextY);
            ctx.stroke();
            ctx.closePath();
            return [nextX, nextY];
        }
this.draw = function (ctx, x, y) {


        for (var i = 0; i < iterations; i++) {
            nextPoints = drawLine(x, y);

            for(var j = 0; j< iterations-2; j++){
                //console.log("tree x ="+nextPoints[0]+", "+ nextPoints[1]);
                points = drawLine(nextPoints[0], nextPoints[1]);
                for (var k = 0; k<2; k++){
                    //points2 = drawLine(points[0], points[1]);
                }

            }
        }


    };
};


//} //ende random tree
