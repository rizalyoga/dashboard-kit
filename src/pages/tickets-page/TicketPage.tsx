import Layout from "../../layout/Layout";
import TableTickets from "../../components/table/TableTickets";
import PrivatePage from "../../layout/PrivatePage";
import { authRole } from "../../helper/getRoleAuth";

const TicketPage = () => {
  return (
    <PrivatePage isSignedIn={authRole}>
      <Layout role={authRole as string} pageName="Tickets">
        <div className="px-6 py-10 min-h-screen ">
          <TableTickets />
        </div>
      </Layout>
    </PrivatePage>
  );
};

export default TicketPage;
