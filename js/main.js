
window.onload = function (){
	var game = new Phaser.Game(800, 500, Phaser.AUTO, 'game', { preload: preload, create: create, update: update , render : render});
function preload(){
    game.load.image('rockS', 'assets/rock.png');
    game.load.image('lab','assets/lab.jpg');
    game.load.image('ledge','assets/ledge3.png');
    game.load.image('barS', 'assets/barsprite.png');
    game.load.spritesheet('hamster','assets/hamstersprite.png', 32,32);
}
var rock;
var platforms;
var hamster1;
var hamster2;
var hamster3;
var hamster4;
var hamster5;
var bar;

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	//background
	game.add.sprite(0,0,'lab');
	
	//ledges
	platforms = game.add.group();
	platforms.enableBody = true;

var ground = platforms.create(0,game.world.height-5, 'ledge');	
	ground.scale.setTo(2,1);
	ground.body.immovable = true;
var ledge = platforms.create(30,100,'ledge');	
	ledge.body.immovable = true;
	ledge = platforms.create(30, 200, 'ledge');
	ledge.body.immovable = true;
	ledge = platforms.create(30, 300, 'ledge');
	ledge.body.immovable = true;

	//left bars
	bars= game.add.group();
	bars.enableBody = true;

	bar = bars.create(40,65, 'barS');
	bar.body.immovable = true;

	bar = bars.create(40,165, 'barS');
	bar.body.immovable = true;

	bar = bars.create(40,265, 'barS');
	bar.body.immovable = true;

		//right bars
	bars= game.add.group();
	bars.enableBody = true;

	bar = bars.create(640,65, 'barS');
	bar.body.immovable = true;

	bar = bars.create(640,165, 'barS');
	bar.body.immovable = true;

	bar = bars.create(640,265, 'barS');
	bar.body.immovable = true;

	//middle bars

	bar = bars.create(350,165, 'barS');
	bar.body.immovable = true;
	// 	bar = bars.create(40,30, 'barS');
	// bar.body.immovable = true;

	// bar = bars.create(50,100, 'barS');
	// bar.body.immovable = true;


	//hamster1
	hamster1 = game.add.sprite(32,32,'hamster');
	game.physics.arcade.enable(hamster1);
	hamster1.body.bounce.y = 0.2;
	hamster1.body.gravity.y= 300;
	hamster1.body.collideWorldBounds = true;
	//hamster1 animations
	hamster1.animations.add('down',[0,1,2],10,true);
	hamster1.animations.add('left',[12,13,14],10,true);
	hamster1.animations.add('right',[24,25,26],10,true);
	hamster1.animations.add('up',[36,37,38],10,true);

		//hamster2
	hamster2 = game.add.sprite(32,150,'hamster');
	game.physics.arcade.enable(hamster2);
	hamster2.body.bounce.y = 0.2;
	hamster2.body.gravity.y= 300;
	hamster2.body.collideWorldBounds = true;
	//hamster2 animations
	hamster2.animations.add('down',[3,4,5],10,true);
	hamster2.animations.add('left',[15,16,17],10,true);
	hamster2.animations.add('right',[24+3,25+3,26+3],10,true);
	hamster2.animations.add('up',[36+3,37+3,38+3],10,true);

			//hamster3
	hamster3 = game.add.sprite(640,150,'hamster');
	game.physics.arcade.enable(hamster3);
	hamster3.body.bounce.y = 0.2;
	hamster3.body.gravity.y= 300;
	hamster3.body.collideWorldBounds = true;
	//hamster3 animations
	hamster3.animations.add('down',[0+6,1+6,2+6],10,true);
	hamster3.animations.add('left',[12+6,13+6,14+6],10,true);
	hamster3.animations.add('right',[24+6,25+6,26+6],10,true);
	hamster3.animations.add('up',[36+6,37+6,38+6],10,true);
	//hamster4
	hamster4 = game.add.sprite(32,240,'hamster');
	game.physics.arcade.enable(hamster4);
	hamster4.body.bounce.y = 0.2;
	hamster4.body.gravity.y= 300;
	hamster4.body.collideWorldBounds = true;
	//hamster4 animations
	hamster4.animations.add('down',[0,1,2],10,true);
	hamster4.animations.add('left',[12+9,13+9,14+9],10,true);
	hamster4.animations.add('right',[24+9,25+9,26+9],10,true);
	hamster4.animations.add('up',[36,37,38],10,true);
	//rock
	rock = game.add.sprite(game.world.width/2,game.world.height-150,'rockS');
    // rock.anchor.set(0.5);
    rock.inputEnabled = true;
    rock.input.enableDrag(true);

    // // //  Drag events
    // rock.events.onDragStart.add(dragStart);
    // rock.events.onDragUpdate.add(dragUpdate);
    // rock.events.onDragStop.add(dragStop);


}


