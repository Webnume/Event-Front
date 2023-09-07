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

});
