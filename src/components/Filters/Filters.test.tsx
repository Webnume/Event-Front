import { render, screen } from "@testing-library/react";
import Filters from "./Filters";

describe("Filters", () => {
  it("renders the Filters", () => {
    render(<Filters />);
    expect(screen.getByText("A venir")).toBeInTheDocument();
    expect(screen.getByText("Passés")).toBeInTheDocument();
  });
});
a