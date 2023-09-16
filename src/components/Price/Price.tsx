import styled from "styled-components";
import GLOBALS from "../../utils/constants";

const PriceWrapper = styled.div<{ detailPage?: boolean; state?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${(props) => (props.detailPage ? 388 : 151)}px;
  width: 100%;
  height: ${(props) => (props.detailPage ? "60px" : "96px")};
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  ${(props) =>
    !props.detailPage &&
    "clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);"};
  color: ${(props) =>
    props.state === "active" || props.detailPage
      ? GLOBALS.COLORS.GREEN
      : GLOBALS.COLORS.GREY6};
  background-color: ${(props) =>
    props.state === "active" || props.detailPage
      ? GLOBALS.COLORS.LIME
      : GLOBALS.COLORS.GREY3};
  @media screen and (max-width: 1050px) {
    clip-path: unset;
    width: 100%;
    min-width: 292px;
    height: 58px;
  }
`;

interface PriceProps {
  children: string;
  detailPage?: boolean;
  state?: string;
}

function Price({ children, detailPage, state }: PriceProps) {
  return (
    <PriceWrapper detailPage={detailPage} state={state}>
      {children}
    </PriceWrapper>
  );
}

export default Price;
