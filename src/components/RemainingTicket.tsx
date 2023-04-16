import styled from "styled-components";
import GLOBALS from "../utils/Globals";

function RemainingTicket({ children }) {
  const RemainingTicketWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Child = styled.span`
    color: ${(props) =>
      props.$child < 10 ? GLOBALS.COLORS.RED6 : GLOBALS.COLORS.BLUE6};
  `;

  return (
    <RemainingTicketWrapper>
      <Child $child={children}>{children === 0 ? "Complet" : children}</Child>
    </RemainingTicketWrapper>
  );
}

export default RemainingTicket;
