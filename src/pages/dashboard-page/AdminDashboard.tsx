import Layout from "../../layout/Layout";
import TopOverview from "../../components/overview-page-content/overview-top/TopOverview";
import Task from "../../components/overview-page-content/overview-bottom/Task";
import UnresolvedTickets from "../../components/overview-page-content/overview-bottom/UnresolvedTickets";
import DescriptionCol from "../../components/overview-page-content/overview-mid/DescriptionCol";
import Charts from "../../components/overview-page-content/overview-mid/Charts";
import PrivatePage from "../../layout/PrivatePage";
import { authRole } from "../../helper/getRoleAuth";
import clsx from "clsx";

const AdminDashboard = () => {
  return (
    <PrivatePage isSignedIn={authRole}>
      <Layout pageName="Overview" role={authRole as string}>
        <div className="px-6 pt-10 pb-6 flex flex-col gap-6">
          <TopOverview />
          <div
            className={clsx(
              "bg-white flex flex-col border border-slate-300 rounded-md ",
              "lg:flex-row lg:overflow-x-auto"
            )}
          >
            <Charts />
            <DescriptionCol />
          </div>
          <div className={clsx("grid grid-flow-row gap-6", "lg:grid-cols-2")}>
            <UnresolvedTickets />
            <Task />
          </div>
        </div>
      </Layout>
    </PrivatePage>
  );
};

export default AdminDashboard;
