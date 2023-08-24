import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [even, setEven] = useState("");
  useEffect(() => {
    if (time % 2 === 0) {
      setEven("Its a even number");
    } else {
      setEven(null);
    }
  }, [time]);
  const handleInc = () => {
    setTime((time) => time + 1);
  };
  const handleDec = () => {
    setTime((time) => time - 1);
  };
  return (
    <div className="App">
      <h1>Timer</h1>
      {time}
      {even ? even : null}
      <br />
      <br />
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  );
}
