import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledGrid = styled.div`
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  overflow: hidden;
`;

const ImageGrid = ({ setSelectedImg }) => {
  const images = useFetch("http://localhost:1337/upload/files");

  return (
    <StyledGrid>
      {images &&
        images.map((image, idx) => (
          <motion.div
            className="img-wrap"
            key={idx}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg("http://localhost:1337" + image.url)}
          >
            <motion.img
              src={"http://localhost:1337" + image.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        ))}
    </StyledGrid>
  );
};

export default ImageGrid;
