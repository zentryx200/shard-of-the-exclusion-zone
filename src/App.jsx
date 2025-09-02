import { useState } from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import "./styles/global.scss";
import Cursor from "./UI/Cursor/Cursor";

function App() {
  return (
    <div>
      <Cursor />
      <Wrapper />
    </div>
  );
}

export default App;
