import "./App.css";
import ListsOverview from "./components/ListsOverview/ListsOverview";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Pläneschmiede</h1>
        <br />
        <p>Eine kleine Listen-App. Check, check, hurra!</p>
      </header>
      <main className="main">
        <ListsOverview />
      </main>
    </div>
  );
}
