import Layout from "../../layout/Layout";
import TopOverview from "../../components/top-overview/TopOverview";
import Task from "../../components/bottom-overview/Task";
import UnresolvedTickets from "../../components/bottom-overview/UnresolvedTickets";

const AdminDashboard = () => {
  return (
    <Layout pageName="Overview">
      <div className="px-6 pt-10 pb-6 bg-light_background flex flex-col gap-6">
        <TopOverview />
        <div className="CHART h-[400px] bg-white rounded-md"></div>
        <div className=" lg:flex gap-6">
          <UnresolvedTickets />
          <Task />
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
