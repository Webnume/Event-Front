import styled from "styled-components";
import { useAxios } from "../hooks/useAxios";
import EventTitle from "../components/EventTitle";
import Image from "../components/Image";
import Participants from "../components/Participants";
import RemainingTicket from "../components/RemainingTicket";
import GLOBALS from "../utils/Globals";
import EventDate from "../components/EventDate";
import Price from "../components/Price";
import H3Title from "../components/H3Title";
import { useParams } from "react-router-dom";
import EndAtDate from "../components/EndAtDate";
import Reservation from "../components/Reservation";

function EventDetails() {
  const { eventID } = useParams<{ eventID: string }>();

  const { response, error, loading } = useAxios({
    method: "GET",
    url: `/events/${eventID}`,
  });

  const EventDetailsWrapper = styled.section`
    display: flex;
    gap: 16px;
    padding: 1em;
    background: ${GLOBALS.COLORS.GREYBLUE1};
    border-radius: 1rem;
    max-width: 1375px;
  `;
  const MainWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
  `;

  const EventWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    background-color: ${GLOBALS.COLORS.WHITE};
    padding: 1rem 1rem 1rem 1.5rem;
    max-width: 874px;
    border-radius: 0.75rem;
  `;

  const DescriptionWrapper = styled.p`
    font-weight: 400;
    font-size: 14px;
    max-width: 706px;
    color: ${GLOBALS.COLORS.GREY7}};
  `;

  let price = response?.price;

  return (
    <EventDetailsWrapper>
      {loading && <div>loading...</div>}
      {error && <div>error</div>}
      {response && (
        <MainWrapper>
          <H3Title column={1} goBackBreadCrumb>
            Événements
          </H3Title>
          <EventWrapper>
            <Image url={response.image.url} alt={response.title} detailPage />
            <EventTitle detailPage>{response.title}</EventTitle>
            <EventDate detailPage>
              {[response.startAt, response.endAt]}
            </EventDate>
            <RemainingTicket detailPage>
              {response.remainingTickets}
            </RemainingTicket>
            <EndAtDate>{response.endAt}</EndAtDate>

            <DescriptionWrapper>{response.description}</DescriptionWrapper>
          </EventWrapper>
          <span>Liste des participants ({response.numberOfParticipants})</span>
          <Participants detailPage>
            {response.numberOfParticipants}
          </Participants>
          <Reservation>
            <Price detailPage>{price === "0.0" ? "Gratuit" : price}</Price>
          </Reservation>
        </MainWrapper>
      )}
    </EventDetailsWrapper>
  );
}

export default EventDetails;
