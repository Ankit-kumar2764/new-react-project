import React from "react";
import User from "./User";
function App() {
  // Object data
  const user = {
    name: "Ankit",
    city: "Delhi"
  };
  // Array data
  const skills = ["React", "Node", "Java"];
  return (
    <div>
      {/*Passing object and array as props
        data = object
        skills = array      */}
      <User data={user} skills={skills} />
    </div>  );}
export default App;