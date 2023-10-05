import Layout from "../../layout/Layout";
import TableTickets from "../../components/table/TableTickets";
import PrivatePage from "../../layout/PrivatePage";
import { authRole } from "../../helper/getRoleAuth";

const TicketPage = () => {
  return (
    <PrivatePage isSignedIn={authRole}>
      <Layout role={authRole as string} pageName="Tickets">
        <div className="px-6 pt-10 min-h-screen bg-light_background">
          <TableTickets />
        </div>
      </Layout>
    </PrivatePage>
  );
};

export default TicketPage;
