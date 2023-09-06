import { render, screen } from "@testing-library/react";
import EventTitle from "./EventTitle";
import { BrowserRouter } from "react-router-dom";

describe("EventTitle", () => {
  it("renders the EventTitle", () => {
    render(
      <BrowserRouter>
        <EventTitle>H3 Title</EventTitle>
      </BrowserRouter>
    );
    const headline = screen.getByText("H3 Title");
    expect(headline).toBeInTheDocument();
  });
  
  it("renders the EventTitle with '...' when too long", () => {
    render(
      <BrowserRouter>
        <EventTitle>H3 Title very very long and letters sup than 25</EventTitle>
      </BrowserRouter>
    );
    const headline = screen.getByText("H3 Title very very long a...");
    expect(headline).toBeInTheDocument();
  });
});
