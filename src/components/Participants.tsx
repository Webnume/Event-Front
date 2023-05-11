import styled from "styled-components";
import { useAxios } from "../hooks/useAxios";
import H3Title from "./H3Title";
import Avatar from "./Avatar";
import GLOBALS from "../utils/Globals";

type ParticipantsProps = {
  detailPage?: boolean;
};

function Participants({ detailPage }: ParticipantsProps) {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "/bookings",
  });

  const ParticipantsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: ${(props) => (props.detailPage ? "100%" : "10rem")};
  `;

  const AvatarGroup = styled.div`
    display: flex;
  `;

  const AvatarGroupDetailPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
  `;
  const ParticipantBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 97%;
    height: 2rem;
    background-color: ${(props) =>
      props.top ? "green" : GLOBALS.COLORS.WHITE};
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

  return (
    <ParticipantsWrapper detailPage={detailPage}>
      {loading && <div>loading...</div>}
      {error && <div>error</div>}

      {!detailPage && <H3Title column={3}>Participants</H3Title>}
      {!detailPage && response && (
        <AvatarGroup>
          {response.map(
            (participant, i) =>
              i < 3 && (
                <Avatar participant={participant} key={participant.user.id} />
              )
          )}
          <div
            style={{
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: GLOBALS.COLORS.BLACK7,
              backgroundColor: GLOBALS.COLORS.GREY3,
              width: "39px",
              height: "39px",
              borderRadius: "50%",
              border: " 1px solid" + GLOBALS.COLORS.BLACK,
            }}
          >
            {Object.keys(response).length > 3 && Object.keys(response).length}
          </div>
        </AvatarGroup>
      )}
      {detailPage && response && (
        <AvatarGroupDetailPage>
          <ParticipantBar top={true}>
            <span>Salarié</span>
            <span>Quantité réservée</span>
          </ParticipantBar>
          {response.map((participant) => (
            <ParticipantBar key={participant.user.id}>
              <ParticipantLeft>
                <Avatar participant={participant} />
                <span>
                  {participant.user.firstName + " " + participant.user.lastName}
                </span>
              </ParticipantLeft>
              <span>1</span>
            </ParticipantBar>
          ))}
        </AvatarGroupDetailPage>
      )}
    </ParticipantsWrapper>
  );
}

export default Participants;
