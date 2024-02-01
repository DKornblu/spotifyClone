import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import NavbarElement from "./Components/NavBar/NavbarElement";
import BottomPlayBar from "./Components/PlayBar/BottomPlayBar";
import LeftPane from "./Components/LeftBar/LeftPane";

function App() {
  return (
    <>
      <section className="flex flex-row justify-center">
        <BrowserRouter>
          <LeftPane />
          <div>
            <NavbarElement />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
      <BottomPlayBar />
    </>
  );
}

export default App;
