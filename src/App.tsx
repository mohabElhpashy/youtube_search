// import React, { useEffect } from "react";
import { Header } from "./Components/Header/Header";
// import ItemsList from "./Components/ItemsList";
import Items from "./Components/Items";
//  import { useSelector } from "react-redux";

function App() {
  // const asdas = useSelector((state: {}[]) => state);
  // console.log("stae", asdas);

  return (
    <div className="App">
      <Header />
      <Items />
    </div>
  );
}

export default App;
