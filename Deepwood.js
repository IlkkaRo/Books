function Hero (name, level, health) {   //Hero class
  this.name = name;
  this.level = level;
  this.health = health;
}

function Enemy (name, level, health)  { //Monster class
  this.name = name;
  this.level = level;
  this.health = health;
}

function Warrior (name, level, health, weapon, ability) { //Warrior subclass
  Hero.call(this, name, level, health);
  this.weapon = weapon;
  this.ability = ability;
}

function Healer (name, level, health, spell, ability) { //Healer subclass
  Hero.call(this, name, level, health);
  this.spell = spell;
  this.ability = ability;
}

function Monster (name, level, health, ruotti) { //What does monster do
  Enemy.call(this, name, level, health);
  this.kieli = ["speaking swedish", "mora"];
  this.ruotti = ruotti;
  this.attack = function (target1, target2, kumpiase) {
    switch(kumpiase){
      case "speaking swedish":
        console.log(`${this.name} utters demonic incantation at ${target1.name} and ${target2.name} saying ${this.ruotti}.`);
        target1.health = target1.health-30;
        target2.health = target2.health-30;
        console.log(`${target1.name} has ${target1.health} health left and ${target2.name} has ${target2.health} health left.`);
      break;
      case "mora":
        var target = Math.random();
          // var target = prompt();
          if(target < "0.5") {target = target1;}
          else {target = target2};
        console.log(`${this.name} whips out the mora and swings at ${target.name}.`);
        target.health = target.health-40;
        console.log(`${target.name} has ${target.health} health left.`);
      }
  }
}

Warrior.prototype = Object.create(Hero.prototype);
Healer.prototype = Object.create(Hero.prototype);
Monster.prototype = Object.create(Enemy.prototype);

Hero.prototype.greet = function() {
  console.log(this.name + " says Hello World!")
}

const playerWarrior = new Warrior ("Pentti the Brave", 1, 100, "Axe", "inner SISU");
const playerHealer = new Healer ("Pertti the Wise", 1, 80, "Cure", "Ukko and Ahti");
var Monster = new Monster ("Håkan the Hårrible", 1, 200, "köttbullarna var läckra");

Warrior.prototype.attack = function (target, warriorChoose) { //Warrior actions
  var warriorChoose = prompt();
  switch(warriorChoose){
    case "Axe":
    console.log(`${this.name} attacks ${target.name} with the ${this.weapon}.`);
    target.health = target.health-30;
    console.log(`${target.name} has ${target.health} health left.`);
    break;
    case "inner SISU":
    console.log(`${this.name} calls on his ${this.ability} which strenghtens himself and weakens ${target.name}.`);
    this.health = this.health+10;
    target.health = target.health-10;
    console.log(`${target.name} has ${target.health} health left while ${this.name} has ${this.health} left.`);
}
}

Healer.prototype.cast = function (target1, target2, healerChoose) { //Healer actions
  var healerChoose = prompt();
  var tempName = this.name;
  switch(healerChoose){
    case "Cure":
    console.log(`${this.name} heals ${target1.name} with the ${this.spell}.`);
    target1.health = target1.health+25;
    console.log(`${target1.name} has ${target1.health} health left.`);
    break;
    case "Ukko and Ahti":
    var prayer = function() {
      var gods = Math.random();
      if (gods < "0.333") {console.log(`Ukko is pleased and zaps ${target2.name} with a lightningbolt.`);
      target2.health = target2.health-50;
      console.log(`${target2.name} has ${target2.health} health left.`)}
        else if (gods > "0.666") {console.log(`Ahti is pleased and soothing rain falls on ${tempName} and ${target1.name}.`);
        tempName.health = tempName.health+20;
        target1.health = target1.health+20;
        console.log(`${tempName} has ${tempName} health left and ${target1.name} has ${target1.health} health.`)}
          else {console.log(`Gods are displeased! Smelly sardines fall from the sky hitting ${tempName} and ${target1.name}.`);
          tempName.health = tempName.health-10;
          target1.health = target1.health-10;
          console.log(`${tempName} has ${tempName.health} health left and ${target1.name} has ${target1.health} health left.`);
      }
    }
    //var rukous =prayer();
    console.log(`${this.name} calls on the might of the old Gods ${this.ability} the Gods respond...`);
    prayer();

}
}

var slowText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { slowText(target, message, index, interval); }, interval);
  }
}

$(function () {
  slowText("#deepWood", "While strolling in the woods, you encounter a wild Håkan! Everyone knows Håkans are awful, he proves it by saying `Hejsan!`", 0, 100);
});

$(document).ready(function() {
      $('#woodButton').hide().delay(14000).fadeIn(2200);
});

function fight()  {
document.getElementById("placeHolder").innerHTML = "While strolling in the woods, you encounter a wild Håkan! Everyone knows Håkans are awful, he proves it by saying `Hejsan!`";
  var MonsterAttack = Math.floor(Math.random() *100)
    if (MonsterAttack < "50") {MonsterAttack = "speaking swedish";}
    else {MonsterAttack = "mora";}
  Monster.attack(playerWarrior, playerHealer, MonsterAttack);
  playerWarrior.attack(Monster);
  playerHealer.cast(playerWarrior, Monster);
}
