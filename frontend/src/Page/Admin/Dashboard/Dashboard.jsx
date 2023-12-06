import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'
import Navcomponents from "../../../Components/Nav/Navcomponents";
import { getRole } from "../../../service/authorize";
import { useEffect } from "react";
import  styles  from "./Dashboard.module.css";
import SidebarComponent from "../../../Components/Sidebar/SidebarComponent";
function Dashboard() {
  const navigate = useNavigate();
  const role = getRole();

  const handleShowUser = () => {
    navigate("/user");
  };
  useEffect(() => {
    if (role === "user") {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navcomponents />

        <div className={styles.container}>
        <div>
          <SidebarComponent/>
        </div>
        <div>
        <Button onClick={handleShowUser} variant="contained">
          ดูข้อมูลศิษย์เก่า
        </Button>
        </div>
        </div>

        
    </>
  );
}

export default Dashboard;
