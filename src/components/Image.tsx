import styled from "styled-components";

function Image({ url, alt }) {
  const ImageWrapper = styled.img`
    width: 171px;
    height: 96px;
    border-radius: 8px;
    grid-column: 1;
    grid-row: 1 / span 2;
  `;

  return <ImageWrapper src={url} alt={alt} />;
}

export default Image;
