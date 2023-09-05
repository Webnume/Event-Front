import styled from "styled-components";
import DefaultImage from "../assets/calendar_today_FILL1_wght400_GRAD0_opsz48.svg";
import GLOBALS from "../utils/constants";

const ImageWrapper = styled.img`
  width: ${(props) => (props.detailPage ? "100%" : "171px")};
  height: ${(props) => (props.detailPage ? "208px" : "96px")};
  border-radius: 8px;
  background-color: ${GLOBALS.COLORS.GREY4};
  object-fit: cover;
  @media screen and (max-width: 1050px) {
    min-width: 298px;
    min-height: 96px;
    max-height: 100px;
  }
`;
interface ImageProps {
  url: string;
  alt: string;
  detailPage?: boolean;
}

function Image({ url, alt, detailPage }: ImageProps) {
  return (
    <ImageWrapper
      src={url}
      alt={alt}
      detailPage={detailPage}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = DefaultImage;
        currentTarget.style =
          "padding: 2rem 4.5rem; width: 26.67px; height: 29.33px;";
      }}
    />
  );
}

export default Image;
