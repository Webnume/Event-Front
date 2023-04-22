import styled from "styled-components";
import GLOBALS from "../utils/Globals";

type EventTitleProps = {
  children: string;
};

function EventTitle({ children }: EventTitleProps) {
  const EventTitleWrapper = styled.h2`
    font-size: 1.2em;
    text-align: center;
    color: ${GLOBALS.COLORS.GREY9};
    margin: 0;
    text-align: left;
    margin-left: 1rem;
  `;

  return <EventTitleWrapper>{children}</EventTitleWrapper>;
}

export default EventTitle;
