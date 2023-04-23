import styled from "styled-components";
import GLOBALS from "../utils/Globals";
import H3Title from "./H3Title";
import { formatDate } from "../utils/DateTimeFormat";

type EndAtDateProps = {
  children: number;
};

function EndAtDate({ children }: EndAtDateProps) {
  const EndAtDateWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  const Child = styled.span`
    color: ${(props) =>
      props.children < 10 ? GLOBALS.COLORS.RED6 : GLOBALS.COLORS.BLUE6};
  `;

  return (
    <EndAtDateWrapper>
      <H3Title column={4}>Date de clôture</H3Title>
      <Child children={children}>{formatDate(children, true)}</Child>
    </EndAtDateWrapper>
  );
}

export default EndAtDate;
