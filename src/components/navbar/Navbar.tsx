import { BsFillBellFill, BsSearch } from "react-icons/bs";
import personAvatar from "../../assets/person.jpg";
import UserMenu from "./UserMenu";
import { useState } from "react";

const Navbar = ({ pageName }: { pageName: string }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [openSearchForm, setSearchForm] = useState(false);

  const showMenuUser = () => {
    setIsShowMenu((show) => !show);
  };

  const showSearchInput = () => {
    setSearchForm((show) => !show);
  };

  return (
    <div className="pt-7 px-6  flex justify-between items-center">
      <div>
        <h1 className="font-bold text-2xl dark:text-slate-300">{pageName}</h1>
      </div>
      <div className="flex justify-center items-center gap-4 text-slate-400">
        <form>
          <input
            type="text"
            placeholder="Search..."
            className={
              openSearchForm
                ? "rounded-md border-slate-400 text-black text-sm dark:bg-slate-300 dark:text-slate-800"
                : "hidden"
            }
          />
        </form>
        <BsSearch
          onClick={showSearchInput}
          className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-100"
        />
        <BsFillBellFill className="cursor-pointer hover:text-slate-700 dark:hover:text-slate-100" />
        <span className="text-xl text-slate-300">|</span>
        <p className="text-black hidden md:block dark:text-slate-300">
          Jones Ferdinand
        </p>
        <img
          className="w-10 h-10 rounded-full cursor-pointer -mt-1"
          src={personAvatar}
          alt="Rounded avatar"
          onClick={showMenuUser}
        />

        <UserMenu showMenu={isShowMenu} showMenuUser={showMenuUser} />
      </div>
    </div>
  );
};

export default Navbar;
