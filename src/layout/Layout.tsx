import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const Layout = ({
  children,
  pageName,
}: {
  children: React.ReactNode;
  pageName: string;
}) => {
  return (
    <div className="sm:ml-64">
      <Sidebar />
      <div>
        <Navbar pageName={pageName} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
