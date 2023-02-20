import "./App.css";
import { data } from "./data";

export const App = () => {
  return (
    <div className="App">
      <>
        {data.map((item) => (
          <pre>{item.name}</pre>
        ))}
      </>
    </div>
  );
};
