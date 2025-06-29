import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./styles.css";
import waveForm from "../src/assets/wave_form.svg";
import logo from "../src/assets/mlogo.svg";
import Logo from "../src/assets/logo.svg";
import google from "../src/assets/google.svg";
const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      login("sample-token");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <img src={waveForm} className="bg-wave" />
        <div className="text-overlay">
          <img src={logo} className="logo" />
          <h1>Your podcast will no longer be just a hobby.</h1>
          <p>Supercharge Your Distribution using our AI assistant!</p>
        </div>
      </div>

      <div className="login-right">
        <img src={Logo} className="toplogo" />
        <h2>
          Welcome to <br />
          <span>Ques.AI</span>
        </h2>

        {error && <p className="error-msg">{error}</p>}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="remember">
          <div className="remember-left">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="#">Forgot password?</a>
        </div>

        <button className="btn-login" onClick={handleLogin}>
          Login
        </button>
        <div className="divider">
          <span>or</span>
        </div>

        <button className="btn-google">
          <img src={google} alt="Google" />
          Continue with Google
        </button>

        <p className="create-account">
          Don’t have an account? <a href="/register">Create Account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
