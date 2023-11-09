import Button from "@mui/material/Button";
import { Logout } from "../../service/authorize";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function Homepage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    Logout();
    navigate("/");
    Swal.fire(
      'ล็อคเอาท์',
      'คุณได้ออกจากระบบเเล้ว',
      'success'
    )
  };
  const handleShowUser = ()=>{
    navigate('/user')
  }

  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={handleLogout} variant="contained">
        ออกจากระบบ
      </Button>
      <Button onClick={handleShowUser} variant="contained">
        ดูข้อมูลศิษย์เก่า
      </Button>
    </div>
  );
}

export default Homepage;
