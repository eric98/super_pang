game = new Phaser.Game(800, 600, Phaser.AUTO, '', Main = function () {});

Main.prototype = {

  preload: function () {
    game.load.spritesheet('player', 'assets/player1.png', 32, 33);
    // game.load.image('block', 'assets/block.png');
    // game.load.image('bola', 'assets/bola.png');
    // game.load.image('loading', 'assets/loading.png');
    // game.load.image('title', 'assets/title.png');
    // game.load.image('tinkle', 'assets/tinkle.png');
    // game.load.spritesheet('explosion', 'assets/player_explode.png', 128, 128, 15);
    game.load.script('utils', 'js/utils.js');
    game.load.script('Splash', 'js/splash.js');
  },

  create: function () {
    game.state.add('Splash', Splash);
    game.state.start('Splash');
  },
};

game.state.add('Main', Main);
game.state.start('Main');