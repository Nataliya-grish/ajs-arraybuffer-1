import Magician from "../Magician";

test("normal attack", () => {
  const character = new Magician("Ivan");
  character.attack = 100;
  expect(character.attack).toBe(100);
});

test("attack on 2 cells", () => {
  const character = new Magician("Ivan");
  character.attack = 100;
  character.distance = 2;
  expect(character.attack).toBe(90);
});

test("attack on 2 cells  wiht fog", () => {
  const character = new Magician("Ivan");
  character.attack = 100;
  character.distance = 2;
  character.stoned = true;
  expect(character.attack).toBe(85);
});

test("attack < 0", () => {
  const character = new Magician("Ivan");
  character.attack = 1;
  character.distance = 2;
  character.stoned = true;
  expect(character.attack).toBe(0);
});

test("fog exposure", () => {
  const character = new Magician("Ivan");
  character.stoned = true;
  expect(character.stoned).toBe(true);
});
