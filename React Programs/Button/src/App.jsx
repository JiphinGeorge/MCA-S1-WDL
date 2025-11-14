import Button from "./Button";
import "./App.css";

function App() {
  return (
    <div>
      <h2>Buttons</h2>

      <Button
        label="Click Me"
        onClick={() => alert("Button Clicked")}
      />

      <Button
        label="Another Button"
        onClick={() => alert("Another Button Clicked!")}
      />
    </div>
  );
}

export default App;
