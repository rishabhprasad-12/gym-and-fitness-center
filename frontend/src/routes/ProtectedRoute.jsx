import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getProfile } from "../services/auth.service.js";

const ProtectedRoute = ({ children, role }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await getProfile(token);

        //save recent current user
        localStorage.setItem("user", JSON.stringify(response.data));

        if (role && response.data.role !== role) {
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
      } catch (err) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [role]);

  if(loading) {
    return <h2>Loading...</h2>
  }

  if(!isAuthenticated) {
    return <Navigate to="/auth/login" replace />
  }

  return children;
};

export default ProtectedRoute;
