import { IoMdContacts } from "react-icons/io";
import { FaChartPie, FaTicketAlt, FaLightbulb, FaBook } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";

export const listMenu = [
  {
    name: "Overview",
    link: "/overview",
    icon: <FaChartPie />,
  },
  {
    name: "Tickets",
    link: "/tickets",
    icon: <FaTicketAlt />,
  },
  {
    name: "Ideas",
    link: "/ideas",
    icon: <FaLightbulb />,
  },
  {
    name: "Contacts",
    link: "/contacts",
    icon: <IoMdContacts />,
  },
  {
    name: "Agents",
    link: "/agents",
    icon: <MdRealEstateAgent />,
  },
  {
    name: "Articles",
    link: "/articles",
    icon: <FaBook />,
  },
];
