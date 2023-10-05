import Swal from "sweetalert2";

export const alertError = (message: string) => {
  Swal.fire({
    icon: "error",
    text: message,
    confirmButtonColor: "#3751FF",
  });
};
