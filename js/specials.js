/**
 * Created by crost on 05/04/17.
 */


function Special() {

    var s = 1;
    var radius = 50 * s;
    var n = 4;

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

        if(once < 1){
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
        for (var j = 0; j < Math.random()+50; j++) {
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



    this.circles = function (ctx) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.closePath();
        ctx.fill();

        var radius = 30;
        if (radius < 600) {
            radius += 10;
        }
        else radius = 30;
        for (var i = 0; i < 30; i++) {
            var r = radius*i/2;// + i*40;
            var x = canvas.width / 2 + Math.random() * 8 - 4;
            var y = canvas.height / 2 + Math.random() * 8 - 4;
            ctx.lineWidth = 3;
            var color = getRainbowColor(i);
            ctx.strokeStyle = "rgba(" + color[0] + ", " + color[1] + ", " + color[2] + ", 0.7)"; //lila
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.closePath();
        }

    };



    function getRainbowColor(i) {
        this.frequency = 0.3;
        this.red = Math.floor(Math.sin(this.frequency * ((i+frameCounter) % 32)) * 127 + 128);
        this.green = Math.floor(Math.sin(this.frequency * ((i+frameCounter) % 32) + 2) * 127 + 128);
        this.blue = Math.floor(Math.sin(this.frequency * ((i+frameCounter) % 32) + 4) * 127 + 128);

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
    var iterations = 3;
    var points = [];
    var nextPoints = [];

    var nextX = [];
    var nextY = [];
    var nextX1 = [];
    var nextY1 = [];
    var nextX2 = [];
    var nextY2 = [];
    var nextX3 = [];
    var nextY3 = [];

    //this.setKoordinates = function () {
        for (var i = 0; i < 4; i++) {
            nextX.push(Math.random() * 200 - 100 + canvas.width/2);
            nextY.push(Math.random() * 200 - 100 + canvas.height/2);
            for (var j = 0; j < nextX.length; j++) {
                nextX1.push((Math.random() * 200 - 100 + nextX[i]));
                nextY1.push(Math.random() * 200 - 100 + nextY[i]);
                 /*for (var k = 0; k < 4; k++) {
                    nextX2.push(Math.random() * 50 + nextX1[j]);
                    nextY2.push(Math.random() * 50 + nextY1[j]);
                     /*for (var l = 0; l < nextX2.length; l++) {
                        nextX3.push(Math.random() * 50 + nextX2[k]);
                        nextY3.push(Math.random() * 50 + nextY2[k]);
                    }
                }*/
            }
        }
   // };




    this.draw = function(ctx) {
        for (var i = 0; i < 4; i++) {
            nextX.push(Math.random() * 200 - 100 + canvas.width/2);
            nextY.push(Math.random() * 200 - 100 + canvas.height/2);
            for (var j = 0; j < nextX.length; j++) {
                nextX1.push((Math.random() * 200 - 100 + nextX[i]));
                nextY1.push(Math.random() * 200 - 100 + nextY[i]);
                /*for (var k = 0; k < 4; k++) {
                 nextX2.push(Math.random() * 50 + nextX1[j]);
                 nextY2.push(Math.random() * 50 + nextY1[j]);
                 /*for (var l = 0; l < nextX2.length; l++) {
                 nextX3.push(Math.random() * 50 + nextX2[k]);
                 nextY3.push(Math.random() * 50 + nextY2[k]);
                 }
                 }*/
            }
        }
        for (var iter = 0; iter < 4; iter++) {


            ctx.beginPath();
            ctx.strokeStyle = "#ffffff";
            ctx.moveTo(canvas.width/2, canvas.height/2);
            ctx.lineTo(nextX[iter], nextY[iter]);
            ctx.stroke();
            ctx.closePath();
            console.log(+nextX[iter]+","+ nextY[iter]);

            for (var a = 0; a < nextX.lengt; a++) {

                ctx.beginPath();
                ctx.strokeStyle = "#ffffff";
                ctx.moveTo(nextX[iter], nextY[iter]);
                ctx.lineTo(nextX1[a], nextY1[a]);
                ctx.stroke();
                ctx.closePath();

                /* for (var b = 0; b <4; a++) {

                    ctx.beginPath();
                    ctx.strokeStyle = "#ffffff";
                    ctx.moveTo(nextX1[a], nextY1[a]);
                    ctx.lineTo(nextX2[b], nextY2[b]);
                    ctx.stroke();
                    ctx.closePath();
                    for (var c = 0; c < nextX2.length; c++) {

                        ctx.beginPath();
                        ctx.strokeStyle = "#ffffff";
                        ctx.moveTo(nextX[b], nextY[b]);
                        ctx.lineTo(nextX1[c], nextY1[c]);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }*/
            }
        }
        //g = 0;
        //return [nextX, nextY];
    };

    // for (var i = 0; i < iterations; i++) {

    //drawLine(canvas.width / 4, canvas.height / 2);
    //drawLine(3*canvas.width / 4, canvas.height / 2);
    /*
     for (var i = 0; i < 4; i++) {
     points = drawLine(nextX[i], nextY[i]);
     for (var j = 0; j < 4; j++) {
     points = drawLine(nextX[i], nextY[i]);//nextPoints = drawLine(points[0], points[1]);
     for (var g = 0; g < 3; g++) {
     // points = drawLine(nextX[i], nextY[i]);//ar nextNextPoints = drawLine(nextPoints[0], nextPoints[1]);
     }
     }
     }*/

    /*    for(var j = 0; j< iterations; j++){
     //console.log("tree x ="+nextPoints[0]+", "+ nextPoints[1]);
     points = drawLine(nextPoints[0], nextPoints[1]);
     for(var g = 0; g< iterations; g++){
     //console.log("tree x ="+points[0]+", "+ nextPoints[1]);
     points = drawLine(points[0], points[1]);

     }
     }*/
} //ende random tree


