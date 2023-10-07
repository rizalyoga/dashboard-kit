import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ToggleDarkMode from "./ToggleDarkMode";
import clsx from "clsx";

const UserMenu = ({
  showMenu,
  showMenuUser,
}: {
  showMenu: boolean;
  showMenuUser: () => void;
}) => {
  const role = sessionStorage.getItem("AuthRole");
  const navigate = useNavigate();
  const logOut = () => {
    Swal.fire({
      text: "Are you sure to sign out ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3751FF",
      cancelButtonColor: "#525252",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        navigate("/login");
      }
    });
  };

  return (
    <div
      className={showMenu ? "fixed top-0 left-0 w-full h-full z-10" : "hidden"}
      onClick={showMenuUser}
    >
      <div
        className={clsx(
          "absolute bg-white w-48 right-10 top-28 divide-y divide-gray-100 rounded-lg shadow",
          "md:top-16",
          "dark:bg-gray-700 dark:divide-gray-600"
        )}
      >
        <div className=" px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            Jones Ferdinand
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {role}@{role}.com
          </span>
        </div>
        <ul className="py-2">
          <ToggleDarkMode />
          <li>
            <p
              className={clsx(
                "block px-4 py-2 text-sm text-gray-700 cursor-default",
                "hover:bg-gray-100",
                " dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              )}
            >
              Dashboard
            </p>
          </li>
          <li>
            <p className="text-list-menu-style">Settings</p>
          </li>
          <li>
            <p className="text-list-menu-style">Earnings</p>
          </li>
          <li>
            <p onClick={logOut} className="text-list-menu-style">
              Sign out
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
