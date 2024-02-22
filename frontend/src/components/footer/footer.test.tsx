import { render, screen } from "../../test-lib/test-utils";
import {aTodo} from "../../test-lib/generateTodo.ts";
import {Footer} from "./index.tsx";

test("dummy test", () => {
    render(<div>hello world</div>);
    expect(screen.getByText("hello world")).toBeInTheDocument();
});

test("check if all done", () => {
    const exampleTodos = [aTodo({done: true})];
    console.log(exampleTodos);
    render(<Footer todos={exampleTodos} />);
    expect(screen.getByText("All done!")).toBeInTheDocument();
});

test("check if 1 todo left", () => {
    const exampleTodos = [aTodo({done: false})];
    render(<Footer todos={exampleTodos} />);
    expect(screen.getByText("1 todo left")).toBeInTheDocument();
});

test("try multiple todos of different done status", () => {
    const exampleTodos = [aTodo({done: false}), aTodo({done: false}), aTodo({done: false}), aTodo({done: false}), aTodo({done: true})];
    render(<Footer todos={exampleTodos} />);
    expect(screen.getByText("4 todos left")).toBeInTheDocument();
});
