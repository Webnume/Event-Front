import styled from "styled-components";
import GLOBALS from "../utils/Globals";
import { formatDate, formatTime } from "../utils/DateTimeFormat";

type EventDateProps = {
  children: string[];
  detailPage?: boolean;
};

function EventDate({ children, detailPage }: EventDateProps) {
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
    grid-area: ${(props) =>
      props.detailPage ? "4/2/auto/auto" : "2 / 2 / auto / auto"} } ;
  `;

  const date = formatDate(children[0]);
  const startTime = formatTime(children[0]);
  const endTime = formatTime(children[1]);

  return (
    <EventDateWrapper detailPage={detailPage}>{` ${
      !detailPage ? date : ""
    } ${startTime} - ${endTime}`}</EventDateWrapper>
  );
}

export default EventDate;
