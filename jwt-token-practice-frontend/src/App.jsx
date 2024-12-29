import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const handleJsonPracForm = (eve) => {
    eve.preventDefault();
    const email = eve.target.email.value;
    console.log(email);
    const data = { email };
    console.log("btn clicked");
    axios
      .post("http://localhost:5000/email", data, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/email", { withCredentials: true })
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  const inputStyle = {
    padding: "8px 10px",
    color: "black",
  };

  return (
    <>
      <div>
        <form onSubmit={handleJsonPracForm}>
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <button type="submit">Submit</button>
        </form>
        <h1>User data : {users.length}</h1>
      </div>
    </>
  );
}

export default App;
