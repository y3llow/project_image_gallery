import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyGallery from "./components/MyGallery";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import styled from "styled-components";

const StyledApp = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

function App() {
  return (
    <Router>
      <StyledApp>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/my_gallery">
            <MyGallery />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </StyledApp>
    </Router>
  );
}

export default App;
