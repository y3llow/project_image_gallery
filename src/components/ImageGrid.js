import useFetch from "../hooks/useFetch";
import styled from "styled-components";

const StyledGrid = styled.div`
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  overflow: hidden;
`;

const StyledWrap = styled.div`
  overflow: hidden;
  height: 0;
  padding: 50% 0;
  position: relative;
  opacity: 0.8;
`;

const StyledWrapImg = styled.img`
  min-width: 100%;
  min-height: 100%;
  max-width: 150%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageGrid = ({ setSelectedImg }) => {
  const images = useFetch("http://localhost:1337/upload/files");

  return (
    <StyledGrid>
      {images &&
        images.map((image, idx) => (
          <StyledWrap
            key={idx}
            onClick={() => setSelectedImg("http://localhost:1337" + image.url)}
          >
            <StyledWrapImg
              src={"http://localhost:1337" + image.url}
              alt="uploaded pic"
            />
          </StyledWrap>
        ))}
    </StyledGrid>
  );
};

export default ImageGrid;