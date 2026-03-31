import react, { useState } from "react";
function App() {
  const[show,setShow]=useState(0);
  
  return (
    <div style={{ textAlign:"center",marginTop:"50px",marginLeft:"20px" }}>
      <h1>multiple conditional rendering example in react</h1>
      {/* buttons to change the state */}
      <button onClick={() => setShow(1)}>Show student </button>
      <button onClick={() => setShow(2)}>Show teacher</button>
      <button onClick={() => setShow(3)}>Show admin</button>
      <hr />
    
      { show===1 ? (
          <h2> welcomeStudent</h2>
        ) : show===2 ? (
          <h2> welcome Teacher</h2>
        ) : show===3 ? (
          <h2> welcome Admin</h2>
        ) : (
          <h2>Please select a role</h2>
        )}
      
    </div>
  );}


export default App;