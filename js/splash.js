var Splash = function () {};

Splash.prototype = {

  init: function () {
    this.loadingBar = game.make.sprite(game.world.centerX, 400, 'loading');
    this.status = game.make.text(game.world.centerX, 380, 'Loading...', {font: "24px Arial", fill: 'white'});
    utils.centerGameObjects([this.loadingBar, this.status]);
  },

  preload: function () {
    loadingBar = game.add.sprite(game.world.centerX-(500/2), 400, 'loading');
    game.add.existing(this.status);
    this.load.setPreloadSprite(loadingBar, 0);
    
    this.loadScripts();
    this.loadFonts();
  },

  create: function () {
    this.loadStates();

    setTimeout(function () {
      game.state.start("GameMenu");
    }, 200);
  },

  loadFonts: function () {
    WebFont.load({
      custom: {
        families: ['PressStart2P'],
        urls: ['css/fonts.css']
      }
    });
  },

  loadScripts: function () {
    game.load.script('Game', 'js/game.js');
    game.load.script('GameMenu', 'js/gamemenu.js');
  },

  loadStates: function () {
    game.state.add('Game', Game);
    game.state.add('GameMenu', GameMenu);
  }

};