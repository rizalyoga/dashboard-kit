import Layout from "../../layout/Layout";
import { authRole } from "../../helper/getRoleAuth";

const ErrorPage = () => {
  return (
    <Layout role={authRole as string} pageName="">
      <div className="flex bg-light_background dark:bg-dark_background h-screen w-full justify-center items-center flex-col ">
        <h1 className="font-bold text-8xl text-center -mt-40 mb-2 text-slate-700 dark:text-slate-300">
          Oops!
        </h1>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          Sorry, an unexpected error has occurred. 😢
        </p>
      </div>
    </Layout>
  );
};

export default ErrorPage;
