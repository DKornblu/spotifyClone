import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import NavbarElement from "./Components/NavBar/NavbarElement";
import BottomPlayBar from "./Components/PlayBar/BottomPlayBar";
import LeftPane from "./Components/LeftBar/LeftPane";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState(false);

  return (
    <>
      <section className="flex flex-col justify-start align-middle h-screen border border-yellow-200 ">
        <BrowserRouter>
          <div className="flex-1 flex flex-row justify-center h-100% overflow-hidden ">
            <LeftPane {...{ searchInput, setSearchInput }} />
            <div>
              <NavbarElement {...{ searchInput }} />
              <Routes>
                <Route path="/" element={<HomePage {...{ searchInput }} />} />
                <Route
                  path="/search"
                  element={<SearchPage {...{ searchInput }} />}
                />
              </Routes>
            </div>
          </div>
          <div className="bg-black flex-1 w-full h-20 bottom-0 fixed ">
            <BottomPlayBar />
          </div>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
