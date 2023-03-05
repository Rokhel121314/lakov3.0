import { Navigate } from "react-router-dom";

function ProtectedRoute({ persistUserData, children }) {
  //   console.log("userData", userData);
  if (!persistUserData) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
}

export default ProtectedRoute;
