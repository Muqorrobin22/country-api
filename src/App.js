import "./App.css";
import { useRef } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const inputRef = useRef();

  function fecthData() {
    const InputValue = inputRef.current.value;
    fetch(`https://restcountries.com/v3.1/name/${InputValue}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  }

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
