import Axios from "axios";

//   USER AUTHENTICATION FUNCTION
export const isAuth = async () => {
  try {
    await Axios.get("http://localhost:3001/users/profile", {
      withCredentials: true,
    });
    return (response) => {
      return response.data.isAuth;
    };
  } catch (error) {
    console.log("error", error);
  }
};
