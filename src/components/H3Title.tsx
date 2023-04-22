import styled from "styled-components";
import GLOBALS from "../utils/Globals";
import { useNavigate } from "react-router-dom";

type H3TitleProps = {
  children: string;
  column: number;
  goBackbBreadCrumb?: boolean;
};

function H3Title({ children, column, goBackbBreadCrumb }: H3TitleProps) {
  const H3 = styled.h3`
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: ${GLOBALS.COLORS.GREY7};
    grid-column: ${column};
    grid-row: 1;
  `;

  const navigate = useNavigate();

  return (
    <H3
      goBackbBreadCrumb={goBackbBreadCrumb}
      goBackbBreadCrumb
      {...(goBackbBreadCrumb && { onClick: () => navigate("/") })}
    >
      {children}
    </H3>
  );
}

export default H3Title;
