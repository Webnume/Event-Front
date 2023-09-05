import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);
    const headline = screen.queryByRole('heading', {
      name: /événements/i
    });
    expect(headline).toBeInTheDocument();
  });

  it("renders a list of events", async () => {
    render(<App />);
    const events = await screen.findAllByText('Places restantes');
    console.log(events.length);
    
    expect(events.length).toBeGreaterThan(0);
  });
});
