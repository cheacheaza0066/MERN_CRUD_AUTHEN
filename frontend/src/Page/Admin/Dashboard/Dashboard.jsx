import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'
import Navcomponents from "../../../Components/Nav/Navcomponents";
import { getRole } from "../../../service/authorize";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const role = getRole();

 
  const handleShowUser = ()=>{
    navigate('/user')
  }
  useEffect(() => {
    if (role ==='user') {
      navigate('/')
    }
  }, [])
  

  return (
  
   <>
   <Navcomponents/>
    <div>
      <h1>Home Page for admin</h1>
     
      <Button onClick={handleShowUser} variant="contained">
        ดูข้อมูลศิษย์เก่า
      </Button>
    </div>
   </>
  );
}

export default Dashboard;
