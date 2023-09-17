import Booking from "./Booking";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe( "Booking Button", () => {

  it('display "réserver" ', async () => {
    render(<Booking price="0.0" />);
    const booking = screen.getByRole("button", { name: /réserver/i });
    expect(booking).toBeInTheDocument();
    user.click(booking);
  });

  it("opens a modal when clicked on", async () => {
    render(<Booking price="0.0" />);
    const booking = screen.getByRole("button", { name: /réserver/i });
    expect(booking).toBeInTheDocument();
    user.click(booking);
  });
});
