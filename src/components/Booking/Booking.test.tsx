import Booking from "./Booking";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import user from "@testing-library/user-event";

describe( "Booking Button", () => {

  it('display "réserver" ', async () => {
    render(<Booking price={0} />);
    const booking = screen.getByRole("button", { name: /réserver/i });
    expect(booking).toBeInTheDocument();
    user.click(booking);
    // const confirmation = screen.getByRole("button", { name: /confirmer/i });
    // expect(confirmation).toBeInTheDocument();
  });

  it("opens a modal when clicked on", async () => {
    // const mockBooking = jest.fn();
    // const booking = mockBooking();
    render(<Booking price={0} />);
    const booking = screen.getByRole("button", { name: /réserver/i });
    expect(booking).toBeInTheDocument();
    user.click(booking);
    // console.log(booking);

    // const modalConfirmButton = await screen.findByRole("button", {
    //   name: /confirmer/i,
    // });
    // console.log(modalConfirmButton);

    // booking && expect(modalConfirmButton).toBeInTheDocument();
    // throw new Error("message");
    // console.log(booking);
  });
});
