import { useState } from "react";

const useUpload = (url) => {
  const [data, setData] = useState([]);

  const uploadImage = (entry) => {
    const formData = new FormData();
    formData.set("files", entry);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  return { data, uploadImage };
};

export default useUpload;
