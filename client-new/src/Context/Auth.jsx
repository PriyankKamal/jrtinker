import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); 

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [navbarName,setNavbarName] = useState("")
  // const [loginUsername,setLoginUsername] = useState("")
  // const [googleProgilePic,setGoogleProfilePic] = useState("")
  // const [normalLogin,setNormalLogin] = useState(false)
  // const [googleLoginBtn,setGoogleLoginBtn] = useState(false)



  const splitNameFunction=(x)=>{
    console.log("splitname: ",x)
    const splitName = x.split(" ");
    const joinName = splitName.map((e)=>e[0]).join("")
    setNavbarName(joinName)

  }
  // Normal email/password login
  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4600/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const result = await response.json();
        setIsAuthenticated(true);
        setUser(result.user);
        console.log("login user: ",result.user.username)
        splitNameFunction(result.user.username)
        // setLoginUsername(result.user.name)
        // setNormalLogin(true)
        toast.success("Login successful!");
        navigate("/");
      } else {
        const error = await response.json();

        toast.error(`Login failed: ${error.message}`);
        // setNormalLogin(false)
        
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // setNormalLogin(false)
      toast.error(`Something went wrong. ${error.message}`);
    } finally {
      setLoading(false);
     
    }
  };
 
  // 🔐 Google Login
  const loginWithGoogle = () => {
    // setGoogleLoginBtn(true)
    window.location.href = "http://localhost:4600/api/auth/google/callback";
  };

  // 🧠 Get user info if already logged in (on refresh)
  useEffect(() => {
    fetch("http://localhost:4600/api/getUser", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not logged in");
        return res.json();
      })
      .then((data) => {
        console.log("/api/user: ",data.user)
        // toast.success(data.message);
        setUser(data.user);
        // setLoginUsername(data.user.username)
        // setGoogleProfilePic(data.user.profilepic)
        setIsAuthenticated(true);
      }) 
      .catch(() => {
        setUser(null);
        setIsAuthenticated(false);
      });
  }, []);

  const logoutWithGoogle = async () => {
    try {
      const response = await fetch("http://localhost:4600/api/logout-user", {
        method: "POST",
        credentials: "include", // important to include cookies
      });
  
      if (response.ok) {
        // setGoogleLoginBtn(false)
        const result = await response.json()
        setIsAuthenticated(false);
        setUser(null);
        toast.success(result.message);
       navigate("/login"); // or wherever you want to redirect
      } else {
        toast.error("Logout failed.");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Logout failed.");
    }
  };
  



  // 🚪 Logout
  const logout = async () => {
    try {
      const response = await fetch("http://localhost:4600/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        console.log("logout response: ",response) 
        const result = await response.json()
        setIsAuthenticated(false);
        setUser(null);
        toast.success(result.message);
        // setNormalLogin(false)
        navigate("/login");
      } else {
        toast.error("Logout failed.");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Logout failed.", error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, loginWithGoogle, logout, loading ,logoutWithGoogle ,navbarName}}
    >
      {children}
    </AuthContext.Provider>
  );
};
