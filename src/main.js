"use strict";
var Mutate = window.Mutate || {};

var WebFontConfig = {};

(function() {
  Mutate.Engine = function(width, height) {
    this.game = new Phaser.Game(width, height, Phaser.AUTO, "", {preload: this.onPreload, create: this.onCreate, update: this.onUpdate, render: this.onRender}, false, true);

    Mutate.game = this.game;
    this.game.canvas.oncontextmenu = function(e) { e.preventDefault(); }
  };

  Mutate.Engine.prototype = {
    constructor: Mutate.Engine,

    destroy: function() {
      this.game.destroy();
    },

    onPreload: function() {
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
      this.game.scale.refresh();

      this.game.state.add('Boot', Mutate.Boot);
      this.game.state.start('Boot');
    },

    onUpdate: function() {
    },

    onCreate: function() {
    },

    onRender: function() {
    }
  };
})();
