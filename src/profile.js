import myPhoto from "./myPhoto.jpg";

export default function Profile() {
  const user = {
    fullName: "Hasib Md Shahriar",
    email: "hasib.cse.20230104004@aust.edu",
    dateJoined: "28 September 2020"
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile</h2>
      <img
        src={myPhoto}
        alt="Profile Photo"
        style={{
          width: "240px",
          height: "240px",
          borderRadius: "2%",
          objectFit: "cover",
          marginTop: "20px",
          marginBottom: "40px"
        }}
      />
      <p><strong>Full Name:</strong> {user.fullName}</p>
      <p><strong>Email:</strong> {user.email} </p>
      <p><strong>Date Joined:</strong> {user.dateJoined}</p>
    </div>
  );
}
