import { render, screen } from "@testing-library/react";
import EndAtDate from "./EndAtDate";

describe("EndAtDate", () => {
  it("renders the date", () => {
    render(<EndAtDate>{"2021-08-30T19:30:00.740Z"}</EndAtDate>);
    expect(screen.getByText("30 août 2021")).toBeInTheDocument();
  });
});
