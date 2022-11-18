import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Profile = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guests, setGuests] = useState(0);
  const [kids, setKids] = useState(false);
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //   const { register } = useAuth();
  //   const navigate = useNavigate();

  //   const onSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       setLoading(true);
  //       await register({ email, password });
  //       setLoading(false);

  //       // navigate to different page
  //       navigate("/");
  //     } catch (err) {
  //       setLoading(false);
  //       setError(err.message);
  //     }
  //   };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <form>
        <h1>Profile</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <label htmlFor="email">Name</label>
        <input
          value={name}
          type="text"
          name="email"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">City</label>
        <select>
          <option disabled>Please select city...</option>
          <option value="amsterdam">Amsterdam</option>
          <option value="berlin">Berlin</option>
          <option value="paris">Paris</option>
          <option value="london">London</option>
        </select>
        <label htmlFor="startDate">Start Date</label>
        <input type="date" name="startDate" id="start-date" />
        <label htmlFor="endDate">End Date</label>
        <input type="date" name="endDate" id="end-date" />

        <input type="submit" value="SUBMIT" />
      </form>
    </>
  );
};

export default Profile;
