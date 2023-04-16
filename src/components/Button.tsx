import styled from "styled-components";
import GLOBALS from "../utils/Globals";

const EventsStatusButton = styled.span`
  padding: 0.5rem 1rem;
  background: white;
  color: ${GLOBALS.COLORS.GREY5};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out ;
  &:hover {
    background: ${GLOBALS.COLORS.BLUE4};
    color: ${GLOBALS.COLORS.BLUE6};
  }
`;

function Button({ children }) {
  return <EventsStatusButton>{children}</EventsStatusButton>;
}

export default Button;
