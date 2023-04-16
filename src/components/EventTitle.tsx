import styled from "styled-components";
import GLOBALS from "../utils/Globals";

function EventTitle({ children }) {
  const EventTitleWrapper = styled.h2`
    font-size: 1.2em;
    text-align: center;
    color: ${GLOBALS.COLORS.GREY9};
  `;

  return <EventTitleWrapper>{children}</EventTitleWrapper>;
}

export default EventTitle;
