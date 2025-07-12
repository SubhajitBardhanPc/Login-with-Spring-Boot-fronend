
import { useEffect } from "react";
import { useLocation,useNavigate} from "react-router-dom";

export default function LoginSuccess() {
      
      const location  = useLocation();
      const email =  location.state?.email;
      const navigate = useNavigate();
      
     const logOut = () =>{
      localStorage.removeItem("Token");
      navigate("/",{replace:true});
     }
      
      return(
            <>
                  <p>Login Success full</p>
                  <p>Well Come ,{email}</p>
                  <button onClick={logOut}>Log Out</button>
                  
            </>
      )
}