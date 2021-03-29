import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  border-bottom: 1px solid #f2f2f2;

  h1 {
    color: #f1356d;
  }

  .links {
    margin-left: auto;
  }

  a {
    margin-left: 16px;
    text-decoration: none;
    padding: 6px;
  }

  a:hover {
    color: #f1356d;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Link to="/">
        <h1>Image Gallery</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="my_gallery">My Gallery</Link>
      </div>
    </StyledNav>
  );
};

export default Navbar;
