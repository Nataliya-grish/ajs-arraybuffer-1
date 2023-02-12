import SpecialAttack from "./SpecialAttack";

export default class Daemon extends SpecialAttack {
  constructor(name, type = "Daemon") {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
