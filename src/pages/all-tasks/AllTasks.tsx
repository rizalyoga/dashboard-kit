import Task from "../../components/overview-bottom/Task";
import { authRole } from "../../helper/getRoleAuth";
import PrivatePage from "../../layout/PrivatePage";
import Layout from "../../layout/Layout";

const AllTasks = () => {
  return (
    <PrivatePage isSignedIn={authRole}>
      <Layout role={authRole as string} pageName="All Tasks">
        <div className="px-5 pt-10 pb-6 bg-light_background min-h-screen">
          <Task />
        </div>
      </Layout>
    </PrivatePage>
  );
};

export default AllTasks;
