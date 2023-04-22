import styled from "styled-components";
import GLOBALS from "../utils/Globals";

type PriceProps = {
  children: string;
};

function Price({ children }: PriceProps) {
  const PriceWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 151px;
    height: 100%;
    border-radius: 8px;
    grid-column: 5;
    grid-row: 1 / span 2;
    background-color: ${GLOBALS.COLORS.LIME};
    color: ${GLOBALS.COLORS.GREEN};
    font-size: 20px;
    font-weight: 600;
  `;

  return <PriceWrapper>{children}</PriceWrapper>;
}

export default Price;
