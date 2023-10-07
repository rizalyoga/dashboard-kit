import Layout from "../../layout/Layout";
import { authRole } from "../../helper/getRoleAuth";
import clsx from "clsx";

const ErrorPage = () => {
  return (
    <Layout role={authRole as string} pageName="">
      <div
        className={clsx(
          "flex flex-col bg-light_background h-screen w-full justify-center items-center ",
          "dark:bg-dark_background"
        )}
      >
        <h1
          className={clsx(
            "font-bold text-8xl text-center -mt-40 mb-2 text-slate-700",
            " dark:text-slate-300"
          )}
        >
          Oops!
        </h1>
        <p className={clsx("text-lg text-slate-700", "dark:text-slate-300")}>
          Sorry, an unexpected error has occurred. 😢
        </p>
      </div>
    </Layout>
  );
};

export default ErrorPage;
