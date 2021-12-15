import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router.jsx";
import Footer from "./Footer.jsx";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;
const App = () => {
  return (
    <Container className="container">
      <Router />
      <Footer />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
