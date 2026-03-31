import React from "react";
import Clock from "./clock";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>react clock using props</h1>
      <Clock color="blue" />
      <Clock color="red" />
      <Clock color="green" />
    </div>
  );
}

export default App;

