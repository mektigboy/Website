import React from "react";
import ReactDOM from "react-dom/client";
import Loader from "./Loader";
import Right from "./Right";
import Left from "./Left";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

class App extends React.Component {
  render() {
    <Loader />;
  }
}

root.render(<App />);
