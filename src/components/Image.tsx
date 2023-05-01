import styled from "styled-components";
import DefaultImage from "../assets/calendar_today_FILL1_wght400_GRAD0_opsz48.svg";
import GLOBALS from "../utils/Globals";

type ImageProps = {
  url: string;
  alt: string;
  detailPage?: boolean;
};

function Image({ url, alt, detailPage }: ImageProps) {
  const ImageWrapper = styled.img`
    width:  ${(props) => (props.detailPage ? "834" : "171")}px;
    height: ${(props) => (props.detailPage ? "208px" : "96px")};
    border-radius: 8px;    
    grid-column: 1;
    grid-row: 1 / span 2; 
    background-color:${GLOBALS.COLORS.GREY4}}; 
    object-fit: cover;   
  `;

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
