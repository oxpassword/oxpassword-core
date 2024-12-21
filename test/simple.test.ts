import OXSimple from "../src/oxsimple";

test("Same password is generated if same values provided", () => {
  let ox = new OXSimple();
  let pwd1 = ox.encrypt("oxpassword", "test", 0);

  ox = new OXSimple();
  let pwd2 = ox.encrypt("oxpassword", "test", 0);

  expect(pwd1).toStrictEqual(pwd2);
});

test("Different password is generated if different values provided", () => {
  let ox = new OXSimple();
  let pwd1 = ox.encrypt("oxpassword", "test", 0);

  ox = new OXSimple();
  let pwd2 = ox.encrypt("oxpassword", "test", 1);

  expect(pwd1).not.toStrictEqual(pwd2);
});