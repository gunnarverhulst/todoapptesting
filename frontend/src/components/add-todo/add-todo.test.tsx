import { render, screen } from "../../test-lib/test-utils";
import { AddTodoForm } from "./index.tsx";
import { fireEvent } from "@testing-library/react";
import { expect } from "vitest";

test("user hovers over a button", async () => {
    const {user} = render(<AddTodoForm />);
    const addButton = screen.getByRole("button", {name: /Add/i});
    await user.hover(addButton);
});

test("user clicks button", async () => {
    const {user} = render(<AddTodoForm />);
    const addButton = screen.getByRole("button", {name: /Add/i});
    const inputelement = screen.getByRole("textbox", {name: /Description/i}) as HTMLInputElement;
    fireEvent.change(inputelement, { target: { value: 'Dummy Todo' } });
    await user.click(addButton)
    expect(inputelement.value).toBe("");
});

