import { authData } from "../context/AuthProvider";
function Profile() {
  const { user } = authData();
  return (
    <div>
      <p>Hello, {user.email}</p>
    </div>
  );
}

export default Profile;
