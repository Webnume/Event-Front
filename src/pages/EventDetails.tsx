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
import Booking from "../components/Booking";

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

  const WhiteWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    background-color: ${GLOBALS.COLORS.WHITE};
    padding: 1rem 1rem 1rem 1.5rem;
    border-radius: 0.75rem;
    width: 874px;
    position: relative;
  `;

  const DateEventWrapper = styled.section`
    display: flex;
    flex-direction: column;
    position:absolute;
    top:12rem; 
    left:2.3rem;
    padding:1rem; 
    color:${GLOBALS.COLORS.BLUE6};
    background-color:${GLOBALS.COLORS.BLUE4};
    border-radius: 12px;
    width: 2rem;
    `;

  const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 64px 0px 0px;
    gap: 16px;
    min-width: 706px;
    align-self: self-end;
  `;

  const DescriptionWrapper = styled.p`
    font-weight: 400;
    font-size: 14px;
    max-width: 706px;
    color: ${GLOBALS.COLORS.GREY7}};
    text-align: justify;
  `;

  const InfosWrapper = styled.section`
    display: flex;
    gap: 1.5rem;
  `;

  const ParticipantsTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color:${GLOBALS.COLORS.BLACK}} ;
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
          <WhiteWrapper>
            <Image url={response.image.url} alt={response.title} detailPage />
            <DateEventWrapper>FEV 5</DateEventWrapper>
            <ContentWrapper>
              <EventTitle detailPage>{response.title}</EventTitle>
              <EventDate detailPage>
                {[response.startAt, response.endAt]}
              </EventDate>
              <InfosWrapper>
                <RemainingTicket detailPage>
                  {response.remainingTickets}
                </RemainingTicket>
                <EndAtDate>{response.endAt}</EndAtDate>
              </InfosWrapper>
              <DescriptionWrapper>{response.description}</DescriptionWrapper>
            </ContentWrapper>
          </WhiteWrapper>
          <ParticipantsTitle>
            Liste des participants ({response.numberOfParticipants})
          </ParticipantsTitle>
          <WhiteWrapper>
            <Participants detailPage>
              {response.numberOfParticipants}
            </Participants>
          </WhiteWrapper>
        </MainWrapper>
      )}
      <Booking>
        <Price detailPage>{price === "0.0" ? "Gratuit" : price}</Price>
      </Booking>
    </EventDetailsWrapper>
  );
}

export default EventDetails;
