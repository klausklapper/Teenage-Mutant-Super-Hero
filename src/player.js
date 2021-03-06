"use strict";
var Mutate = window.Mutate || {};

Mutate.Player = function() {
	this.name = Mutate.game.rnd.pick([
        "Morton", 
        "Roy", 
        "Donald", 
        "Herschel", 
        "Kaizyle", 
        "Britney Shakira Beyonce", 
        "Dick", 
        "Pubert", 
        "Xander",
        "Eugene",
        "Boris",
        "Mckenzie",
        "Keith",
        "Melvin",
        "Austin",
        "Bartholomew",
        "Barney",
        "Mackleroy"]);
	this.life = 100;
	this.mutation = 0;
	this.iq = 70;
};

Mutate.Player.prototype.clampStats = function() {
    this.life = Mutate.game.math.clamp(this.life, 0, 100);
    this.mutation = Mutate.game.math.clamp(this.mutation, 0, 100);
    this.iq = Mutate.game.math.clamp(this.iq, 0, 200);

    this.mutation = Mutate.game.math.roundTo(this.mutation, -2);
};

Mutate.Player.prototype.tryMutate = function() {
    return Mutate.game.math.roundTo(Mutate.game.rnd.realInRange(0, 100), -2) <= this.mutation;
};

Mutate.Player.prototype.getYears = function() {
    return 12 + Mutate.game.math.floorTo(Mutate.GameManager.currentRound / 4, 0);
};

Mutate.Player.getHeroName = function() {

    var p1 = Mutate.game.rnd.pick([
        "",
        "Bouncing", 
        "Super", 
        "Awesome", 
        "Paste", 
        "Brother", 
        "Flying", 
        "Holy", 
        "Fruit",
        "Kid",
        "The",
        ""]);

    var p2 = Mutate.game.rnd.pick([
        "Baron", 
        "Super", 
        "Awesome", 
        "Pot", 
        "Steel", 
        "Firefly", 
        "Cat", 
        "Doc",
        "Weasel"]);

    var p3 = Mutate.game.rnd.pick([
        "",
        "of Space", 
        "of Fire", 
        "of Wisdom", 
        "Pete", 
        "Bob", 
        "Boy", 
        "Man", 
        "Girl",
        "Woman",
        ""]);

    return p1.concat(" ", p2, " ", p3).replace("  ", " ").trim();
}