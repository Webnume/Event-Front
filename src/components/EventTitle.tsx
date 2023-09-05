import styled from "styled-components";
import GLOBALS from "../utils/constants";

const EventTitleWrapper = styled.h2`
  font-size: 1.2em;
  color: ${GLOBALS.COLORS.GREY9};
  text-align: left;
  @media screen and (max-width: 1050px) {
    margin: 0;
    margin-top: 1rem;
  }
`;
interface EventTitleProps {
  children: string;
  detailPage?: boolean;
}

function EventTitle({ children, detailPage }: EventTitleProps) {
  return (
    <EventTitleWrapper detailPage={detailPage}>
      {children?.length <= 25 ? children : `${children?.slice(0, 25)}...`}
    </EventTitleWrapper>
  );
}

export default EventTitle;
