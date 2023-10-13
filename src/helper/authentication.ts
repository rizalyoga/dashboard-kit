import { AuthInterface } from "../types/type";
import Swal from "sweetalert2";

export const authenticationOption = (data: AuthInterface) => {
  // if (data.email.includes("admin@admin.com") && data.password == "12345678") {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: "top-end",
  //     showConfirmButton: false,
  //     timer: 900,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.addEventListener("mouseenter", Swal.stopTimer);
  //       toast.addEventListener("mouseleave", Swal.resumeTimer);
  //     },
  //   });
  //   Toast.fire({
  //     icon: "success",
  //     title: "Welcome Admin !",
  //   });
  //   sessionStorage.setItem("AuthRole", "admin");
  //   setTimeout(() => {
  //     window.location.href = "/overview";
  //   }, 1000);
  // } else if (
  //   data.email.includes("user@user.com") &&
  //   data.password == "12345678"
  // ) {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: "top-end",
  //     showConfirmButton: false,
  //     timer: 900,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.addEventListener("mouseenter", Swal.stopTimer);
  //       toast.addEventListener("mouseleave", Swal.resumeTimer);
  //     },
  //   });
  //   Toast.fire({
  //     icon: "success",
  //     title: "Welcome Developer !",
  //   });
  //   sessionStorage.setItem("AuthRole", "user");
  //   setTimeout(() => {
  //     window.location.href = "/tickets";
  //   }, 900);
  // } else {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: "top-end",
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.addEventListener("mouseenter", Swal.stopTimer);
  //       toast.addEventListener("mouseleave", Swal.resumeTimer);
  //     },
  //   });
  //   Toast.fire({
  //     icon: "error",
  //     title: "Sorry account not registered !",
  //   });
  // }

  if (data.username.includes("user@user.com") && data.password == "12345678") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 900,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "success",
      title: "Welcome Developer !",
    });
    sessionStorage.setItem("AuthRole", "user");
    setTimeout(() => {
      window.location.href = "/tickets";
    }, 900);
  } else {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        // expiresInMins: 60, // optional
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          sessionStorage.setItem("token", json.token);
          sessionStorage.setItem("AuthRole", "admin");

          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 900,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Welcome Admin !",
          });

          setTimeout(() => {
            window.location.href = "/overview";
          }, 1000);
        }
      });
  }
};
