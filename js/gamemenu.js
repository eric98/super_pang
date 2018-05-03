var GameMenu = function () {};

GameMenu.prototype = {

  preload: function () {

  },

  create: function () {

    playText = game.add.text(game.world.centerX, game.world.centerY, 'Start', { font: "20px PressStart2P", fill: "#ffffff", align: "center"});
    
    onOver = function () {
      playText.fill = "#03bfb9";
    };

    onOut = function () {
      playText.fill = "#ffffff";
    };

    playText.anchor.set(0.5,0.5);
    playText.scale.set(0, 0);
    playText.inputEnabled = true;
    playText.events.onInputUp.add(this.runGame, this);
    playText.events.onInputOver.add(onOver);
    playText.events.onInputOut.add(onOut);

    // effect = game.make.bitmapData();
    // effect.load('title');

    // image = game.add.image(game.world.centerX, game.world.centerY, effect);
    // image.anchor.set(0.5);
    // image.scale.set(0, 0);
    // image.smoothed = false;

//     tink = game.add.image(game.world.centerX, 200, 'tinkle');
//     tink.anchor.set(0.5);
//     tink.scale.set(0.3, 0.3);

//     mask = game.add.graphics(0, 0);

//     //	Shapes drawn to the Graphics object must be filled.
//     mask.beginFill(0xffffff);

//     //	Here we'll draw a circle
//     mask.drawRect(0, 100, 35, 250);
//     mask.angle = 35;
//     tink.mask = mask;
  

//     //mask.setTo(0, 300, game.cache.getImage('tinkle').width, game.cache.getImage('tinkle').height);
//     //mask.x = -100;
//     //mask.y = 200;

//     //  Tween the rasters
//     game.add.tween(mask).to( { x: game.world.width + 20 }, 700, Phaser.Easing.Linear.None, true, 500, 0, false);
// //    game.input.addMoveCallback(move, this);

//     //  Tween the image
//     game.add.tween(image).to( { y: 200 }, 500, Phaser.Easing.Exponential.In, true, 0, 0, false);
//     game.add.tween(image.scale).to( { x: 0.3, y: 0.3 }, 500, Phaser.Easing.Exponential.In, true, 0, 0, false);

    game.add.tween(playText).to({ y: 360 }, 500, Phaser.Easing.Exponential.In, true, 600, 0, false);
    tween = game.add.tween(playText.scale).to( { x: 1, y: 1 }, 500, Phaser.Easing.Exponential.In, true, 600, 0, false);
    tween.onComplete.addOnce(this.tween2, this);
  },

  tween2: function () {
    tween.to( { x: 0.8, y: 0.8}, 500, Phaser.Easing.Exponential.In, true, 0, -1, true);
  },

  update: function () {
//    effect.alphaMask(effect, mask);
  },

  runGame: function () {
    game.state.start('Game');
  }
  
};