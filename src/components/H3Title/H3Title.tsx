import styled from "styled-components";
import GLOBALS from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const H3 = styled.h3`
  font-size: 14px;
  margin: 0;
  font-weight: ${(props) => (props.goBackBreadCrumb ? 400 : 600)};
  color: ${(props) =>
    props.goBackBreadCrumb ? GLOBALS.COLORS.GREY5 : GLOBALS.COLORS.GREY7};
  ${(props) => props.goBackBreadCrumb && "cursor: pointer;"}
  &:before {
    padding: ${(props) => (props.goBackBreadCrumb ? "1rem" : "0")};
    content: "${(props) => (props.goBackBreadCrumb ? "<" : "")}";
  }
`;
interface H3TitleProps {
  children: string;
  goBackBreadCrumb?: boolean;
}

function H3Title({ children, goBackBreadCrumb }: H3TitleProps) {
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
