import { IoMdContacts } from "react-icons/io";
import { FaChartPie, FaTicketAlt, FaLightbulb, FaBook } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";

export const listMenu = [
  {
    name: "Overview",
    link: "/overview",
    icon: <FaChartPie />,
    role: "admin",
  },
  {
    name: "Tickets",
    link: "/tickets",
    icon: <FaTicketAlt />,
    role: "developer",
  },
  {
    name: "Ideas",
    link: "/ideas",
    icon: <FaLightbulb />,
    role: "developer",
  },
  {
    name: "Contacts",
    link: "/contacts",
    icon: <IoMdContacts />,
    role: "developer",
  },
  {
    name: "Agents",
    link: "/agents",
    icon: <MdRealEstateAgent />,
    role: "developer",
  },
  {
    name: "Articles",
    link: "/articles",
    icon: <FaBook />,
    role: "developer",
  },
];
