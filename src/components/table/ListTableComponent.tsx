import { TicketsDataInterface } from "../../types/type";
import avatar from "../../assets/person.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import clsx from "clsx";

const ListTableComponent = ({ ticket }: { ticket: TicketsDataInterface }) => {
  const setBackgroundPriority = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-600";
      case "normal":
        return "bg-green-400";
      case "low":
        return "bg-yellow-300";
    }
  };
  return (
    <tr
      key={ticket.id}
      className={clsx(
        "bg-white border-b cursor-pointer",
        "hover:bg-purple-50",
        "dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600"
      )}
    >
      <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
        <img className="w-10 h-10 rounded-full" src={avatar} alt="Jese image" />
        <div className="pl-3">
          <p className="text-base text-slate-600 font-semibold dark:text-slate-300">
            {ticket.ticket}
          </p>
          <p className="font-xs text-gray-400 font-normal">update 1 days ago</p>
        </div>
      </td>
      <td className="px-6 py-4">
        <p className="text-base text-slate-600 font-semibold dark:text-slate-300">
          {ticket.customer_name}
        </p>
        <p className="font-xs text-gray-400 font-normal">on 24.5.2023</p>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col">
          <p className="text-base text-slate-600 font-semibold dark:text-slate-300">
            {ticket.date}
          </p>
          <p className="font-xs text-gray-400 font-normal">6:04 PM</p>
        </div>
      </td>
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 text-white text-sm text-center rounded-full ${setBackgroundPriority(
            ticket.priority
          )}`}
        >
          {ticket.priority.toUpperCase()}
        </span>
      </td>
      <td>
        <BsThreeDotsVertical className="font-bold text-xl cursor-pointer text-slate-400 hover:text-slate-500" />
      </td>
    </tr>
  );
};

export default ListTableComponent;
