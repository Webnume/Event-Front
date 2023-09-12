import styled from "styled-components";
import DefaultImage from "../../assets/calendar_today_FILL1_wght400_GRAD0_opsz48.svg";
import GLOBALS from "../../utils/constants";

const ImageWrapper = styled.img`
  width: ${(props) =>
    props.detailPage ? "100%" : props.errorPage || props.loader ? "" : "171px"};
  height: ${(props) =>
    props.detailPage ? "208px" : props.errorPage ? "70vh" : "96px"};
  border-radius: 8px;
  background-color: ${GLOBALS.COLORS.GREY4};
  object-fit: cover;
  @media screen and (max-width: 1050px) {
    min-width: ${(props) => (props.errorPage ? "" : "298px")};
    min-height: 96px;
    max-height: ${(props) => (props.errorPage ? "" : "100px")};
    height: ${(props) => props.errorPage && "37vh"};
  }
`;
interface ImageProps {
  url: string;
  alt: string;
  detailPage?: boolean;
  errorPage?: boolean;
  loader?: boolean;
}

function Image({ url, alt, detailPage, errorPage, loader }: ImageProps) {
  return (
    <ImageWrapper
      src={url}
      alt={alt}
      detailPage={detailPage}
      errorPage={errorPage}
      loader={loader}
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
