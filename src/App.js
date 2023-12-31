import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Api } from "./components/Pages/Api";
import { GameTo } from "./components/Pages/GameTo";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/api" element={<Api />} />
            <Route path="/gameto" element={<GameTo />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
