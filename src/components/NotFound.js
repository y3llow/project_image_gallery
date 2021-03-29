import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNotFound = styled.div`
  margin: 30px auto 10px;
  text-align: center;
`;

const NotFound = () => {
  return (
    <StyledNotFound>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to the homepage...</Link>
    </StyledNotFound>
  );
};

export default NotFound;
