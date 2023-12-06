import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

import Navcomponents from "../../../Components/Nav/Navcomponents";

function EditProfile() {
  const { id } = useParams();
  // const cleanedId = id.substring(1);
  // console.log(cleanedId)

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [student_id, setStudent_id] = useState("");
  const [student_grp, setStudent_grp] = useState("");
  const [role, setRole] = useState("");

  // console.log(firstname, lastname, student_grp, student_id, role);

  const fetchUser = () => {
    axios
      .get(`http://localhost:5555/api/${id}`)
      .then((response) => {
        console.log(response)
        const userData = response.data;
        setFirstname(userData.firstname);
        setLastname(userData.lastname);
        setStudent_id(userData.student_id);
        setStudent_grp(userData.student_grp);
        setRole(userData.role);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname,
      lastname,
      student_id,
      student_grp,
      role,
    };

    axios
      .put(`http://localhost:5555/api/${id}`, data)
      .then((res) => {
        Swal.fire("สำเร็จ", "อัปเดทสำเร็จ", "success");
        console.log(res);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.response.data.message,
        });
      });
  };
  return (
    <>
    <Navcomponents />
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              defaultValue={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>student_id</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setStudent_id(e.target.value)}
              defaultValue={student_id}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid student_id.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>student_grp</Form.Label>
            <Form.Control
              type="text"
              required
              onChange={(e) => setStudent_grp(e.target.value)}
              defaultValue={student_grp}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid student_grp.
            </Form.Control.Feedback>
          </Form.Group>

          
        </Row>

        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  </>
  )
}

export default EditProfile
