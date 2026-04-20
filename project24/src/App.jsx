import React from "react";
import { useRef } from "react";
function App() {
   const countRef=useRef(0);
   const [statecount,setStatecount]=React.useState(0);
   return (
    <div>
      <h1>Count:{countRef.current}</h1>
      <h1>State Count:{statecount}</h1>
      <button onClick={()=>{
        countRef.current++}}>Increment Ref</button>
      <button onClick={()=>{
        setStatecount(statecount+1);
      }}>Increment</button>
    </div>
  );
}

export default App;