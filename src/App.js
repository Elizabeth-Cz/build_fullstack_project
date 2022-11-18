import { Link, useNavigate } from "react-router-dom";
import "./App.css";
import { useAuth } from "./context/authContext";

function App() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (user)
    return (
      <div>
        <h2>Helloo user {user.email}</h2>
        <button onClick={logout}>logout</button>
        <Link to="/profile" />
      </div>
    );
  return (
    <div className="App">
      <h1>App name</h1>
      <h2>Welcome!</h2>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Sign up</button>
    </div>
  );
}

export default App;
