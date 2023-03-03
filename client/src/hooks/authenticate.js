import Axios from "axios";

//   USER AUTHENTICATION FUNCTION
export const isAuth = () => {
  Axios.get("http://localhost:3001/users/profile", {
    withCredentials: true,
  })
    .then((response) => {
      console.log("auth", response);
    })
    .catch((error) => console.log("error", error));
};
