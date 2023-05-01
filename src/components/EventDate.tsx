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
    font-weight: ${(props) => (props.detailPage ? 400 : 600)} } ;
    font-size: 16px;
    line-height: 24px;
    grid-column: 2;
    margin: 0;
    text-align: left;
    grid-area: ${(props) => props.detailPage && "4/2/auto/auto"} } ;
    padding: ${(props) => props.detailPage && "0.5rem 1rem"};
    background-color: ${(props) => props.detailPage && GLOBALS.COLORS.BLUE4} ;
    border-radius: 0.5rem;
    margin: 1rem;
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
