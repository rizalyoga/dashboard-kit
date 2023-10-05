import { useLocation, useNavigate } from "react-router-dom";

const UnresolvedTickets = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className=" bg-white border-2 border-slate-200 rounded-md p-6 lg:mb-0">
      <div className="flex justify-between items-center">
        <h6 className="font-bold text-lg">Unresolved Tickets</h6>
        <p
          onClick={() => navigate("/unresolved-tasks")}
          className={
            pathname != "/unresolved-tasks"
              ? "text-primmary_blue hover:underline cursor-pointer"
              : "hidden"
          }
        >
          view details
        </p>
      </div>
      <p className="text-sm text-slate-300">
        Group <span className="text-slate-600 font-semibold">Supports</span>
      </p>
      <ul className="w-full mt-4 text-sm font-medium text-gray-900 bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-t border-y-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center">
            <label className="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Waiting on Feature Request
            </label>
            <span className="text-slate-400">4238</span>
          </div>
        </li>
        <li className="w-full border-t border-y-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center">
            <label className="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Awaiting Customer Response
            </label>
            <span className="text-slate-400">1005</span>
          </div>
        </li>
        <li className="w-full border-t border-y-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center">
            <label className="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Awaiting Developer Fix
            </label>
            <span className="text-slate-400">914</span>
          </div>
        </li>
        <li className="w-full border-t border-y-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center">
            <label className="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Pending
            </label>
            <span className="text-slate-400">281</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UnresolvedTickets;
