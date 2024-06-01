import "./App.css";
import { Button } from "./components/button";
import '../src/styles/index.css'

function App() {
  return (
    <>
      <h1 style={{ color: "var(--color-accent)" }}>Cute kit</h1>
      <h2 style={{ color: "var(--color-primary)" }}>Run "npm run sb" to enter Storybook</h2>
      <div>
        <Button />
      </div>
    </>
  );
}

export default App;
