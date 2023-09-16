import styled from "styled-components";
import GLOBALS from "../../utils/constants";
import { formatDate } from "../../utils/DateTimeFormat";

const DateWrapper = styled.span`
  color: ${(props) =>
    Number(props.child) < 10 ? GLOBALS.COLORS.RED6 : GLOBALS.COLORS.BLUE6};
`;

interface EndAtDateProps {
  children: string;
}

function EndAtDate({ children }: EndAtDateProps) {
  return <DateWrapper>{formatDate(children, true)}</DateWrapper>;
}

export default EndAtDate;
