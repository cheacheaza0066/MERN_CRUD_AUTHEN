import { useEffect, useState } from "react";
import CardUser from "../Card/CardUser";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navcomponents from "../Nav/Navcomponents";

function ViewUser() {
  const { _id } = useParams();
  const [user, setUser] = useState([])
  console.log(_id)

  const fetchUser = () => {
    axios.get(`http://localhost:5555/api/${_id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  };

  useEffect(() => {
    fetchUser();
  }, [_id]);

  console.log(user);

  return (
    <>
    <Navcomponents/>
    <div>
      <h1>User Details</h1>
      <CardUser user={user} />
    </div>
    </>
  );
}

export default ViewUser;
