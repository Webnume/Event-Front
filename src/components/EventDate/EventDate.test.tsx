import { render, screen } from "@testing-library/react";
import EventDate from "./EventDate";
import { formatDate, formatTime } from "../../utils/DateTimeFormat";

describe("EventDate", () => {
  const startDateTime = new Date();
  const endDateTime = new Date(new Date().setHours(new Date().getHours() + 2));
  const children = [startDateTime, endDateTime];
  const date = formatDate(children[0]);
  const startTime = formatTime(children[0]);
  const endTime = formatTime(children[1]);

  it("renders the date", () => {
    render(<EventDate children={children}></EventDate>);

    expect(
      screen.getByText(date + " " + startTime + " - " + endTime+2)
    ).toBeInTheDocument();
  });
});
