import styled from "styled-components";
import GLOBALS from "../utils/Globals";

function Price({ children }) {
  const PriceWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 171px;
    height: 100%;
    border-radius: 8px;
    grid-column: 5;
    grid-row: 1 / span 2;
    background-color: ${GLOBALS.COLORS.LIME};
  `;

  return <PriceWrapper>{children}</PriceWrapper>;
}

export default Price;
