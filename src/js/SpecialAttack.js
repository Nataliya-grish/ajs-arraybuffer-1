import Character from "./Character";

export default class SpecialAttack extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
  }

  get attack() {
    let calcDamage = Math.round((this.setAttack * (11 - this.distance)) / 10);
    if (this.setStoned) {
      Math.round((calcDamage -= Math.log2(this.distance) * 5));
      if (calcDamage < 0) {
        return 0;
      }
      return calcDamage;
    }
    return calcDamage;
  }

  set attack(damage) {
    this.setAttack = damage;
  }

  get stoned() {
    return this.setStoned;
  }

  set stoned(strike) {
    this.setStoned = strike;
  }
}
