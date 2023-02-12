import Character from "../Character";

test("Error:name < 2 symbols", () => {
  expect(() => new Character("a", "Daemon")).toThrowError("Ошибка. Имя не может быть короче 2 символов и длиннее 10");
});

test("Error:name > 10 symbols", () => {
  expect(() => new Character("АлешенькаГений", "Daemon")).toThrowError("Ошибка. Имя не может быть короче 2 символов и длиннее 10");
});

test("Error:name of type", () => {
  expect(() => new Character("Alex", "Bobik")).toThrowError("Ошибка. Такого персонажа нет.");
});
