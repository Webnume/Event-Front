import { render, screen } from "@testing-library/react";
import EndAtDate from "./EndAtDate";

describe("EndAtDate", () => {
  it("renders the date", () => {
    render(<EndAtDate>{"2021-08-30T19:30:00.740Z"}</EndAtDate > );
    const headline = screen.queryByRole('heading', {
      name: /événements/i
    });
    expect(screen.getByText("Date de clôture") ).toBeInTheDocument();
    // expect(headline).toBeInTheDocument();
  });

//   it("renders a list of events", async () => {
//     render(<App />);
//     const events = await screen.findAllByText('Places restantes');
//     console.log(events.length);
    
//     expect(events.length).toBeGreaterThan(0);
//   });
});
