import { render, screen } from "@testing-library/react";
import H3Title from "./H3Title";
import { BrowserRouter } from "react-router-dom";

describe("H3Title", () => {
  it("renders the H3Title", () => {
    render(
      <BrowserRouter>
        <H3Title>H3 Title</H3Title>
      </BrowserRouter>
    );
    const headline = screen.getByText("H3 Title");
    expect(headline).toBeInTheDocument();
  });
});
