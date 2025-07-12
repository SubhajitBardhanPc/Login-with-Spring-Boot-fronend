import "./HomePage.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("Token");

    axios
      .get(api)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const btnHandle = () => {
    navigate("/dashboard", {
      state: { 
            message: data ? data.message : "No data yet" ,
            status : data ? data.status: "No Status"
      },
    });
  };

  return (
    <div className="card">
      <h2>Hello, this is my Home page</h2>
      <p>Server Data:</p>
      {data ? (
        <>
          <p>Data is: {data.message}</p>
          <p>Data is: {data.status}</p>
          <p>Data is: {data.timestamp}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <button className="btn" onClick={btnHandle}>
        Click Me
      </button>
    </div>
  );
}
