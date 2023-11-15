import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import Navcomponents from "../Nav/Navcomponents";
import { Container } from "react-bootstrap";

function UpdateUser() {
  const { id } = useParams();
    const cleanedId = id.substring(1);
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [student_id, setStudent_id] = useState('')
    const [student_grp, setStudent_grp] = useState('')

  return (
    <>
      <Navcomponents />
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue="Mark"
                onChange={(e)=>setFirstname(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit">Submit form</Button>
        </Form>
      </Container>
    </>
  );
}

export default UpdateUser;
