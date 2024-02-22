import {TodoTO} from "../lib/api.ts";
import {faker} from "@faker-js/faker";



function buildAutomationTodo(overrides: Partial<TodoTO> = {}): TodoTO{
    return {
        id: faker.string.uuid(),
        description: faker.string.sample(),
        done: faker.datatype.boolean(),
        ...overrides,
    };
}

export { buildAutomationTodo as aTodo };
