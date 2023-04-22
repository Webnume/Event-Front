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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Events() {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "/events",
  });

  const EventsWrapper = styled.section`
    padding: 3rem;
    background: ${GLOBALS.COLORS.GREYBLUE1};
    border-radius: 1rem;
  `;

  const EventWrapper = styled.section`
    display: grid;
    grid-template-columns: 171px 400px repeat(3, 1fr);
    align-items: center;
    margin-bottom: 1rem;
    background-color: white;
    padding: 1rem;
    border-radius: 0.75rem;
    cursor: pointer;
  `;

  const [search, setNewSearch] = useState("active");

  const navigate = useNavigate();

  const handleOnClick = (id) => navigate(`/eventDetails/${id}`);

  const filtered = !search
    ? response
    : response?.filter((events) =>
        events.state.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <EventsWrapper>
      <Filters setNewSearch={setNewSearch} />
      {loading && <div>loading...</div>}
      {error && <div>error</div>}
      {filtered?.map((event) => (
        <EventWrapper onClick={() => handleOnClick(event.id)} key={event.id}>
          <Image url={event.image.url} alt={event.title}  />
          <EventTitle>{event.title}</EventTitle>
          <EventDate>{[event.startAt, event.endAt]}</EventDate>
          <H3Title column={3}>Participants</H3Title>
          <Participants>{event.numberOfParticipants}</Participants>
          <H3Title column={4}>Places restantes</H3Title>
          <RemainingTicket>{event.remainingTickets}</RemainingTicket>
          <Price>{event.price === "0.0" ? "Gratuit" : event.price}</Price>
        </EventWrapper>
      ))}
    </EventsWrapper>
  );
}

export default Events;
