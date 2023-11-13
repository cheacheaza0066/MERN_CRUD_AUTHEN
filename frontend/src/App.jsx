import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Page/Dashboard/Dashboard";
import Welcome from "./Page/Welcome/Welcome";
import Auth from "./Components/AdminRoute/Auth";
import User from "./Components/User/User";
import ViewUser from "./Components/User/ViewUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Dashboard" element={<Auth><Dashboard /></Auth>} />
        <Route path="/user" element={<Auth><User /></Auth>} />
        <Route path="/userview/:id" element={<Auth><ViewUser /></Auth>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
