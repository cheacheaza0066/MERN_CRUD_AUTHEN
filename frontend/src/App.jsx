import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Page/Admin/Dashboard/Dashboard";
import Welcome from "./Page/Welcome/Welcome";
import Auth from "./Components/AdminRoute/Auth";
import User from "../src/Page/Admin/UserManagement/User";
import ViewUser from "../src/Page/Admin/UserManagement/ViewUser";
import Homepage from "../src/Page/User/homepage/Homepage";
import UpdateUser from "../src/Page/Admin/UserManagement/UpdateUser";
import EditProfile from "./Page/User/EditProfile/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Dashboard" element={<Auth><Dashboard /></Auth>} />
        <Route path="/homepage" element={<Auth><Homepage /></Auth>} />
        <Route path="/user" element={<Auth><User /></Auth>} />
        <Route path="/userview/:id" element={<Auth><ViewUser /></Auth>} />
        <Route path="/update/:id" element={<Auth><UpdateUser /></Auth>} />
        <Route path="/editProfile/:id" element={<Auth><EditProfile /></Auth>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
