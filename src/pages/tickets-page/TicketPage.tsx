import Layout from "../../layout/Layout";
import TableTickets from "../../components/table/TableTickets";
import PrivatePage from "../../layout/PrivatePage";

const TicketPage = () => {
  const auth = sessionStorage.getItem("AuthRole");
  return (
    <PrivatePage isSignedIn={auth}>
      <Layout role={auth as string} pageName="Tickets">
        <div className="px-6 pt-10 min-h-screen bg-light_background">
          <TableTickets />
        </div>
      </Layout>
    </PrivatePage>
  );
};

export default TicketPage;
