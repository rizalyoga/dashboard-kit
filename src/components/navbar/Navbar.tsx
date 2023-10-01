import { BsFillBellFill, BsSearch } from "react-icons/bs";
import personAvatar from "../../assets/person.jpg";

const Navbar = ({ pageName }: { pageName: string }) => {
  return (
    <div className="pt-7 px-6 bg-light_background flex justify-between">
      <div>
        <h1 className="font-bold text-2xl">{pageName}</h1>
      </div>
      <div className="flex justify-center items-center gap-4 text-slate-400">
        <BsSearch className="cursor-pointer hover:text-slate-700" />
        <BsFillBellFill className="cursor-pointer hover:text-slate-700" />
        <span className="text-xl text-slate-300">|</span>
        <p className="text-black">Jones Ferdinand</p>
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src={personAvatar}
          alt="Rounded avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
