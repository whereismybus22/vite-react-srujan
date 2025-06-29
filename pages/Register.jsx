import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Logo from "../src/assets/logo.svg";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Registered successfully. You can now login.");
    navigate("/");
  };

  return (
    <div className="register-wrapper">
      <h2>Create an Account</h2>
      <label htmlFor="username">
        Username
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="btn-login" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
