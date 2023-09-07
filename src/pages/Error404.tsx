import styled from "styled-components";
import Image from "../components/Image/Image";
import GLOBALS from "../utils/constants";
import DefaultImage from "../assets/error404.jpg";
import { useNavigate } from "react-router-dom";

const EventsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 3rem;
  background: ${GLOBALS.COLORS.GREYBLUE1};
  border-radius: 1rem;
  width: 100%;

  @media screen and (max-width: 1050px) {
    padding: 2rem 0;
    align-items: center;
  }
`;

const EventWrapper = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  background-color: ${GLOBALS.COLORS.WHITE};
  padding: 1rem;
  border-radius: 0.75rem;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    width: auto;
  }
`;

const BackToHome = styled.span`
  color: ${GLOBALS.COLORS.GREY7};
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 1rem;
  cursor: pointer;
  &:before {
    padding: 1rem;
    content: "<";
  }
`;

function Error404() {
  const navigate = useNavigate();
  return (
    <EventsWrapper>
      <EventWrapper onClick={() => navigate("/")}>
        <Image url={DefaultImage} alt="error 404" errorPage />
        <BackToHome>Retour à l'accueil</BackToHome>
      </EventWrapper>
    </EventsWrapper>
  );
}

export default Error404;
