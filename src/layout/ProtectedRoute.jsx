import { Navigate, useLoaderData } from "react-router-dom";
import { authData } from "../context/AuthProvider";
export async function loader({ request }) {
  const url = new URL(request.url).pathname;
  return url;
}
function ProtectedRoute({ children }) {
  const url = useLoaderData();
  const { user } = authData();
  if (!user.isLoggedIn) {
    return <Navigate to={`/login?redirectTo=${url}`} />;
  }
  return children;
}

export default ProtectedRoute;
