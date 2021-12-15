import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router.jsx";

const App = () => {
  return (
    <div className="container">
      <Router />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
