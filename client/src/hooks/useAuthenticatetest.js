import { Axios } from "axios";
import { useEffect, useState } from "react";

function useAuthenticatetest() {
  const [isAuth, setIsAuth] = useState();
  console.log(isAuth);

  const authenticate = async () => {
    try {
      await Axios.get("http://localhost:3001/users/profile", {
        withCredentials: true,
      });
      setIsAuth((response) => response.data.isAuth);
    } catch (error) {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return { isAuth, authenticate };
}

export default useAuthenticatetest;
