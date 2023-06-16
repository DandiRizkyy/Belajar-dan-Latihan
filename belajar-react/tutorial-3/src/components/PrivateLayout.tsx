import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { List } from "../pages/Category/List";
import { useEffect, useMemo } from "react";
import axios from "axios";

export const PrivateLayout = () => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const isAuth = useMemo(() => !!token, [navigate]);
  const fetchProfile = async () => {
    if (token) {
      try {
        await axios.get("https://mock-api.arikmpt.com/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [navigate]);

  return (
    <>
      {isAuth ? (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
