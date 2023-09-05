import styled from "styled-components";
import GLOBALS from "../../utils/constants";
import H3Title from "../H3Title/H3Title";
import { formatDate } from "../../utils/DateTimeFormat";

  const EndAtDateWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  const DateWrapper = styled.span`
    color: ${(props) =>
     Number(props.child)  < 10 ? GLOBALS.COLORS.RED6 : GLOBALS.COLORS.BLUE6};
  `;

interface EndAtDateProps {
  children: number;
};

function EndAtDate({ children }: EndAtDateProps) {
  return (
    <EndAtDateWrapper>
      <H3Title column={2}>Date de clôture</H3Title>
      <DateWrapper >{formatDate(children, true)}</DateWrapper>
    </EndAtDateWrapper>
  );
}

export default EndAtDate;
