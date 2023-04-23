import styled from "styled-components";
import GLOBALS from "../utils/Globals";
import H3Title from "./H3Title";

type RemainingTicketProps = {
  children: number;
  detailPage?: boolean;
};

function RemainingTicket({ children, detailPage }: RemainingTicketProps) {
  const RemainingTicketWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;
    grid-area: ${(props) => (props.detailPage ? "5/2/auto/auto" : "1 / 4 / auto / auto")} } ;
  `;

  const Child = styled.span`
    color: ${(props) =>
      props.$child < 10 ? GLOBALS.COLORS.RED6 : GLOBALS.COLORS.BLUE6};
  `;

  return (
    <RemainingTicketWrapper detailPage={detailPage}>
      
      <H3Title column={4}>Places restantes</H3Title>
      <Child $child={children}>{children === 0 ? "Complet" : children}</Child>
    </RemainingTicketWrapper>
  );
}

export default RemainingTicket;
