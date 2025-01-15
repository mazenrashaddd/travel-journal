import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Entry from "./Components/Entry/Entry.jsx";
import entryData from "./Components/Entry/entryData.js";

function App() {
  const entryElement = entryData.map((entry) => {
    return <Entry key={entry.id} {...entry} />;
  });
  return (
    <>
      <Header />
      {entryElement}
    </>
  );
}

export default App;
