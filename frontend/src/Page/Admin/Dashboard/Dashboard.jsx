import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'
import Navcomponents from "../../../Components/Nav/Navcomponents";
import { getRole } from "../../../service/authorize";
import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import SidebarComponent from "../../../Components/Sidebar/SidebarComponent";
import axios from "axios";
function Dashboard() {
  const navigate = useNavigate();
  const role = getRole();
  const [AdminCount, setAdminCount] = useState(0);
  const [UserCount, setUserCount] = useState(0);

  useEffect(() => {
    if (role === "user") {
      navigate("/");
    }
  }, []);

  const CountAdmin = () => {
    axios.get("http://localhost:5555/api/admin/count").then((res) => {
      console.log(res);
      setAdminCount(res.data.count);
    });
  };
  const CountUser = () => {
    axios.get("http://localhost:5555/api/user/count").then((res) => {
      console.log(res);
      setUserCount(res.data.count);
    });
  };

  useEffect(() => {
    CountAdmin();
    CountUser();
  }, []);

  return (
    <>
      <Navcomponents />

      <div className={styles.main}>
        <SidebarComponent />
        <div className={styles.container}>
          <div className={styles.card}>
            <h3>จำนวน Admin</h3>
            <h4>{AdminCount}</h4>
             
          </div>
          <div className={styles.card}>
           <h3>จำนวน User</h3>
           <h4>{UserCount}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
