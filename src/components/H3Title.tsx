import styled from "styled-components";
import GLOBALS from "../utils/Globals";

function H3Title({ children, column }) {
  const H3 = styled.h3`
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: ${GLOBALS.COLORS.GREY7};
    grid-column: ${column};
    grid-row:  1;

  `;

  return (
      <H3>{children}</H3>
  );
}

export default H3Title;
