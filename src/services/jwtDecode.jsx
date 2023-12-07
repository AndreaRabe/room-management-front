import { jwtDecode } from "jwt-decode";

export const decodeToken = () => {
  let token = window.localStorage.getItem("access_token");
  if(token){
    const decoded = jwtDecode(token);
    return decoded;
  }
  else{
    return "Enough token"
  }
};