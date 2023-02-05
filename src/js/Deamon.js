const { Character } = require('./Character');

class Deamon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

module.exports = {
  Deamon,
};
