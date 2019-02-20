import { asyncFunc } from "./async";

test("async func", async () => {
  const test = await asyncFunc();
  console.log(test);
  expect(test).toBe(true);
});
