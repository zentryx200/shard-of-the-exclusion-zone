import Cursor from "./components/common/Cursor/Cursor";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AppRouter from "./app/AppRouter";

import "./styles/global.scss";

function App() {
  return (
    <div>
      <Cursor />
      <Header />

      <main>
        <Hero />
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
