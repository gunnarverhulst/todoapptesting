import { countTodosLeft } from "./count.ts";
import {faker} from "@faker-js/faker";
import {TodoTO} from "../../lib/api.ts";
import {aTodo} from "../../test-lib/generateTodo.ts";

function buildTodo(done:boolean):TodoTO {
    const id = faker.string.uuid();
    const description = "this is an auto-generated todo";
    return {id, description, done};
}

test.each([
    [[], 0],
    [[buildTodo(true)], 0],
    [[buildTodo(false)], 1],
    [[buildTodo(true), buildTodo(false), buildTodo(false)], 2],
    [[aTodo({done: true}), aTodo({done: true}), aTodo({done: false})], 1]
  ])('countTodosLeft(%o) -> %i', (a, expected) => {
    expect(countTodosLeft(a)).toBe(expected)
  })
