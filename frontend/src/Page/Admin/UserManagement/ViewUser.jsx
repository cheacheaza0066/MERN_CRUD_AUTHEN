import { useEffect, useState } from "react";
import CardUser from "../../../Components/Card/CardUser";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navcomponents from "../../../Components/Nav/Navcomponents";
import styles from "./ViewUser.module.css";
import SidebarComponent from "../../../Components/Sidebar/SidebarComponent";
function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const cleanedId = id.substring(1);

  const fetchUser = () => {
    axios
      .get(`http://localhost:5555/api/${cleanedId}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user);
  return (
    <>
      <Navcomponents />
      <div className={styles.container}>
        <div>
          <SidebarComponent />
        </div>
        <div className={styles.right}>
          <CardUser user={user} />
        </div>
      </div>
    </>
  );
}

export default ViewUser;
