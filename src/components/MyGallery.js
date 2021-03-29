import UploadForm from "./UploadForm";
import { useState } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import styled from "styled-components";

const StyledUplDescription = styled.div`
  margin: 30px auto 10px;
  text-align: center;
`;

const MyGallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <StyledUplDescription>
      <p>Please click the below button to upload pictures.</p>
      <div>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </StyledUplDescription>
  );
};

export default MyGallery;
