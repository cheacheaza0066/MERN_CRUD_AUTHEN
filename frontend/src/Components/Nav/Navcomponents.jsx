import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Logout, getID, getRole, getUser } from "../../service/authorize";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Navcomponents() {
  const id = getID();
  const role = getRole();
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    Logout();
    navigate("/");

    Swal.fire("ล็อคเอาท์", "คุณได้ออกจากระบบเเล้ว", "success");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {user && (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button
                className="mt-1"
                onClick={() => navigate("/homepage")}
                color="inherit"
              >
                Homepage
              </Button>
            </Typography>
          )}

          {role === "admin" && (
            <Button onClick={() => navigate("/Dashboard")} color="inherit">
              Dashboard
            </Button>
          )}
          {user && (
            <Button
              onClick={() => navigate(`/editProfile/${id}`)}
              color="inherit"
            >
              Edit Profile
            </Button>
          )}

          {user && (
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          )}
          {/* {!user && <Button color="inherit">Login</Button>} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navcomponents;
