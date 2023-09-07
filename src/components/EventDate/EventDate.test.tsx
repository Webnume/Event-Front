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
    // return (
    //   <EventDateWrapper detailPage={detailPage}>{` ${
    //     !detailPage ? date : ""
    //   } ${startTime} - ${endTime}`}</EventDateWrapper>
    // );
    render(<EventDate children={children}></EventDate>);
    // const startTime = children[0].split("T")[1].split(":");
    // console.log(startTime[0]);
    // var d = new Date();
    // var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    // console.log(utc);
    // var nd = new Date(utc + (3600000*2));

    // return time as a string
    // console.log("The local time for city is "+ nd.toLocaleString());

    // expect(screen.getByText("30 octobre 14:00 - 19:30")).toBeInTheDocument();
    expect(
      screen.getByText(date + " " + startTime + " - " + endTime)
    ).toBeInTheDocument();
  });
});
