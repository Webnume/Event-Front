import styled from "styled-components";
import GLOBALS from "../utils/constants";
import getInitials from "../utils/getInitials";

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
}

function Avatar({ participant }: AvatarProps) {
  const { firstName, lastName, color, avatar } = participant.user;

  return (
    <AvatarWrapper bgColor={color} bgImg={avatar.url}>
      {!avatar.url && getInitials(firstName, lastName)}
    </AvatarWrapper>
  );
}

export default Avatar;
