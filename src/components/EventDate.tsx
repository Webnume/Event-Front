import styled from "styled-components";
import GLOBALS from "../utils/Globals";

function EventDate({ children }) {
  const EventDateWrapper = styled.h2`
    font-size: 1.2em;
    text-align: center;
    color: ${GLOBALS.COLORS.BLUE6};
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    grid-column: 2;
  `;

  return <EventDateWrapper>{children}</EventDateWrapper>;
}

export default EventDate;
