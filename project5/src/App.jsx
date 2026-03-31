import react from "react";
import Student from "./student";
function App() {
  return (
    <div style={{ textAlign:"center",marginTop:"50px" }}>
      <h1>props example in react</h1>
      <Student name="Ankit" age={22} />
      <Student name="Rahul" age={21} />
      <Student name="Priya" age={23} />
    </div>
  );
}

export default App;