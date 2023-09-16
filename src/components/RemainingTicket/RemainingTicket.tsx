import styled from "styled-components";
import GLOBALS from "../../utils/constants";

const Child = styled.span<{ $child: number; $state?: string }>`
  color: ${(props) =>
    props.$state === "active"
      ? props.$child < 10
        ? GLOBALS.COLORS.RED6
        : GLOBALS.COLORS.BLUE6
      : GLOBALS.COLORS.GREY6};
`;
interface RemainingTicketProps {
  children: number;
  state?: string;
}

function RemainingTicket({ children, state }: RemainingTicketProps) {
  return (
    <Child $child={children} $state={state}>
      {children === 0 ? "Complet" : children}
    </Child>
  );
}

export default RemainingTicket;
