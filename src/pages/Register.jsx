import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await register({ email, password });
      setLoading(false);

      // navigate to different page
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input
        value={email}
        type="email"
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
  );
};

export default Register;
