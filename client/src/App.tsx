import { useState } from "react";

// import "./App.css";
import { useGetSalonsQuery } from "./store";

function App() {
  const [count, setCount] = useState(0);
  const { data } = useGetSalonsQuery();

  return (
    <>
    {data && <div>{data[0].address}</div>}
    test
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
