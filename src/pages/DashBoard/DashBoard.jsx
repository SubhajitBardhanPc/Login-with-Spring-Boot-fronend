// src/pages/DashboardPage.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./DashBoard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function DashboardPage() {
  const location = useLocation();
  const message = location.state?.message || "No Data";
  const status = location.state ?.status || "No Data"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 useEffect(() => {
   const checkToken = async () => {
     const token = localStorage.getItem("Token");
     if (token) {
       try {
         const res = await axios.post(
           import.meta.env.VITE_API_URL_CHECK_TOKEN,
           null,
           {
             headers: {
               Authorization: `Token ${token}`,
             },
           }
         );
         if (res.data.success === true) {
           navigate("/LoginSuccess", { state: { email: res.data.email } });
         }
       } catch (error) {
         console.log("Token invalid or server error:", error);
       }
     }
   };
   checkToken();
 }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
            import.meta.env.VITE_API_URL_LOGIN,
            null,
            {params:{email,password}}

      
      );
     
      if(res.data.success == true){
            localStorage.setItem("Token",res.data.token);
           
            navigate("/LoginSuccess",{state:{email}});
      }else{
            alert("Login Failed");
      }
      console.log(res.data);
      
      
    } catch (error) {
      setResponse("Error connecting to server");
    }
    
  };

  return (
    <>
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard! ✨</p>
        <p>Data from home Page: {message}</p>
        <p>Data from Server status:{status}</p>
      </div>
      <div className="login-card">
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
