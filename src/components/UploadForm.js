import { useEffect, useState } from "react";
import useUpload from "../hooks/useUpload";
import { FormGroup, Label, Input, Output, Error } from "./styledcomponents/Forms";

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
    <FormGroup>
      <Label>
        <Input type="file" onChange={handleChange} />
        <span>+</span>
      </Label>
      <Output>
        {error && <Error>{error}</Error>}
        {file && <div>{file.name}</div>}
      </Output>
    </FormGroup>
  );
};

export default UploadForm;
