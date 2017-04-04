/**
 * Created by franklinhc on 26/5/16.
 */


function WindMill ( myX, myY ) {
    var paddleWidth = 70;
    var paddleHeight= 5;

    var anchor = new Box2DBoxDual ( myX,  myY,  paddleHeight, paddleHeight, true);
    this.paddle = new Box2DBoxDual ( myX,  myY,  paddleWidth, paddleHeight, false);

    this.anchor_body = anchor.Object.GetBody();
    this.paddle_body = this.paddle.Object.GetBody();
    this.joint = new revoluteJointDef();

    this.joint.Initialize(this.anchor_body, this.paddle_body, this.paddle_body.GetWorldCenter(),this.anchor_body.GetWorldCenter);
    this.joint.maxMotorTorque = 1000;
    this.joint.motorSpeed = 3;
    this.joint.enableMotor = true;
    this.joint.referenceAngle = 0;
    // create joint it self
    world.CreateJoint(this.joint);


    this.draw = function(ctx) {
        ctx.fillStyle = "rgba(0, 150, 0, 1)";
        ctx.beginPath();
        ctx.arc(myX , myY , 3 , 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        this.paddle.draw(ctx);
    };
} // end of WindMill


function Box2DBoxDual ( x,  y,  w, h, locked) {
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    var b2Body = Box2D.Dynamics.b2Body;
    var miX,miY,myAngle;

    var miWidht  = w / SCALE;
    var miHeight = h / SCALE;
    var anchoRect= miWidht*SCALE*2;
    var altoRect = miHeight*SCALE*2;

    this.fixDef = new b2FixtureDef;
    this.fixDef.density = 1.0;
    this.fixDef.friction = 0.5;
    this.fixDef.restitution = 0.3;

    this.bodyDef = new b2BodyDef;
    if(locked) this.bodyDef.type = b2Body.b2_staticBody;  else this.bodyDef.type = b2Body.b2_dynamicBody;

    this.fixDef.shape = new b2PolygonShape;
    this.fixDef.shape.SetAsBox(miWidht, miHeight);

    this.bodyDef.position.x = x/ SCALE;
    this.bodyDef.position.y = y/ SCALE;

    this.Object = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
    this.Object.GetBody().SetUserData(this);

    var miAV = Math.random() * Math.PI;
    this.Object.GetBody().SetAngularVelocity(miAV);


    this.update = function() {
        miX = this.Object.GetBody().GetPosition().x *  SCALE;
        miY = this.Object.GetBody().GetPosition().y * SCALE;
        myAngle = this.Object.GetBody().GetAngle();
    };

    this.draw = function(ctx) {
        this.update();
        var alpha = 0.3;

        ctx.save();
        ctx.fillStyle = "rgba(151, 151, 255, " + alpha + ")";
        ctx.strokeStyle = "rgba(151, 151, 255, 0.9)";

        ctx.beginPath();
        ctx.translate(miX, miY);
        ctx.rotate(myAngle);

        ctx.rect(-anchoRect/2 , -altoRect/2 , anchoRect, altoRect);
        ctx.closePath();

        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };

    this.done = function() {
        if (miY > canvas.height + altoRect || miX < -anchoRect || miX > canvas.width +anchoRect ) {
            world.DestroyBody(this.Object.GetBody());
            return true;
        }
        return false;
    };
}