window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
<<<<<<< HEAD
    
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        // Load an image and call it 'logo'.
        game.load.image( 'logo', 'assets/phaser.png' );
    }
    
    var bouncy;
    
    function create() {
        // Create a sprite at the center of the screen using the 'logo' image.
        bouncy = game.add.sprite( game.world.centerX, game.world.centerY, 'logo' );
        // Anchor the sprite at its center, as opposed to its top-left corner.
        // so it will be truly centered.
        bouncy.anchor.setTo( 0.5, 0.5 );
        
        // Turn on the arcade physics engine for this sprite.
        game.physics.enable( bouncy, Phaser.Physics.ARCADE );
        // Make it bounce off of the world bounds.
        bouncy.body.collideWorldBounds = true;
        
        // Add some text using a CSS style.
        // Center it in X, and position its top 15 pixels from the top of the world.
        var style = { font: "25px Verdana", fill: "#9999ff", align: "center" };
        var text = game.add.text( game.world.centerX, 15, "Build something awesome.", style );
        text.anchor.setTo( 0.5, 0.0 );
    }
    
    function update() {
        // Accelerate the 'logo' sprite towards the cursor,
        // accelerating at 500 pixels/second and moving no faster than 500 pixels/second
        // in X or Y.
        // This function returns the rotation angle that makes it visually match its
        // new trajectory.
        bouncy.rotation = game.physics.arcade.accelerateToPointer( bouncy, this.game.input.activePointer, 500, 500, 500 );
    }
=======

	var game = new Phaser.Game(700, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update, render : render});

	function preload() {
		game.load.image('sky', 'assets/sky.png');
		game.load.image('ground', 'assets/platform.png');
		game.load.image('star', 'assets/star.png');
		game.load.spritesheet('dog', 'assets/dogsprite.png', 32, 32);
		game.load.spritesheet('dogCatcher', 'assets/dogCatcher.png', 50, 74);
		game.load.spritesheet('bonesprite', 'assets/bone.png', 90,90);


	}
	var platforms;
	var player; 
	var dogCatcher;
	var cursors;
	var bone;

	function create() {
		game.physics.startSystem(Phaser.Physics.CANVAS);
		game.add.sprite(0,0,'sky');
		platforms = game.add.group();
		platforms.enableBody = 'true';
		var ground = platforms.create(0, game.world.height - 64, 'ground');
		ground.scale.setTo(2,2);
		ground.body.immovable = true; //doesn't move anywhere

		var ledge = platforms.create(400,400 ,'ground');

		ledge.body.immnovable = true;

		//start
		game.add.sprite(0,0,'star');
		//player
		player = game.add.sprite(32, game.world.height - 150, 'dog');
		game.physics.arcade.enable(player);
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;
		//dog animations
		player.animations.add('right', [0,1,2,3,4,5], 10, true);
		player.animations.add('left', [6,7,8,9,10,11], 10, true)

		//dog catcher
		dogCatcher = game.add.sprite(32, game.world.height - 250, 'dogCatcher');
		game.physics.arcade.enable(dogCatcher);
		dogCatcher.body.collideWorldBounds = true;
		dogCatcher.animations.add('down',[0,1,2,3], 10, true);
		dogCatcher.animations.add('right',[8,9,10,11], 10, true);
		dogCatcher.animations.add('left',[7,6,5,4], 10, true);
		dogCatcher.animations.add('up',[13,14,15], 10, true);

		bone = game.add.sprite(0,50, 'bonesprite');
		game.physics.arcade.enable(bone);
		bone.body.collideWorldBounds = true;
		bone.body.gravity.y = 300;
		bone.animations.add('down', [0,1,2,3], 10, true);
		bone.animations.add('broke', [4,5,6], 10, true);


	}
	var count = 0;
	var stopFrame=0;

	function update() {

	    game.physics.arcade.collide(player, platforms);
	    game.physics.arcade.collide(dogCatcher, platforms);
	    game.physics.arcade.collide(player, dogCatcher);
	    // game.physics.arcade.collide(player, dogCatcher, collisionHandler, null, this);


	    cursors = game.input.keyboard.createCursorKeys();
	    player.body.velocity.x=0;
	    if(cursors.left.isDown)
	    {
	    	player.body.velocity.x = -150;
	    	player.animations.play('left');
	    	stopFrame=6;
	    }
	   	else if(cursors.right.isDown)
	    {
	    	player.body.velocity.x = 150;
	    	player.animations.play('right');
	    	stopFrame = 0;
	    }
	    else
	    {
	    	player.animations.stop();
	    	player.frame = stopFrame;
	    }

	    // jump
	    if (cursors.up.isDown && player.body.touching.down)
	    {
	    	player.body.velocity.y = -360;
	    }

	    if(dogCatcher.body.x>500){

	    dogCatcher.body.velocity.x = -150;
	    dogCatcher.animations.play('left');
	    count++;
	    } else if(dogCatcher.body.x<100){

	   		dogCatcher.body.velocity.x = 150;
	   		dogCatcher.animations.play('right');
	    	count++;
	    }

	    if (count % 5 == 0){
	    	dogCatcher.body.velocity.y = 300;

	   		dogCatcher.animations.play('down');
	    }else{
	    	dogCatcher.body.velocity.y = -300;
	   		// dogCatcher.animations.play('up');
	    }

		// if (cursors.right.isDown)
	 //    {
	 //        dogCatcher.body.velocity.x = 250;
	 //    }
	 	if(bone.body.y < 400){
	 		bone.animations.play('down');
	 	}else {
	 		bone.animations.play('broke');
	 		bone.frame = 5;
	 	}

	}

	function render(){
		// game.debug.text(game.time.suggestedFps, 32, 32);
	    // game.debug.text(game.time.physicsElapsed, 32, 32);
	    // game.debug.body(player);
	    // game.debug.bodyInfo(player, 16, 24);
	    game.debug.text("bone y =  "+ bone.body.y, 50, 50);

	    // game.debug.text("lNumber: "+lNumber, 500, 50);

	    // game.debug.text("arr[number]: "+arr[lNumber], 300, 150);

	}

	function collisionHandler(_player, _dogCatcher) {
		_player.frame = 13;
		gameOver();

	}
	function gameOver() 
	{
		player.kill();
    	effect.kill();
	    fx.play('over');
	    if(score > 4){
        	stateText.text=" CONGRATS!! \n YOU WON\n Click to restart";
	    }else
        stateText.text=" GAME OVER \n Click to restart";
        stateText.visible = true;
        game.input.onTap.addOnce(restart,this);

	}

	



	
    
>>>>>>> master
};
