import Layout from "../../layout/Layout";
import TopOverview from "../../components/overview-top/TopOverview";
import Task from "../../components/overview-bottom/Task";
import UnresolvedTickets from "../../components/overview-bottom/UnresolvedTickets";
import DescriptionCol from "../../components/overview-mid/DescriptionCol";
import Charts from "../../components/overview-mid/Charts";
import PrivatePage from "../../layout/PrivatePage";

const AdminDashboard = () => {
  const auth = sessionStorage.getItem("AuthRole");

  return (
    <PrivatePage isSignedIn={auth}>
      <Layout pageName="Overview" role={auth as string}>
        <div className="px-6 pt-10 pb-6 bg-light_background flex flex-col gap-6">
          <TopOverview />
          <div className=" bg-white flex flex-col lg:flex-row border border-slate-300 rounded-md lg:overflow-x-auto">
            <Charts />
            <DescriptionCol />
          </div>
          <div className=" lg:flex gap-6">
            <UnresolvedTickets />
            <Task />
          </div>
        </div>
      </Layout>
    </PrivatePage>
  );
};

export default AdminDashboard;
