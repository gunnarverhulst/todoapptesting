import { countTodosLeft } from "./count.ts";

test("dummy test", () => {
    expect(1 + 1).toEqual(2);
});

const done = {
    id: "3044efbc-7e54-4751-a96c-e01474caf8a7",
    description: "Jog around the park",
    done: true,
};

const todo = {
    id: "3044efbc-7e54-4751-a96c-e01474caf8a7",
    description: "Jog around the park",
    done: false,
};

const todo1 = {
    id: "3044efbc-7e54-4751-a96c-e01474caf8a7",
    description: "Jog around the park",
    done: false,
};


test.each([
    [[], 0],
    [[done], 0],
    [[todo], 1],
    [[done, todo, todo1], 2]
  ])('countTodosLeft(%o) -> %i', (a, expected) => {
    expect(countTodosLeft(a)).toBe(expected)
  })

  