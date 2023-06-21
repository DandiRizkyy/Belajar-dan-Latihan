import { useSelector } from "react-redux/es/hooks/useSelector";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
    </>
  );
}

export default App;
