import styled from "styled-components";
import EventTitle from "../components/EventTitle/EventTitle";
import Image from "../components/Image/Image";
import Participants from "../components/Participants/Participants";
import RemainingTicket from "../components/RemainingTicket/RemainingTicket";
import GLOBALS from "../utils/constants";
import EventDate from "../components/EventDate/EventDate";
import H3Title from "../components/H3Title/H3Title";
import { useParams } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import EndAtDate from "../components/EndAtDate/EndAtDate";
import Booking from "../components/Booking/Booking";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const EventDetailsWrapper = styled.section`
  padding: 1rem;
  background: ${GLOBALS.COLORS.GREYBLUE1};
  border-radius: 1rem;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    padding: 0;
  }
`;
const MainWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  @media screen and (max-width: 1050px) {
    justify-content: center;
  }
`;

const WhiteWrapper = styled.section`
  margin-bottom: 1rem;
  background-color: ${GLOBALS.COLORS.WHITE};
  padding: 1rem;
  border-radius: 0.75rem;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 806px;
`;

const DateEventWrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 12rem;
  left: 2.3rem;
  padding: 1rem 2rem;
  color: ${GLOBALS.COLORS.BLUE6};
  background-color: ${GLOBALS.COLORS.BLUE4};
  border-radius: 0.4rem;
  align-items: center;
  @media screen and (max-width: 1050px) {
    top: 6rem;
    padding: 0.5rem 1.5rem;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0px 0px;
  gap: 16px;
  align-self: self-end;
  width: 87%;
  padding: 0 0 0 1rem;
  @media screen and (max-width: 1050px) {
    padding: 1.5rem 0px 0px;
    width: 96%;
  }
`;

const DescriptionWrapper = styled.p`
    font-weight: 400;
    font-size: 14px;
    max-width: 706px;
    color: ${GLOBALS.COLORS.GREY7};
    text-align: justify;
  `;

const InfosWrapper = styled.section`
  display: flex;
  gap: 1.5rem;
`;
const EndAtDateWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const RemainingTicketWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: "flex-start";
  @media screen and (max-width: 1050px) {
    align-items: flex-start;
  }
`;
interface EventProps {
  id: number;
  title: string;
  description: string;
  state: string;
  price: string;
  tickets: number;
  startAt: string;
  endAt: string;
  image: { url: string };
  remainingTickets: number;
  numberOfParticipants: number;
}

function EventDetails() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventProps>({} as EventProps);

  const { data, fetchError, isLoading } = useAxiosFetch(
    `${GLOBALS.API.BASE_URL}/events/${id}`
  );

  useEffect(() => {
    setEvent(data as unknown as EventProps);
  }, [data]);

  let price = event.price === "0.0" ? "Gratuit" : event.price;

  return (
    <EventDetailsWrapper>
      {isLoading ? (
        <Loader />
      ) : fetchError ? (
        <div>error</div>
      ) : (
        <MainWrapper>
          <WhiteWrapper>
            <H3Title goBackBreadCrumb>Événements</H3Title>
            <Image url={event.image?.url} alt={event.title} detailPage />
            <DateEventWrapper>
              <p>FÉV</p>
              <p style={{ fontSize: "1.5rem", fontWeight: "800" }}>5</p>
            </DateEventWrapper>
            <ContentWrapper>
              <EventTitle detailPage>{event.title}</EventTitle>
              <EventDate detailPage>{[event.startAt, event.endAt]}</EventDate>
              <InfosWrapper>
                <RemainingTicketWrapper>
                  <H3Title>Places restantes</H3Title>
                  <RemainingTicket>
                    {event.remainingTickets}
                  </RemainingTicket>
                </RemainingTicketWrapper>
                <EndAtDateWrapper>
                  <H3Title>Date de clôture</H3Title>
                  <EndAtDate>{event.endAt}</EndAtDate>
                </EndAtDateWrapper>
              </InfosWrapper>
              <DescriptionWrapper>{event.description}</DescriptionWrapper>
            </ContentWrapper>
          </WhiteWrapper>
          <Booking price={price}/>
          <Participants
            detailPage
            numberOfParticipants={event.numberOfParticipants}
          />
        </MainWrapper>
      )}
    </EventDetailsWrapper>
  );
}

export default EventDetails;
