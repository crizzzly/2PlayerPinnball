/**
 * Created by franklinhc on 26/5/16.
 */


function Mill ( myX, myY, la, ua, dir) {
    var paddleWidth = 50;
    var paddleHeight= 6;
    this.myAngle= 0;



    this.createNewObjects = function(trq, msd, on, la, ua, dir){
        var anchor = new Box2DBoxDual ( myX,  myY,  paddleHeight, paddleHeight, true);
        this.paddle = new Box2DBoxDual ( myX,  myY,  paddleWidth, paddleHeight, false);

        this.anchor_body = anchor.Object.GetBody();
        this.paddle_body = this.paddle.Object.GetBody();
        this.joint = new revoluteJointDef();

        this.joint.Initialize(this.anchor_body, this.paddle_body, this.paddle_body.GetWorldCenter(),this.anchor_body.GetWorldCenter);
        this.joint.maxMotorTorque = 10000;//trq; //standardWert: 100 //10000;//
        this.joint.motorSpeed = msd * dir;
        this.joint.enableMotor = on;
        this.joint.referenceAngle = 0;// refAng;//Math.PI/4;//Math.PI/2;
        this.paddle.Object.GetBody().SetUserData(this);

        // offset
        this.joint.localAnchorB.Set(-paddleWidth/2/SCALE,0) ;

        this.joint.enableLimit = true;
        this.joint.lowerAngle = la;//refAng;//-Math.PI/4; la;//
        this.joint.upperAngle = ua;//5*Math.PI/8 - refAng;// 5*Math.PI/8; //0;ua;//
        this.shot = false;

        // create joint it self
        this.jointPaddle = world.CreateJoint(this.joint);

        this.motor = Object.create(revoluteJoint.prototype);
        this.motor = this.jointPaddle;
    };

    this.createNewObjects(100,4,true, la, ua, dir);

    this.destroy = function () {
        world.DestroyBody(this.paddle.Object.GetBody());
        //this.paddle.Object.GetBody().SetPosition(posAhora);
    };

    this.shoot = function(ns) {
        var speed = ns*15;
        this.motor.SetMotorSpeed(speed);//*msd);
        //console.log("angle in shoot: "+this.myAngle);
        //console.log("motorSpeed in shoot: "+(speed));
        this.shot = !this.shot;
        if (this.myAngle <= 0.8) {
        //    this.motor.SetMotorSpeed(-ns * 5);//*msd);

            //console.log("&back");
        }
        //console.log("angle after shoot: "+this.myAngle);
        //this.motor.SetMotorSpeed(-ns * 5);//*msd);
    };

    this.changeSpeed = function(ns) {
        this.motor.SetMotorSpeed(ns *4);//*msd);
        //console.log("motorSpeed: "+ns);
    };

    this.stopMotor = function() {
        this.motor.SetMotorSpeed(0);
        //console.log("motorSpeed: 0");
    };


    this.draw = function(ctx) {
        var ang = this.motor.GetJointAngle();
        this.myAngle = Math.abs(ang % (Math.PI*2));
        //console.log("paddle angle: "+this.myAngle);
        //console.log(" ang ya normalizado ------->" + this.myAngle);

        ctx.fillStyle = "rgba(0, 150, 0, 1)";
        ctx.beginPath();
        ctx.arc(myX , myY , 3 , 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        this.paddle.draw(ctx);

        /*console.log("Lower Angle: "+this.joint.lowerAngle);
        console.log("Upper Angle: "+this.joint.upperAngle);
        console.log("La: "+la);
        console.log("Ua: "+ua); */
    };


}