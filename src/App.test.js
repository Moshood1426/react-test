import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("checks if button has intended bg color and text", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /Change To Blue/i });
  const checkbox = screen.getByRole("checkbox")

  expect(button).toHaveStyle("background-color: red");
  expect(checkbox).not.toBeChe
});

test("btn for output when clicked", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: /Change To Blue/i,
  });

  fireEvent.click(button);

  expect(button).toHaveStyle("background-color: blue");
  expect(button).toHaveTextContent("Change to red");
});

test("initials on render", () => {
  render(<App />)
})
