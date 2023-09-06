import { render, screen } from "@testing-library/react";
import RemainingTicket from "./RemainingTicket";

describe("RemainingTicket", () => {
  it("renders the RemainingTicket", () => {
    render(<RemainingTicket>{20}</RemainingTicket>);
    expect(screen.getByText(20)).toBeInTheDocument();
  });
});
