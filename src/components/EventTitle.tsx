import styled from "styled-components";
import GLOBALS from "../utils/Globals";

type EventTitleProps = {
  children: string;
  detailPage?: boolean;
};

function EventTitle({ children, detailPage }: EventTitleProps) {
  const EventTitleWrapper = styled.h2`
    font-size: 1.2em;
    color: ${GLOBALS.COLORS.GREY9};
    margin: 0 0 0 1rem;
    text-align: left;
    ${(props) => !props.detailPage && {textOverflow: "ellipsis",
    width: "18rem",
    whiteSpace: "nowrap",
    overflow: "hidden"}
}};
  `;

  return (
    <EventTitleWrapper detailPage={detailPage}>{children}</EventTitleWrapper>
  );
}

export default EventTitle;
