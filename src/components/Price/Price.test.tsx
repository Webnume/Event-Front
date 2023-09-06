import { render, screen } from "@testing-library/react";
import Price from "./Price";

describe("Price", () => {
  it("renders the Price", () => {
    render(<Price>{"24.99"}</Price>);
    expect(screen.getByText("24.99")).toBeInTheDocument();
  });
});
