// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import "./styles.css";
// const Login = () => {
//   const { login } = useContext(AuthContext);
//   const [email, setEmail] = useState("");

//   const handleLogin = async () => {
//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     });
//     const data = await res.json();
//     if (data.token) login(data.token);
//   };

//   return (
//     <div className="container">
//       <div className="container-logo">
//         <img src="../src/assets/logo.svg" alt="" />
//       </div>
//       <div className="login-container">
//         <h2>Welcome to Quest.AI</h2>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//         />
//         <button onClick={handleLogin}>Continue</button>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./styles.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) login(data.token);
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <img
          src="../src/assets/wave_form.svg"
          alt="background"
          className="bg-wave"
        />
        <div className="text-overlay">
          <img src="../src/assets/mlogo.svg" alt="logo" className="logo" />
          <h1>Your podcast will no longer be just a hobby.</h1>
          <p>Supercharge Your Distribution using our AI assistant!</p>
        </div>
      </div>

      <div className="login-right">
        <img src="../src/assets/logo.svg" alt="logo" className="logo" />
        <h2>
          Welcome to <br />
          <span>Ques.AI</span>
        </h2>
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
            <input type="checkbox" />
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
          <img src="../src/assets/google.svg" alt="Google" />
          Continue with Google
        </button>

        <p className="create-account">
          Don’t have an account? <a href="#">Create Account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
