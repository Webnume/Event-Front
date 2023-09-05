import styled from "styled-components";
import GLOBALS from "../utils/constants";

  const AvatarWrapper = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(props) => props.bgColor};
    background-image: url(${(props) => props.bgImg});
    background-size: cover;
    color: ${GLOBALS.COLORS.WHITE};
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: -1rem;
    z-index: 1;
  `;
interface AvatarProps {
  participant: object;
};

function Avatar({ participant }: AvatarProps) {

  const participantInitials = (firstName, lastName) => {
    const formatName = (name) => {
      return name.charAt(0).toUpperCase();
    };

    return [formatName(firstName), formatName(lastName)];
  };

  const { firstName, lastName, color, avatar } = participant.user;

  return (
    <AvatarWrapper bgColor={color} bgImg={avatar.url}>
      {!avatar.url && participantInitials(firstName, lastName)}
    </AvatarWrapper>
  );
}

export default Avatar;
