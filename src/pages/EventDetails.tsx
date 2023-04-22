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

function EventDetails() {
  const { eventID } = useParams<{ eventID: string }>();

  const { response, error, loading } = useAxios({
    method: "GET",
    url: `/events/${eventID}`,
  });

  const EventDetailsWrapper = styled.section`
    padding: 4em;
    background: ${GLOBALS.COLORS.GREYBLUE1};
    border-radius: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(7, 1fr);
  `;

  const EventWrapper = styled.section`
    align-items: center;
    margin-bottom: 1rem;
    background-color: white;
    padding: 1rem;
    border-radius: 0.75rem;
  `;

  return (
    <EventDetailsWrapper>
      {loading && <div>loading...</div>}
      {error && <div>error</div>}
      {response && (
        <EventWrapper>
          <H3Title column={1} goBackbBreadCrumb >
            Événements
          </H3Title>
          <Image url={response.image.url} alt={response.title} detailPage />
          <EventTitle>{response.title}</EventTitle>
          <EventDate>{[response.startAt, response.endAt]}</EventDate>
          <H3Title column={4}>Places restantes</H3Title>
          <RemainingTicket>{response.remainingTickets}</RemainingTicket>
          <H3Title column={3}>Participants</H3Title>
          <Participants>{response.numberOfParticipants}</Participants>
          <Price>{response.price === "0.0" ? "Gratuit" : response.price}</Price>
        </EventWrapper>
      )}
    </EventDetailsWrapper>
  );
}

export default EventDetails;
