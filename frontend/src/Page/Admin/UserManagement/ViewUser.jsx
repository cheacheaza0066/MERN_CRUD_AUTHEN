import { useEffect, useState } from "react";
import CardUser from "../../../Components/Card/CardUser";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navcomponents from "../../../Components/Nav/Navcomponents";

function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState([])
  const cleanedId = id.substring(1);


  const fetchUser = () => {
    axios.get(`http://localhost:5555/api/${cleanedId}`)
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

console.log(user)
  return (
    <>
    <Navcomponents/>
    <div>
      <CardUser user={user} />
    </div>
    </>
  );
}

export default ViewUser;
