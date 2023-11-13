import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'
import Navcomponents from "../../Components/Nav/Navcomponents";

function Dashboard() {
  const navigate = useNavigate();

 
  const handleShowUser = ()=>{
    navigate('/user')
  }

  return (
  
   <>
   <Navcomponents/>
    <div>
      <h1>Home Page</h1>
     
      <Button onClick={handleShowUser} variant="contained">
        ดูข้อมูลศิษย์เก่า
      </Button>
    </div>
   </>
  );
}

export default Dashboard;
