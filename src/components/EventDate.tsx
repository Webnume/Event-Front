import styled from "styled-components";
import GLOBALS from "../utils/Globals";
type EventDateProps = {
  children: string[];
};

function EventDate({ children }: EventDateProps) {
  const EventDateWrapper = styled.h2`
    font-size: 1.2em;
    text-align: center;
    color: ${GLOBALS.COLORS.BLUE6};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    grid-column: 2;
    margin: 0;
    text-align: left;
    margin-left: 1rem;
  `;

  function formatDate(string: string) {
    var options = { month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  function formatTime(string: string) {
    var options = { hour: "numeric", minute: "numeric" };
    return new Date(string).toLocaleTimeString([], options);
  }

  const date = formatDate(children[0]);
  const startTime = formatTime(children[0]);
  const endTime = formatTime(children[1]);

  return (
    <EventDateWrapper>{`${date} ${startTime} - ${endTime}`}</EventDateWrapper>
  );
}

export default EventDate;
