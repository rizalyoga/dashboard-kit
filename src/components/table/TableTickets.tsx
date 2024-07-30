import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";
import { FaSortAmountUp, FaFilter } from "react-icons/fa";
import { filterBasedOnPriority } from "../../helper/filterBasedOnPriority";
import { sortTicketFunction } from "../../helper/sortTicketsFuntion";
import { TicketsDataInterface } from "../../types/type";
import { ticketsData } from "../../data/ticketsData";
import ModalFormContainer from "../modal/ModalFormContainer";
import ListTableComponent from "./ListTableComponent";
import clsx from "clsx";

const TableTickets = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [openModal, setOpenModal] = useState(false);
  const [listTicketsData, setTicketList] =
    useState<TicketsDataInterface[]>(ticketsData);

  // const filterParams = searchParams.get("filter");
  // const sortParams = searchParams.get("sort");

  const filterPriority = (priority: string) => {
    // setSearchParams({
    //   filter: filterParams == "filter" ? "all" : priority,
    //   sort: sortParams == "sort" ? "" : (sortParams as string),
    // });
    const newData = filterBasedOnPriority(ticketsData, priority);
    setTicketList(newData);
  };

  const sortTicketBasedOnName = (basedSort: string) => {
    // setSearchParams({
    // filter: filterParams == "filter" ? "all" : (filterParams as string),
    // sort: sortParams == "sort" ? "" : basedSort,
    // });
    sortTicketFunction(listTicketsData, basedSort).then((res) =>
      setTicketList(res)
    );
  };

  const handleModal = () => {
    setOpenModal((open) => !open);
  };

  const createNewTicket = (newTicket: TicketsDataInterface) => {
    const newDataTicket = { ...newTicket, id: listTicketsData.length + 1 };
    setTicketList([...[newDataTicket], ...ticketsData]);
  };

  return (
    <>
      <ModalFormContainer
        handleModal={handleModal}
        openModal={openModal}
        createTicketFunction={createNewTicket}
      />
      <div className="bg-white border border-slate-300 rounded-md overflow-x-auto mb-6 dark:bg-dark_background">
        <div className="p-6 flex flex-col justify-between sm:flex-row">
          <h3 className="font-bold text-lg dark:text-slate-300">All Tickets</h3>
          <div className="flex items-center item gap-1 font-bold text-sm text-slate-400 mt-4 -mb-6 sm:mt-0 sm:mb-0">
            <form className="flex items-center justify-center gap-2">
              <FaSortAmountUp className="text-base" />
              <select
                onChange={(e) => sortTicketBasedOnName(e.target.value)}
                className={clsx(
                  "border border-white p-0 appearance-none pl-1",
                  "dark:bg-dark_background dark:border-dark_background",
                  "focus:ring-0 focus:border-0"
                )}
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
                className={clsx(
                  "border border-white p-0 appearance-none pl-1",
                  "focus:ring-0 focus:border-0",
                  "dark:bg-dark_background dark:border-dark_background"
                )}
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
            <BsPlusSquare
              title="Create-ticket"
              onClick={handleModal}
              className="text-slate-400 bg-slate-200 text-lg cursor-pointer hover:text-slate-700"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
          <thead
            className={clsx(
              "text-gray-400 uppercase",
              "dark:bg-gray-700 dark:text-gray-400"
            )}
          >
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
              <ListTableComponent key={ticket.id} ticket={ticket} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableTickets;
