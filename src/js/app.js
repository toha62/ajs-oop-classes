const { Bowerman } = require('./Bowerman');
const { Deamon } = require('./Deamon');
const { Magician } = require('./Magician');
const { Swordsman } = require('./Swordsman');
const { Undead } = require('./Undead');
const { Zombie } = require('./Zombie');

const bowerman = new Bowerman('Robin Hood');
const deamon = new Deamon('Baltazar');
const magician = new Magician('Hendalf');
const swordsman = new Swordsman('Arthur');
const undead = new Undead('McClaude');
const zombie = new Zombie('Dark king');
console.log(bowerman, deamon, magician, swordsman, undead, zombie);
