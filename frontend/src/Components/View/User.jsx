import { useState, useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
function User() {
  const [user, setUser] = useState([]);

  const fetchUser = () => {
    axios.get(`http://localhost:5555/api/getall`).then((res) => {
      console.log(res.data.data)
      setUser(res.data.data);
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleDelete = (id) => {
    try {
      axios.delete(`http://localhost:5555/api/${id}`)
    .then(()=>{
      Swal.fire(
        'สำเร็จ',
        'ลบสำเร็จ',
        'success'
      )
    })
    fetchUser()
    } catch (error) {
      console.log(error)
    }
  };

  const handleView = (id) => {
    console.log(`Viewing user with ID: ${id}`);
    // Add your view logic here, using the user id
  };

  const handleUpdate = (id) => {
    console.log(`Updating user with ID: ${id}`);
    // Add your update logic here, using the user id
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Users</h1>

      <div className="table-responsive">
        <Table striped bordered hover>
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
                  <Button variant="info" onClick={() => handleView(userData._id)}>
                    View
                  </Button>
                  {' '}
                  <Button variant="warning" onClick={() => handleUpdate(userData._id)}>
                    Update
                  </Button>
                  {' '}
                  <Button variant="danger" onClick={() => handleDelete(userData._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default User;
