import Layout from "../../layout/Layout";

const ErrorPage = () => {
  const auth = sessionStorage.getItem("AuthRole");
  return (
    <Layout role={auth as string} pageName="">
      <div className="flex bg-light_background h-screen w-full justify-center items-center flex-col -mt-20">
        <h1 className="font-bold text-8xl text-center mb-2 text-slate-700">
          Oops!
        </h1>
        <p className="text-lg text-slate-700">
          Sorry, an unexpected error has occurred. 😢
        </p>
      </div>
    </Layout>
  );
};

export default ErrorPage;
