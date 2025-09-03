import { useState } from "react";
import Hero from "./components/Hero/Hero";

import "./styles/global.scss";
import Cursor from "./components/common/Cursor/Cursor";

function App() {
  return (
    <div>
      <Cursor />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
