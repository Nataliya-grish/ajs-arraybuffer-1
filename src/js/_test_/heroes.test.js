import Character from "../Character";

test("Character creation Daemon", () => {
  const hero = new Character("Ivan", "Daemon");
  const result = {
    name: "Ivan",
    type: "Daemon",
    health: 100,
    level: 1,
    defence: 40,
  };
  expect(hero).toMatchObject(result);
});

test("Character creation Magician", () => {
  const hero = new Character("Ivan", "Magician");
  const result = {
    name: "Ivan",
    type: "Magician",
    health: 100,
    level: 1,
    defence: 40,
  };
  expect(hero).toMatchObject(result);
});
