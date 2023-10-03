import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSortAmountUp, FaFilter } from "react-icons/fa";
import avatar from "../../assets/person.jpg";

const TableTickets = () => {
  return (
    <div className="bg-white border border-slate-300 rounded-md overflow-x-auto">
      <div className="p-6 flex justify-between">
        <h3 className="font-bold text-lg">All Tickets</h3>
        <div className="flex gap-6 font-bold text-sm text-slate-400 ">
          <span className="flex items-center justify-center gap-2">
            <FaSortAmountUp />
            <p className="cursor-pointer hover:text-slate-500 hover:underline">
              Sort
            </p>
          </span>
          <span className="flex items-center justify-center gap-2">
            <FaFilter />
            <p className="cursor-pointer hover:text-slate-500 hover:underline">
              Filter
            </p>
          </span>
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
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-600 cursor-pointer">
            <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
              <img
                className="w-10 h-10 rounded-full"
                src={avatar}
                alt="Jese image"
              />
              <div className="pl-3">
                <p className="text-base text-slate-600 font-semibold">
                  Contact Email not Linked
                </p>
                <p className="font-xs text-gray-400 font-normal">
                  update 1 days ago
                </p>
              </div>
            </td>
            <td className="px-6 py-4">
              <p className="text-base text-slate-600 font-semibold">
                Neil Sims
              </p>
              <p className="font-xs text-gray-400 font-normal">on 24.5.2023</p>
            </td>
            <td className="px-6 py-4">
              <div className="flex flex-col">
                <p className="text-base text-slate-600 font-semibold">
                  May 24, 2023
                </p>
                <p className="font-xs text-gray-400 font-normal">6:04 PM</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className="px-3 py-1 bg-red-600 text-white text-sm text-center rounded-full">
                HIGH
              </span>
            </td>
            <td>
              <BsThreeDotsVertical className="font-bold text-xl cursor-pointer text-slate-400 hover:text-slate-500" />
            </td>
          </tr>
          {/* Second Person */}
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-600 cursor-pointer">
            <td
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={avatar}
                alt="Jese image"
              />
              <div className="pl-3">
                <p className="text-base text-slate-600 font-semibold">
                  Adding Image to Feature Posts
                </p>
                <p className="font-xs text-gray-400 font-normal">
                  update 1 days ago
                </p>
              </div>
            </td>
            <td className="px-6 py-4">
              <p className="text-base text-slate-600 font-semibold">
                Neil Sims
              </p>
              <p className="font-xs text-gray-400 font-normal">on 24.5.2023</p>
            </td>
            <td className="px-6 py-4">
              <div className="flex flex-col">
                <p className="text-base text-slate-600 font-semibold">
                  May 24, 2023
                </p>
                <p className="font-xs text-gray-400 font-normal">6:04 PM</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className="px-3 py-1 bg-yellow-300 text-white text-sm text-center rounded-full">
                LOW
              </span>
            </td>
            <td>
              <BsThreeDotsVertical className="font-bold text-xl cursor-pointer text-slate-400 hover:text-slate-500" />
            </td>
          </tr>
          {/* Third Person */}
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-600 cursor-pointer">
            <td
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={avatar}
                alt="Jese image"
              />
              <div className="pl-3">
                <p className="text-base text-slate-600 font-semibold">
                  Payment not going through
                </p>
                <p className="font-xs text-gray-400 font-normal">
                  update 2 days ago
                </p>
              </div>
            </td>
            <td className="px-6 py-4">
              <p className="text-base text-slate-600 font-semibold">
                Neil Sims
              </p>
              <p className="font-xs text-gray-400 font-normal">on 24.5.2023</p>
            </td>
            <td className="px-6 py-4">
              <div className="flex flex-col">
                <p className="text-base text-slate-600 font-semibold">
                  May 24, 2023
                </p>
                <p className="font-xs text-gray-400 font-normal">6:04 PM</p>
              </div>
            </td>
            <td className="px-6 py-4">
              <span className="px-3 py-1 bg-green-400 text-white text-sm text-center rounded-full">
                NORMAL
              </span>
            </td>
            <td>
              <BsThreeDotsVertical className="font-bold text-xl cursor-pointer text-slate-400 hover:text-slate-500" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableTickets;
