import { useState, useEffect } from "react";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { authenticationOption } from "../../helper/authentication";
// import { alertError } from "../../helper/alertError";
import clsx from "clsx";
import Loading from "../../components/loading/Loading";

const LoginPage = () => {
  const auth = sessionStorage.getItem("AuthRole");
  const navigate = useNavigate();

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setLogin({
      ...login,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    } else if (auth == "admin") {
      navigate("/overview");
    } else if (auth == "user") {
      navigate("/tickets");
    }
  }, [auth, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading((loading) => !loading);
    // if (login.password.length < 8) {
    //   alertError("Sorry password must contain at least 8 character");
    // } else if (!login.email.includes("@")) {
    //   alertError("Please check your email format");
    // } else {
    //   authenticationOption(login);
    // }
    authenticationOption(login);
  };

  const showPasswordComponents = (style: string) => {
    if (!isShowPassword) {
      return (
        <AiFillEyeInvisible onClick={showPasswordVisible} className={style} />
      );
    } else {
      return <AiFillEye onClick={showPasswordVisible} className={style} />;
    }
  };

  const showPasswordVisible = () => {
    setIsShowPassword((visible) => !visible);
  };

  return (
    <div className="min-h-[100vh] flex justify-center items-center bg-primmary_dark">
      <div
        className={clsx(
          "w-full mx-4 bg-white border border-slate-300 flex justify-center items-center flex-col rounded-md py-12 px-4",
          "md:w-[48%]",
          "lg:w-[40%]",
          "xl:w-[28%]",
          "2xl:w-[24%]",
          "dark:bg-dark_background"
        )}
      >
        <img className="w-[42px]" src={Logo} alt="logo-dashboard" />
        <p className="text-lg font-bold text-slate-400 mb-6">Dashboard Kit</p>
        <h3
          className={clsx(
            "font-bold text-2xl mb-1 text-center",
            " dark:text-slate-300"
          )}
        >
          Log In to Dashboard Kit
        </h3>
        <p className="text-sm text-slate-400 mb-8">
          enter your username and password below
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-slate-400 w-full"
        >
          <span className="flex flex-col">
            <label className="text-base">USERNAME</label>
            <input
              className={clsx(
                "rounded-md placeholder:text-sm text-black",
                " dark:bg-dark_background dark:text-white"
              )}
              name="username"
              type="text"
              placeholder="username"
              required
              onChange={handleChange}
            />
          </span>
          <span className="flex flex-col">
            <span className="flex justify-between">
              <label className="text-sm">PASSWORD</label>
              <p className={clsx("text-sm cursor-pointer", "hover:underline")}>
                Forgot password ?
              </p>
            </span>
            <div className="relative flex">
              <input
                className={clsx(
                  "relative w-full rounded-md placeholder:text-sm text-black",
                  " dark:bg-dark_background dark:text-white"
                )}
                name="password"
                type={isShowPassword ? "text" : "password"}
                placeholder="Password"
                required
                onChange={handleChange}
              />
              {showPasswordComponents(
                "absolute text-xl mt-2.5 mr-2 right-0 cursor-pointer"
              )}
            </div>
          </span>
          {isLoading ? (
            <Loading />
          ) : (
            <input
              className={clsx(
                "bg-primmary_blue rounded-md py-4 font-semibold text-white cursor-pointer",
                "hover:bg-blue-700"
              )}
              type="submit"
              value="Log In"
            />
          )}
        </form>
        <p className="text-base text-slate-400 mt-8">
          Don't have an account ?
          <span className="text-primmary_blue hover:underline">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
