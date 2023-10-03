import { Navigate } from "react-router-dom";

const PrivatePage = ({
  isSignedIn,
  children,
}: {
  isSignedIn: string | null;
  children: React.ReactNode;
}) => {
  if (isSignedIn == "admin") {
    return children;
  } else if (isSignedIn == "user") {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default PrivatePage;
