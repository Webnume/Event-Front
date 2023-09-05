import { render, screen } from "@testing-library/react";
import H3Title from "./H3Title";

describe("EndAtDate", () => {
  it("renders the date", () => {
    render(<H3Title>H3 Title</H3Title>);
    const headline = screen.queryByRole("heading", {
      name: /H3 Title/i,
    });
    expect(screen.getByText(headline)).toBeInTheDocument();
    // expect(headline).toBeInTheDocument();
  });

  //   it("renders a list of events", async () => {
  //     render(<App />);
  //     const events = await screen.findAllByText('Places restantes');
  //     console.log(events.length);

  //     expect(events.length).toBeGreaterThan(0);
  //   });
});
