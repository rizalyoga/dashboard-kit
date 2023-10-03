import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const Layout = ({
  children,
  pageName,
  role,
}: {
  children: React.ReactNode;
  pageName: string;
  role: string;
}) => {
  return (
    <div className="sm:ml-64">
      <Sidebar role={role as string} />
      <div>
        <Navbar pageName={pageName} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
