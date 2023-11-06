import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./Page/Homepage/Homepage";
import Welcome from "./Page/Welcome/Welcome";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/homepage" element={<Homepage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
