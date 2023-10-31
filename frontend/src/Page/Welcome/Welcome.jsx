import { Container, Col } from "react-bootstrap";
import Styles from "./Welcome.module.css";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ReCAPTCHA from "react-google-recaptcha";

function Welcome() {
  // const navigate = useNavigate();
  const [capVal,SetCapVal] = useState(null)
  const [show_Register, setShow_Register] = useState(false);
  const handleClose_Register = () => setShow_Register(false);
  const handleShow_Register = () => setShow_Register(true);

  const [show_Login, setShow_Login] = useState(false);
  const handleClose_Login = () => setShow_Login(false);
  const handleShow_Login = () => setShow_Login(true);

  return (
    <>
      <div className={Styles.container}>
        <Container>
          <Col>
            ={" "}
            <h1 className="fs-2 text-center mt-3">
              ยินดีต้อนรับสู่หน้าศิษย์เก่า
            </h1>
            <div className="d-flex justify-content-center my-4 ">
            <Button className="me-5" variant="primary" onClick={handleShow_Login}>
                Login
              </Button>
              
              <Button variant="primary" onClick={handleShow_Register}>
                Register
              </Button>
            </div>
          </Col>
        </Container>
      </div>
{/* Register */}

      <Modal show={show_Register} onHide={handleClose_Register}>
        <Modal.Header closeButton>
          <Modal.Title>สมัครสมาชิก</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ชื่อ</Form.Label>
              <Form.Control
                type="textarea"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>นามสกุล</Form.Label>
              <Form.Control
                type="textarea"
              />
            </Form.Group>

            <div className={Styles.parent}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ชื่อ</Form.Label>
              <Form.Control
                type="textarea"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>นามสกุล</Form.Label>
              <Form.Control
                type="textarea"
              />
            </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รหัสเชิญให้สมัครสมาชิก</Form.Label>
              <Form.Control
                type="textarea"
              />
            </Form.Group>
            
            <ReCAPTCHA
            sitekey="6LdqrN4oAAAAAEmA1XlLrF3j44JI4pQ3GFSErzes"
            onChange={(val)=> SetCapVal(val)}
            />
      
           
          </Form>
          <Button variant="primary" onClick={handleClose_Register} disabled={!capVal}>
            Save Changes
          </Button>
        </Modal.Body>

      
         
      </Modal>

{/* Login */}
      <Modal show={show_Login} onHide={handleClose_Login}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose_Login}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose_Login}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Welcome;
