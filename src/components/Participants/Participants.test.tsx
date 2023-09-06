import { render, screen } from "@testing-library/react";
import Participants from "./Participants";
import { BrowserRouter } from "react-router-dom";

describe("Participants", () => {
  it("renders the Participants", () => {
    render(
      <BrowserRouter>
        <Participants />
      </BrowserRouter>
    );
    expect(screen.getByText("Participants")).toBeInTheDocument();
  });
});
