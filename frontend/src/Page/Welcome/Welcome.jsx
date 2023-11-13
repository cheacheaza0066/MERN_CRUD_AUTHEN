import { Container, Col } from "react-bootstrap";
import Styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import Swal from 'sweetalert2'
import { authenticate } from "../../service/authorize";
import Navcomponents from "../../Components/Nav/Navcomponents";

function Welcome() {
  const navigate = useNavigate();
  const [capVal,SetCapVal] = useState(null)
  const [show_Register, setShow_Register] = useState(false);
  const handleClose_Register = () => setShow_Register(false);
  const handleShow_Register = () => setShow_Register(true);
  const [show_Login, setShow_Login] = useState(false);
  const handleClose_Login = () => setShow_Login(false);
  const handleShow_Login = () => setShow_Login(true);



  // Register 
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [student_id, setStudent_id] = useState('')
  const [student_grp, setStudent_grp] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const handleRegister = (e) =>{
    e.preventDefault()
    const date = {
      firstname,
      lastname,
      student_id,
      student_grp,
      email,
      password,
      code,
    }
    axios.post('http://localhost:5555/api/register',date)
    .then(()=>{
      Swal.fire(
      'ลงทะเบียนสำเร็จ',
      'กรุณาล็อคอิน',
      'success'
    )
    handleShow_Login()

    })
    .catch((error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message,
      })
      console.log(error.response.data.message)
    })
    console.log(date)
    handleClose_Register(); // Close the registration modal
  }

//login
const [email_Login, setEmail_Login] = useState('')
const [password_Login, setPassword_Login] = useState('')

  const handleLogin= () =>{
    


    const data_Login = {
      email_Login,  
      password_Login

    }
    axios.post('http://localhost:5555/api/login',data_Login)
    .then((res)=>{
      Swal.fire(
        'สำเร็จ',
        'Login สำเร็จ',
        'success'
      )
      authenticate(res)
      console.log(res)
        navigate('/Dashboard')
      })    
    .catch((error)=>{
     
      Swal.fire({
        icon: 'error',
        title: error.response.data.error,
       
      })
      console.log(error)    
    })
  }



  
  
  return (
    <>
    <Navcomponents/>
      <div className={Styles.container}>
        <Container>
          <Col>
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
              <Form.Label>อีเมล</Form.Label>
              <Form.Control
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รหัสเข้าสู่ระบบ</Form.Label>
              <Form.Control
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ชื่อ</Form.Label>
              <Form.Control
                type="textarea"
                onChange={(e)=>setFirstname(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>นามสกุล</Form.Label>
              <Form.Control
                type="textarea"
                onChange={(e)=>setLastname(e.target.value)}

              />
            </Form.Group>

            <div className={Styles.parent}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รหัสนักศึกษา</Form.Label>
              <Form.Control
                type="textarea"
                onChange={(e)=>setStudent_id(e.target.value)}

              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>กลุ่มนักศึกษา</Form.Label>
              <Form.Control
                type="textarea"
                onChange={(e)=>setStudent_grp(e.target.value)}

              />
            </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รหัสเชิญให้สมัครสมาชิก</Form.Label>
              <Form.Control
                type="textarea"
                onChange={(e)=>setCode(e.target.value)}

              />
            </Form.Group>
            
            <ReCAPTCHA
            sitekey="6LdqrN4oAAAAAEmA1XlLrF3j44JI4pQ3GFSErzes"
            onChange={(val)=> SetCapVal(val)}
            />
      
           
          </Form>
          <Button variant="primary" onClick={handleRegister} disabled={!capVal}>
            ลงทะเบียน
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
              <Form.Label>อีเมล</Form.Label>
              <Form.Control
                type="email"
                autoFocus
                onChange={(e)=>setEmail_Login(e.target.value)}

              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>รหัสผ่าน</Form.Label>
              <Form.Control
                type="password"
                onChange={(e)=>setPassword_Login(e.target.value)}

              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleLogin}>
            เข้าสู่ระบบ
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Welcome;
