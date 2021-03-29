import styled from "styled-components";

const StyledHome = styled.div`
  margin: 30px auto 10px;
  text-align: center;
`;

const Home = () => {
  return (
    <StyledHome>
      <h2>About:</h2>
      <p>
        Het was een pittige maar leuke opdracht. Ik moest er even in komen maar
        heb uiteindelijk toch iets staan waar ik trots op ben.
      </p>

      <h2>Tools:</h2>
      <p>
        <strong>De tools die ik gebruikt heb zijn als volgt: </strong>
        <br />
        - React (uiteraard)
        <br />
        - React-Router
        <br />
        - Styled Components
        <br />
        - Strapi
        <br />
        - Framer Motion
        <br />
      </p>

      <h2>Github:</h2>
      <a href="https://www.github.com/">Github Link</a>
    </StyledHome>
  );
};

export default Home;
