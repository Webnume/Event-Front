import styled from "styled-components";
import { useAxios } from "../hooks/useAxios";
import GLOBALS from "../utils/Globals";
// import H3Title from "./H3Title";

function Participants({ children }) {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "/bookings",
  });

  const ParticipantsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const CirclesWrapper = styled.section`
    display: flex;
    align-items: center;
  `;

  const ParticipantsImageWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #eaeaea;
  `;

  const ParticipantsImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  `;

  const ParticipantsNumber = styled.span`
    border: 1px solid ${GLOBALS.COLORS.LIGHTER_GREY};
    background-color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${GLOBALS.COLORS.GREY8};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  `;

  return (
    <>
      <ParticipantsWrapper>
        {console.log(response)}
        {/* <H3Title>Participants</H3Title> */}
        {loading && <div>loading...</div>}
        {error && <div>error</div>}
        {response && (
          <CirclesWrapper>
            {response.map(
              (participant, i) =>
                i < 3 && (
                  <ParticipantsImageWrapper key={participant.user.id}>
                    {participant.user.avatar.url && (
                      <ParticipantsImage
                        src={participant.user.avatar.url}
                        alt={participant.user.firstName}
                      />
                    )}
                  </ParticipantsImageWrapper>
                )
            )}
            <ParticipantsNumber>{children}</ParticipantsNumber>
          </CirclesWrapper>
        )}
      </ParticipantsWrapper>
    </>
  );
}

export default Participants;
