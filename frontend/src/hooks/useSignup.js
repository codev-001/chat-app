import { useState } from "react";
import toast from "react-hot-toast";
import {useAuthContext} from "../context/AuthContext.jsx"


const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser}=useAuthContext();


  const Signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "content-type": "Application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      
      if(data.error){
        throw new Error(data.error)
      }
      
      localStorage.setItem("chat-user",JSON.stringify(data))

      setAuthUser(data)

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, Signup };
};

export default useSignup;

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill every box!");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password does not match!");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password must be greater than 6!");
    return false;
  }

  return true;
};
