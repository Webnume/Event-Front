import styled from "styled-components";
import GLOBALS from "../utils/Globals";
import { useNavigate } from "react-router-dom";

type H3TitleProps = {
  children: string;
  column: number;
  goBackBreadCrumb?: boolean;
};

function H3Title({ children, column, goBackBreadCrumb }: H3TitleProps) {
  const H3 = styled.h3`
    font-size: 14px;    
    margin:0 ;
    font-weight: ${(props) => (props.goBackBreadCrumb ? 400 : 600)};
    color: ${(props) =>
      props.goBackBreadCrumb ? GLOBALS.COLORS.GREY5 : GLOBALS.COLORS.GREY7};
    grid-column: ${column};
    grid-row: 1;
    ${(props) =>
      props.goBackBreadCrumb &&
      "cursor: pointer;grid-area: 1/1/auto/auto;text-align: start;"}
    &:before {
      padding: ${(props) => (props.goBackBreadCrumb ? "1rem" : "0")};
      content: "${(props) => (props.goBackBreadCrumb ? "<" : "")}";
    }
  `;

  const navigate = useNavigate();

  return (
    <H3
      goBackBreadCrumb={goBackBreadCrumb}
      {...(goBackBreadCrumb && { onClick: () => navigate("/") })}
    >
      {children}
    </H3>
  );
}

export default H3Title;
