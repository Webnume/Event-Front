import styled from "styled-components";
import GLOBALS from "../utils/constants";
import H3Title from "./H3Title";

interface RemainingTicketProps {
  children: number;
  detailPage?: boolean;
};

function RemainingTicket({
  children,
  detailPage,
  state,
}: RemainingTicketProps) {
  const RemainingTicketWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.detailPage ? "flex-start" : "center")};
    /* width: ${(props) => (props.detailPage ? "" : "100%")}; */
    gap: ${(props) => (props.detailPage ? "" : "1rem")};
    @media screen and (max-width: 1050px) {
      align-items: flex-start;
    }
  `;

  const Child = styled.span`
    color: ${(props) =>
      props.$state === "active"
        ? props.$child < 10
          ? GLOBALS.COLORS.RED6
          : GLOBALS.COLORS.BLUE6
        : GLOBALS.COLORS.GREY6};
  `;

  return (
    <RemainingTicketWrapper detailPage={detailPage}>
      <H3Title column={4}>Places restantes</H3Title>
      <Child $child={children} $state={state}>
        {children === 0 ? "Complet" : children}
      </Child>
    </RemainingTicketWrapper>
  );
}

export default RemainingTicket;
