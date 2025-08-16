import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import myPhoto from "./myPhoto.jpg";

export default function Sidebar({ setSelectedContent }) {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "250px",
      backgroundColor: "#f8f9fa",
      borderRight: "1px solid #ddd",
      padding: "15px",
      overflowY: "auto",
      textAlign: "center"
    }}>

      <img
        src={myPhoto}
        alt="Profile Photo"
        style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%", marginBottom: "10px" }}
      />
      <h6>Hasib Md Shahriar</h6>
      <hr/>

      {/* Menu */}
      <div style={{ textAlign: "left" }}>
        <div style={{ padding: "10px" }}>
          <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
            Profile
          </Link>
        </div>
        <div style={{ padding: "10px" }}>
          <Link to="/articles" style={{ textDecoration: "none", color: "black" }}>
            My Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
