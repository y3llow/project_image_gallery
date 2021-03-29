import { useEffect, useState } from "react";
import useUpload from "../hooks/useUpload";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: 30px auto 10px;
  text-align: center;

  label {
    display: block;
    width: 30px;
    height: 30px;
    border: 1px solid #efb6b2;
    border-radius: 50%;
    margin: 10px auto;
    line-height: 30px;
    color: #efb6b2;
    font-weight: bold;
    font-size: 24px;
  }

  label:hover {
    background: #efb6b2;
    color: white;
  }

  input {
    height: 0;
    width: 0;
    opacity: 0;
  }

  .output {
    height: 60px;
    font-size: 0.8rem;
  }
  .error {
    color: #ff4a4a;
  }
`;

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];
  const { data, uploadImage } = useUpload("http://localhost:1337/upload");

  useEffect(() => {
    data[0] && window.location.reload();
  }, [data]);

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      uploadImage(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file!");
    }
  };

  return (
    <StyledForm>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </StyledForm>
  );
};

export default UploadForm;