function update() {
		//hamster 1
	    game.physics.arcade.collide(hamster1, platforms);
	    if(hamster1.body.x > 600){

	    	hamster1.body.velocity.x = -100;
	    	hamster1.animations.play('left');
	    }else if (hamster1.body.x < 68){

	    	hamster1.body.velocity.x = 100;
	    	hamster1.animations.play('right');
	    }
	    //hamster 2
	      game.physics.arcade.collide(hamster2, platforms);
	    if(hamster2.body.x > 320){

	    	hamster2.body.velocity.x = -100;
	    	hamster2.animations.play('left');
	    }else if (hamster2.body.x < 68){

	    	hamster2.body.velocity.x = 100;
	    	hamster2.animations.play('right');
	    }

	    //hamster3
	      game.physics.arcade.collide(hamster3, platforms);
	    if(hamster3.body.x < 360){

	    	hamster3.body.velocity.x = 100;
	    	hamster3.animations.play('right');
	    }else if (hamster3.body.x > 600){

	    	hamster3.body.velocity.x = -100;
	    	hamster3.animations.play('left');
	    }


	    //hamster4
	    game.physics.arcade.collide(hamster4, platforms);
	    if(hamster4.body.x > 600){
	    	hamster4.body.velocity.x = -100;
	    	hamster4.animations.play('left');
	    }else if (hamster4.body.x < 68){

	    	hamster4.body.velocity.x = 100;
	    	hamster4.animations.play('right');
	    }
	    //------for testing new hamster----
	    // if(cursors.left.isDown)
	    // {
	    // 	hamster1.body.velocity.x = -150;
	    // 	hamster1.animations.play('left');
	    // }
	   	// else if(cursors.right.isDown)
	    // {
	    // 	hamster1.body.velocity.x = 150;
	    // 	hamster1.animations.play('right');
	    // }else if (cursors.up.isDown)
	    // {
	    // 	hamster1.animations.play('up');

	    // }else if (cursors.down.isDown)
	    // {
	    // 	hamster1.animations.play('down');

	    // }
	    // else
	    // {
	    // 	hamster1.animations.stop();
	    // 	hamster1.frame = stopFrame;
	    // }

	    // // jump

	    // }
}

function dragStart() {

    copySprite.alpha = 1;

}

function dragUpdate(sprite, pointer, dragX, dragY, snapPoint) {

    //  As we drag the ship around inc the angle
    angle += 0.01;

    //  This just circles the copySprite around the sprite being dragged
    copySprite.x = dragSprite.x + 220 * Math.cos(angle);
    copySprite.y = dragSprite.y + 220 * Math.sin(angle);

    //  And this points the copySprite at the current pointer
    copySprite.rotation = game.physics.arcade.angleToPointer(copySprite);

}

function dragStop() {

    copySprite.alpha = 0.5;

}
function render(){
	game.debug.text("this is x " + hamster1.body.x, 50 ,50);
}



}