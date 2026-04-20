import react , {useRef} from "react";
function App(){
  const inputRef = useRef();
  const hideinput = () => {
    inputRef.current.style.display = "none";
  };
  const showinput = () => {
    inputRef.current.style.display = "block";
  };
  return(
    <div>
      <input ref={inputRef} type="text" placeholder="Enter your name"/>
      <button onClick={hideinput}>Hide</button>
      <button onClick={showinput}>Show</button>
    </div>
  );
}
export default App;