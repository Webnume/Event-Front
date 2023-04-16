import Filters from "../components/Filters";
import { useAxios } from "../hooks/useAxios";
import styled from "styled-components";
import EventTitle from "../components/EventTitle";
import Image from "../components/Image";
import Participants from "../components/Participants";
import RemainingTicket from "../components/RemainingTicket";
import GLOBALS from "../utils/Globals";
import EventDate from "../components/EventDate";
import Price from "../components/Price";
import H3Title from "../components/H3Title";

function Events() {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "/events",
  });

  const EventsWrapper = styled.section`
    padding: 4em;
    background: ${GLOBALS.COLORS.GREYBLUE1};
    border-radius: 1rem;
  `;

  const EventWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    margin-bottom: 1rem;
    background-color: white;
    padding: 1rem;
    border-radius: 0.75rem;
  `;

  return (
    <EventsWrapper>
      <Filters />
      {loading && <div>loading...</div>}
      {error && <div>error</div>}
      {response &&
        response.map((event) => (
          <EventWrapper key={event.id}>
            <Image url={event.image.url} alt={event.title} />

            <EventTitle>{event.title}</EventTitle>
            <EventDate>5 février 19:00 - 22:30 </EventDate>
            <H3Title column={3}>Participants</H3Title>
            <Participants>{event.numberOfParticipants}</Participants>
            <H3Title column={4}>Places restantes</H3Title>
            <RemainingTicket>{event.remainingTickets}</RemainingTicket>
            <Price>Gratuit</Price>
          </EventWrapper>
        ))}
      {console.log(response && response)}
    </EventsWrapper>
  );
}

export default Events;
