import styled from "styled-components";
import { useAxios } from "../hooks/useAxios";
import H3Title from "./H3Title";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";

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

  const participantInitials = (firstName, lastName) => {
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
          <AvatarGroup max={4} spacing={"small"}>
            {response.map((participant, i) => (
              <Avatar
                alt={
                  participant.user.firstName + " " + participant.user.lastName
                }
                sx={{ bgcolor: "red" }}
                key={participant.user.id}
              >
                {participantInitials(
                  participant.user.firstName,
                  participant.user.lastName
                )}
              </Avatar>
            ))}
          </AvatarGroup>
        )}
      </ParticipantsWrapper>
    </>
  );
}

export default Participants;
