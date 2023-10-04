import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSortAmountUp, FaFilter } from "react-icons/fa";
import { filterBasedOnPriority } from "../../helper/filterBasedOnPriority";
import { sortTicketFunction } from "../../helper/sortTicketsFuntion";
import { TicketsDataInterface } from "../../types/type";
import { ticketsData } from "../../data/ticketsData";
import avatar from "../../assets/person.jpg";

const TableTickets = () => {
  const [listTicketsData, setTicketList] =
    useState<TicketsDataInterface[]>(ticketsData);

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

  const filterPriority = (priority: string) => {
    const newData = filterBasedOnPriority(ticketsData, priority);
    setTicketList(newData);
  };

  const sortTicketBasedOnName = (basedSort: string) => {
    sortTicketFunction(listTicketsData, basedSort).then((res) =>
      setTicketList(res)
    );
  };

  return (
    <div className="bg-white border border-slate-300 rounded-md overflow-x-auto">
      <div className="p-6 flex flex-col sm:flex-row justify-between">
        <h3 className="font-bold text-lg">All Tickets</h3>
        <div className="flex gap-1 font-bold text-sm text-slate-400 mt-4 sm:mt-0 -mb-6 sm:mb-0">
          <form className="flex items-center justify-center gap-2">
            <FaSortAmountUp className="text-base" />
            <select
              onChange={(e) => sortTicketBasedOnName(e.target.value)}
              className="border border-white p-0 appearance-none focus:ring-0 focus:border-0 pl-1"
            >
              <option value="sort">Sort</option>
              <option value={"name"}>Name</option>
              <option value={"date"}>Date</option>
            </select>
          </form>
          <form className="flex items-center justify-center gap-2">
            <FaFilter />
            <select
              onChange={(e) => filterPriority(e.target.value)}
              className="border border-white p-0 appearance-none focus:ring-0 focus:border-0 pl-1"
            >
              <option value="filter" defaultValue={"filter"}>
                Filter
              </option>
              <option value={"all"}>All</option>
              <option value={"low"}>Low</option>
              <option value={"normal"}>Normal</option>
              <option value={"high"}>High</option>
            </select>
          </form>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
        <thead className="text-gray-400 uppercase dark:bg-gray-700 dark:text-gray-400">
          <tr className="border-b border-b-slate-400">
            <th scope="col" className="px-6 py-3">
              Ticket Details
            </th>
            <th scope="col" className="px-6 py-3">
              Customer name
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Priority
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {listTicketsData.map((ticket) => (
            <tr
              key={ticket.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-600 cursor-pointer"
            >
              <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img
                  className="w-10 h-10 rounded-full"
                  src={avatar}
                  alt="Jese image"
                />
                <div className="pl-3">
                  <p className="text-base text-slate-600 font-semibold">
                    {ticket.ticket}
                  </p>
                  <p className="font-xs text-gray-400 font-normal">
                    update 1 days ago
                  </p>
                </div>
              </td>
              <td className="px-6 py-4">
                <p className="text-base text-slate-600 font-semibold">
                  {ticket.customer_name}
                </p>
                <p className="font-xs text-gray-400 font-normal">
                  on 24.5.2023
                </p>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <p className="text-base text-slate-600 font-semibold">
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTickets;
