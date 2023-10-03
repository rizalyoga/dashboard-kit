import { useNavigate } from "react-router-dom";

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
    if (confirm("Are you sure to log out ?")) {
      sessionStorage.clear();
      navigate("/login");
    }
  };

  return (
    <div
      className={showMenu ? "fixed top-0 left-0 w-full h-full z-10" : "hidden"}
      onClick={showMenuUser}
    >
      <div className="absolute w-48 right-10 top-28 sm:top-16 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 bg-white">
        <div className=" px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            Jones Ferdinand
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {role}@{role}.com
          </span>
        </div>
        <ul className="py-2">
          <li>
            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-default">
              Dashboard
            </p>
          </li>
          <li>
            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-default">
              Settings
            </p>
          </li>
          <li>
            <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-default">
              Earnings
            </p>
          </li>
          <li>
            <p
              onClick={logOut}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-default"
            >
              Sign out
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
