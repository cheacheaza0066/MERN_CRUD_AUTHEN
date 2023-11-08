import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../service/authorize";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Auth = ({ children }) => {
  const user = getUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณาล็อคอิน',
      }).then(() => {
        navigate("/");
      });
    }
  }, [user, navigate]);

  if (!user) {
    return null; // Render nothing until the Swal popup is closed
  }

  return children;
};

export default Auth;
