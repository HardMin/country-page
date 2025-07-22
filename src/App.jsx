import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";

function App() {
  const [dark, setDark] = useState(false);

  const handleTheme = () => {
    setDark(!dark);
  };

  return (
    <div className={`container ${dark ? "dark" : ""}`}>
      <Header handleTheme={handleTheme} dark={dark} />
      <main>
        <Search />
        <Card />
      </main>
    </div>
  );
}

export default App;
