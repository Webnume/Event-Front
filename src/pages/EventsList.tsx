import Filters from "../components/Filters";
import styled from "styled-components";
import EventTitle from "../components/EventTitle";
import Image from "../components/Image";
import Participants from "../components/Participants";
import RemainingTicket from "../components/RemainingTicket";
import GLOBALS from "../utils/constants";
import EventDate from "../components/EventDate";
import Price from "../components/Price";
import { useContext } from "react";
import EventsContext from "../context/EventsContext";
import { useNavigate } from "react-router-dom";

function Events() {
  const { searchResults, fetchError, isLoading } = useContext(EventsContext);

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
    ${(props) =>
      props.state === "active" ? { cursor: "pointer" } : { cursor: "default" }};
    width: 100%;
    justify-content: space-between;
    @media screen and (max-width: 1050px) {
      flex-direction: column;
      width: auto;
    }
  `;

  const RightBlock = styled.section`
    display: flex;
    @media screen and (max-width: 1050px) {
      flex-direction: column;
    }
  `;
  const LeftBlock = styled.section`
    display: flex;
    width: 298px;
    justify-content: space-between;
    margin: 1rem 0  ;
  `;

  const navigate = useNavigate();

  const handleOnClick = (id) => navigate(`/eventDetails/${id}`);

  return (
    <EventsWrapper>
      {isLoading && <p>Loading events...</p>}
      {!isLoading && fetchError && <p style={{ color: "red" }}>{fetchError}</p>}

      <Filters />
      {/* {loading && <div>loading...</div>}
      {error && <div>error</div>} */}
      {searchResults?.map((event) => (
        <EventWrapper
          state={event.state}
          onClick={() =>
            event.state === "active" ? handleOnClick(event.id) : null
          }
          key={event.id}
        >
          <RightBlock>
            <Image url={event.image.url} alt={event.title} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <EventTitle>{event.title}</EventTitle>
              <EventDate>{[event.startAt, event.endAt]}</EventDate>
            </div>
          </RightBlock>
          <LeftBlock>
            <Participants>{event.numberOfParticipants}</Participants>
            <RemainingTicket state={event.state}>
              {event.remainingTickets}
            </RemainingTicket>
          </LeftBlock>

          <Price state={event.state}>
            {event.price === "0.0" ? "Gratuit" : event.price}
          </Price>
        </EventWrapper>
      ))}
    </EventsWrapper>
  );
}

export default Events;
