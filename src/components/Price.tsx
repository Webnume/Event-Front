import styled from "styled-components";
import GLOBALS from "../utils/Globals";

type PriceProps = {
  children: string;
  detailPage?: boolean;
};

function Price({ children, detailPage }: PriceProps) {
  const PriceWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: ${(props) => (props.detailPage ? 388 : 151)}px;
    width: 100%;
    height: ${(props) => (props.detailPage ? "60px" : "96px")};
    border-radius: 8px;
    background-color: ${GLOBALS.COLORS.LIME};
    color: ${GLOBALS.COLORS.GREEN};
    font-size: 20px;
    font-weight: 600;
    ${(props) =>
      !props.detailPage &&
      "clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);"};
  `;

  return <PriceWrapper detailPage={detailPage}>{children}</PriceWrapper>;
}

export default Price;
