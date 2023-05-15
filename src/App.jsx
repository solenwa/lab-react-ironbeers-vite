import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ListBeersPage from "./pages/ListBeersPage";
import NewBeerPage from "./pages/NewBeerPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import SingleBeerPage from "./pages/SingleBeerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<ListBeersPage />}></Route>
        <Route path="/newbeer" element={<NewBeerPage />}></Route>
        <Route path="/randombeer" element={<RandomBeerPage />}></Route>
        <Route path="/beers/:beerId" element={<SingleBeerPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
