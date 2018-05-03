var Game = function () {};

Game.prototype = {

  preload: function () {
    
  },

  create: function () {
    shot = 0;
    flipFlop = false;
    shotAnimationRunning = false;

    game.physics.startSystem(Phaser.Physics.ARCADE);

    player = game.add.sprite(32, game.world.height - 150, 'player');

    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [6, 7, 8, 9], 10, true);
    player.animations.add('shot', [4, 5], 20, false);

    shotAnimation = player.animations.getAnimation('shot');

    cursors = game.input.keyboard.createCursorKeys();
    // spaceKey = Phaser.Keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    keys = new Phaser.Keyboard(this);
    keys.addCallbacks(this, this.input.keyboard.onDown);
    // spaceKey = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    direction = 'right';

  },

  update: function () {

    if(!shotAnimationRunning) {
      if (cursors.left.isDown) {

        player.body.velocity.x = -150;
        player.animations.play('left');
        direction = 'left';

      } else if (cursors.right.isDown) {

        player.body.velocity.x = 150;
        player.animations.play('right');
        direction = 'right';

      } else {
        player.frame = 4;
        player.body.velocity.x = 0;
      }
    }

    if (cursors.up.isDown){
      if (!flipFlop) {
        player.body.velocity.x = 0;
        this.shot();
        flipFlop = true;
      }
    }

    if (cursors.up.isUp) {
        flipFlop = false;
    }

    shotAnimation.onStart.add(function () { shotAnimationRunning = true; });
    shotAnimation.onComplete.add(function () { shotAnimationRunning = false; });

  },

  restart: function () {
    game.state.start('Game');
  },

  shot: function() {
    if(shot !== 2) {
      shot++;
      player.animations.play('shot');
      var g = game.add.graphics(player.centerX, player.centerY);
      g.beginFill(0xFFFFFF);
      g.drawRect(0, 0, 2, 1);
      var t = game.add.tween(g).to({ height: -200 }, 1000).start();
      t.onComplete.add(function () {
        g.destroy();
        shot--;
      }, this)
    }
  }

}