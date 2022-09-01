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
import Home from "./Components/NewsCoponent/Home";


function App() {
  return (
    <>
        <div className="App">
          <h1> News~Feeder</h1>
        </div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route
            index
            element={
              <HeadLines Title="UptoDate"  keyword="all" />
            }
          />
          <Route path="/" element={<Home/>}/>
          <Route path="/headlines" element={<HeadLines/>} />
          <Route path="/national" element={<National/>} />
          <Route path="/technology" element={<Technology/>} />
          <Route path="/politics" element={<Politics/>} />
          <Route path="/international" element={<International/>} />
          <Route path="/sports" element={<Sports/>} />
          <Route path="/healthCare" element={<HealthCare/>} />

        </Routes>
      </BrowserRouter>

        
    </>
  );
}

export default App;
