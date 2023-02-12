import SpecialAttack from "./SpecialAttack";

export default class Magician extends SpecialAttack {
  constructor(name, type = "Magician") {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
