import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navcomponents from "../../../Components/Nav/Navcomponents";
import SidebarComponent from "../../../Components/Sidebar/SidebarComponent";
import styles from "./User.module.css";
function User() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const fetchUser = () => {
    axios.get(`http://localhost:5555/api/getall`).then((res) => {
      console.log(res.data.data);
      setUser(res.data.data);
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleDelete = (_id) => {
    // Show confirmation dialog
    Swal.fire({
      title: "คุณแน่ใจหรือไม่?",
      text: "คุณต้องการลบข้อมูลนี้?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่, ลบ!",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with delete
        try {
          axios.delete(`http://localhost:5555/api/${_id}`).then(() => {
            Swal.fire("สำเร็จ", "ลบสำเร็จ", "success");
          });
          fetchUser();
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleView = (_id) => {
    const url = `/userview/:${_id}`;
    navigate(url);
  };

  const handleUpdate = (_id) => {
    const url = `/update/:${_id}`;
    navigate(url);
  };

  return (
    <>
      <Navcomponents />

     <div className={styles.container}>
     <div className={styles.left}>
        <SidebarComponent />
      </div>
      <div className={styles.right}>
      <div className="table-responsive">
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Users</h1>

        <Table striped bordered hover style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((userData) => (
              <tr key={userData._id}>
                <td>{userData.firstname}</td>
                <td>{userData.lastname}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => handleView(userData._id)}
                  >
                    View
                  </Button>{" "}
                  <Button
                    variant="warning"
                    onClick={() => handleUpdate(userData._id)}
                  >
                    Update
                  </Button>{" "}
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(userData._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      </div>
     </div>
    </>
  );
}

export default User;




