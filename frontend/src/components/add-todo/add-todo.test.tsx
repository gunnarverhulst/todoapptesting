import { render, screen } from "../../test-lib/test-utils";
import { AddTodoForm } from "./index.tsx";

test("user hovers over a button", async () => {
    const {user} = render(<AddTodoForm />);
    const addButton = screen.getByRole("button", {name: /Add/i});
    await user.hover(addButton);
});

test("user clicks button", async () => {
    const {user} = render(<AddTodoForm />);
    const addButton = screen.getByRole("button", {name: /Add/i});
    /* await user.click(addButton); */
    const test = await screen.findAllByLabelText("Description")
    const keys = Object.keys(test);
    const nameOfElement = keys[0];
    console.log(keys)
    console.log(nameOfElement)
    console.log(test[0])
    console.log(test)
});

