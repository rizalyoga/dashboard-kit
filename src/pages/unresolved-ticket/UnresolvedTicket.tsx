import { authRole } from "../../helper/getRoleAuth";
import PrivatePage from "../../layout/PrivatePage";
import Layout from "../../layout/Layout";
import UnresolvedTickets from "../../components/overview-bottom/UnresolvedTickets";

const UnresolvedTicket = () => {
  return (
    <PrivatePage isSignedIn={authRole}>
      <Layout pageName="Unresolved Ticket" role={authRole as string}>
        <div className="px-5 pt-10 pb-6 bg-light_background dark:bg-dark_background min-h-screen">
          <UnresolvedTickets />
        </div>
      </Layout>
    </PrivatePage>
  );
};

export default UnresolvedTicket;
