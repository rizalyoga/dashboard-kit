import { AuthInterface } from "../types/type";

export const authenticationOption = (data: AuthInterface) => {
  if (data.email.includes("admin@admin.com")) {
    alert("Welcome Admin !");
    sessionStorage.setItem("AuthRole", "admin");
    window.location.href = "/overview";
  } else if (data.email.includes("user@user.com")) {
    alert("Welcome User !");
    sessionStorage.setItem("AuthRole", "user");
    window.location.href = "/tickets";
  } else {
    alert("Sorry user not registered !");
  }
};
