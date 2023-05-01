import styled from "styled-components";
import GLOBALS from "../utils/Globals";

type EventTitleProps = {
  children: string;
  detailPage?: boolean;
};

function EventTitle({ children, detailPage }: EventTitleProps) {
  const EventTitleWrapper = styled.h2`
    font-size: 1.2em;
    text-align: center;
    color: ${GLOBALS.COLORS.GREY9};
    margin: 0;
    text-align: left;
    margin-left: 1rem;
    grid-area: ${(props) => (props.detailPage && "3/2/auto/auto" )} } ;
  `;

  return (
    <EventTitleWrapper detailPage={detailPage}>{children}</EventTitleWrapper>
  );
}

export default EventTitle;
