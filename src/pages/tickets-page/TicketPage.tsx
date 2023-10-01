import Layout from "../../layout/Layout";
import TableTickets from "../../components/table/TableTickets";

const TicketPage = () => {
  return (
    <Layout pageName="Tickets">
      <div className="px-6 pt-10 min-h-screen bg-light_background">
        <TableTickets />
      </div>
    </Layout>
  );
};

export default TicketPage;
