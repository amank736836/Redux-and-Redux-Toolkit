import { useSelector } from "react-redux";
import "./App.css";
import Home from "./Home.jsx";

function App() {
  const { c } = useSelector((state) => state.custom);

  // const value = 30;
  return (
    <div>
      <h1>{c}</h1>

      {/* {c} */}
      <Home
      //  value1={value}
      />
    </div>
  );
}

export default App;
