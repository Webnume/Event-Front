import { render, screen } from "@testing-library/react";
import EventDate from "./EventDate";

describe("EventDate", () => {
  const children = ["2021-10-30T14:00:20.390Z", "2021-10-30T19:30:00.740Z"];
  it("renders the date", () => {
    render(<EventDate children={children}></EventDate>);
    expect(screen.getByText("30 octobre 16:00 - 21:30")).toBeInTheDocument();
  });
});
