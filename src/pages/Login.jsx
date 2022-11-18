import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import processFirebaseErrors from "../firebase/errors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login({ email, password });
      setLoading(false);

      // navigate to different page
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(processFirebaseErrors(err.message));
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="SUBMIT" />
      </form>
      <p>
        Are you new here? <Link to="/register">Sign up</Link>
      </p>
    </>
  );
};

export default Login;
