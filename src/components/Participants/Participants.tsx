import styled from "styled-components";
import H3Title from "../H3Title/H3Title";
import Avatar from "../Avatar";
import GLOBALS from "../../utils/constants";
import { useContext } from "react";
import BookingsContext from "../../context/BookingsContext";

const ParticipantsWrapper = styled.section<{ $detailPage?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$detailPage ? "flex-start" : "center")};
  width: ${(props) => (props.$detailPage ? "100%" : "10rem")};
  max-width: 806px;
  @media screen and (max-width: 1050px) {
    width: ${(props) => (props.$detailPage ? "100%" : "auto")};
    align-items: flex-start;
  }
`;

const AvatarGroup = styled.div`
  display: flex;
`;

const AvatarCount = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${GLOBALS.COLORS.BLACK7};
  background-color: ${GLOBALS.COLORS.GREY3};
  width: 39px;
  height: 39px;
  border-radius: 50%;
  border: 1px solid ${GLOBALS.COLORS.BLACK};
`;

const AvatarGroupDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  @media screen and (max-width: 1050px) {
    margin-bottom: 8rem;
  }
`;
const ParticipantBar = styled.div<{ top?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  height: 2rem;
  background-color: ${(props) => (props.top ? "green" : GLOBALS.COLORS.WHITE)};
  color: ${(props) => (props.top ? GLOBALS.COLORS.WHITE : "black")};
  border-radius: 0.5rem;
  padding: ${(props) => props.top && "0 1rem"};
`;

const ParticipantLeft = styled.div`
  display: flex;
  width: 90%;
  gap: 2rem;
  align-items: center;
`;
const ParticipantsTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${GLOBALS.COLORS.BLACK};
`;

const WhiteWrapper = styled.section`
  margin-bottom: 1rem;
  background-color: ${GLOBALS.COLORS.WHITE};
  padding: 1rem 1rem 1rem 1.5rem;
  border-radius: 0.75rem;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
interface ParticipantsProps {
  detailPage?: boolean;
  numberOfParticipants?: number;
}

function Participants({ detailPage, numberOfParticipants }: ParticipantsProps) {
  const { bookings, bookingsFetchError, bookingsIsLoading } =
    useContext(BookingsContext);    

  return (
    <ParticipantsWrapper $detailPage={detailPage}>
      {bookingsIsLoading && <p>Loading participants...</p>}
      {!bookingsIsLoading && bookingsFetchError && (
        <p style={{ color: "red" }}>{bookingsFetchError}</p>
      )}

      {!detailPage && <H3Title>Participants</H3Title>}
      {!detailPage && bookings && (
        <AvatarGroup>
          {bookings.map(
            (participant, i) =>
              i < 3 && (
                <Avatar participant={participant} key={participant.user.id} />
              )
          )}
          <AvatarCount>
            {Object.keys(bookings).length > 3 && Object.keys(bookings).length}
          </AvatarCount>
        </AvatarGroup>
      )}

      {detailPage && bookings && (
        <>
          <ParticipantsTitle>
            Liste des participants ({numberOfParticipants})
          </ParticipantsTitle>
          <WhiteWrapper>
            <AvatarGroupDetailPage>
              <ParticipantBar top={true}>
                <span>Salarié</span>
                <span>Quantité réservée</span>
              </ParticipantBar>
              {bookings.map((participant) => (
                <ParticipantBar key={participant.id}>
                  <ParticipantLeft>
                    <Avatar participant={participant} />
                    <span>
                      {participant.user.firstName +
                        " " +
                        participant.user.lastName}
                    </span>
                  </ParticipantLeft>
                  <span>1</span>
                </ParticipantBar>
              ))}
            </AvatarGroupDetailPage>
          </WhiteWrapper>
        </>
      )}
    </ParticipantsWrapper>
  );
}

export default Participants;
