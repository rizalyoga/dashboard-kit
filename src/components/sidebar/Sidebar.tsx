import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { listMenu } from "./listMenu";
import { IoSettingsSharp } from "react-icons/io5";
import { PiMedalFill } from "react-icons/pi";
import { sidebarStyleActive, sidebarStyleInActive } from "./sidebarStyle";

const Sidebar = () => {
  return (
    <div className="bg-light_background">
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-primmary_dark text-slate-400 dark:bg-gray-800">
          <div className="flex items-center mb-8 mt-3">
            <img className="w-[34px] mr-2" src={Logo} alt="logo" />
            <h2 className="font-bold text-xl text-slate-400">Dashboard Kit</h2>
          </div>
          <ul className="space-y-2 font-medium">
            {listMenu.map((menu) => (
              <NavLink
                key={menu.name}
                to={menu.link}
                className={({ isActive }) =>
                  isActive ? sidebarStyleActive : sidebarStyleInActive
                }
              >
                <li className="cursor-pointer my-2">
                  <p className="flex items-center hover:bg-gray-400 p-2 rounded-lg  group">
                    <span className="text-lg">{menu.icon}</span>
                    <span className="ml-5">{menu.name}</span>
                  </p>
                </li>
              </NavLink>
            ))}
          </ul>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-600 dark:border-gray-700">
            <li className="cursor-pointer">
              <p className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 group">
                <span className="text-lg">
                  <IoSettingsSharp />
                </span>
                <span className="ml-5">Settings</span>
              </p>
            </li>
            <li className="cursor-pointer">
              <p className="flex items-center p-2 text-slate-500 rounded-lg dark:text-white hover:bg-gray-400 hover:text-white dark:hover:bg-gray-700 group">
                <span className="text-lg">
                  <PiMedalFill />
                </span>
                <span className="ml-5">Subscription</span>
              </p>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
