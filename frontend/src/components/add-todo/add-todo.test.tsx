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
    
});

