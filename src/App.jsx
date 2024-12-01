import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Check from './Check';
import Remove from './Remove';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check" element={<Check />} />
          <Route path="/remove" element={<Remove />} />
          <Route path="/create" element={<Create />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;