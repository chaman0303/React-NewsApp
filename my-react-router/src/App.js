import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Technology from "./Components/NewsCoponent/Technology";
import Politics from "./Components/NewsCoponent/Politics";
import Navbar from "./Components/Navbar";
import National from "./Components/NewsCoponent/National";
import International from "./Components/NewsCoponent/International";
import Sports from "./Components/NewsCoponent/Sports";
import HealthCare from "./Components/NewsCoponent/HealthCare";
import HeadLines from "./Components/HeadLines";
import Component404 from "./Components/404";

function App() {
  return (
    <>
      <div className="App">
        <h1> News~Feeder</h1>
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<HeadLines Title="UptoDate" keyword="all" />} />
          <Route path="/national" element={<National Title="National" />} />
          <Route
            path="/technology"
            element={<Technology Title="Technology" />}
          />
          <Route path="/politics" element={<Politics Title="Politics" />} />
          <Route
            path="/international"
            element={<International Title="International" />}
          />
          <Route path="/sports" element={<Sports Title="Sports" />} />
          <Route
            path="/healthCare"
            element={<HealthCare Title="HealthCare" />}
          />
           <Route path="*" element={<Component404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
