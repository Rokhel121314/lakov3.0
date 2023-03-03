import { Navigate } from "react-router-dom";

function ProtectedRoute({ userData, children }) {
  //   console.log("userData", userData);
  if (!userData) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
