import { AuthInterface } from "../types/type";

//  admin username : atuny0 - 9uQFF1Lh
//  user username : dpierrof - Vru55Y4tufI4

export const authenticationOption = async (data: AuthInterface) => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    }),
  });

  if (response.ok) {
    return response.json();
  } else {
    return "Oops, sorry user not registered";
  }
};
