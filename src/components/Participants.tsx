import styled from "styled-components";
import { useAxios } from "../hooks/useAxios";
import GLOBALS from "../utils/Globals";
import H3Title from "./H3Title";

type ParticipantsProps = {
  children: number;
  detailPage?: boolean;
};

function Participants({ children, detailPage }: ParticipantsProps) {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "/bookings",
  });

  const ParticipantsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    grid-area: 1 / 3 / span 2/ auto;
    grid-area: ${(props) => props.detailPage && "8 / 2 / auto / auto"} } ;
  `;

  const CirclesWrapper = styled.section`
    display: flex;
    align-items: f;
  `;

  const ParticipantsImageWrapper = styled.section`
    margin-right: -20px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: f;
    justify-content: center;
    color: ${GLOBALS.COLORS.WHITE};
    background-color: green;
    font-weight: 400;
    font-size: 14px;
    align-items: center;
  `;

  const ParticipantsImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  `;

  const ParticipantsNumber = styled.span`
    border: 1px solid ${GLOBALS.COLORS.LIGHTER_GREY};
    background-color: ${GLOBALS.COLORS.WHITE};
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

  const participantWithNoAvatar = (firstName, lastName) => {
    const formatName = (name) => {
      return name.charAt(0).toUpperCase();
    };

    return [formatName(firstName), formatName(lastName)];
  };

  return (
    <>
      <ParticipantsWrapper detailPage={detailPage}>
        {loading && <div>loading...</div>}
        {error && <div>error</div>}

        <H3Title column={3}>Participants</H3Title>
        {response && (
          <CirclesWrapper>
            {response.map(
              (participant, i) =>
                i < 3 && (
                  <ParticipantsImageWrapper key={participant.user.id}>
                    {Object.keys(participant.user.avatar).length !== 0 ? (
                      <ParticipantsImage
                        src={participant.user.avatar.url}
                        alt={participant.user.firstName}
                      />
                    ) : (
                      participantWithNoAvatar(
                        participant.user.firstName,
                        participant.user.lastName
                      )
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
