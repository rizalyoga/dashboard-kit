import { useEffect } from "react";
import { TaskInterface, TicketsDataInterface } from "../../types/type";
import FormCreateNewTask from "../forms/FormCreateNewTask";
import FormCreateNewTicket from "../forms/FormCreateNewTicket";
import { useLocation } from "react-router-dom";

interface ModalFormProps {
  openModal: boolean;
  handleModal: () => void;
  createTaskFunction?: (newTask: TaskInterface) => void;
  createTicketFunction?: (newTciket: TicketsDataInterface) => void;
}

const ModalForm = ({
  openModal,
  handleModal,
  createTaskFunction,
  createTicketFunction,
}: ModalFormProps) => {
  const { pathname } = useLocation();

  const rederingModalForm = () => {
    if (pathname == "/tickets") {
      return (
        <FormCreateNewTicket createTicketFunction={createTicketFunction!} />
      );
    } else {
      return <FormCreateNewTask createTaskFunction={createTaskFunction!} />;
    }
  };

  // Set overflow & scroll hidden when modal is open
  useEffect(() => {
    if (openModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [openModal]);

  if (openModal) {
    return (
      <div className="fixed top-0 left-0 right-0 z-[100] w-full p-4 overflow-hidden bg-slate-400 bg-opacity-25 h-full flex justify-center items-center">
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={handleModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              {/* COMPONENTS */}
              {rederingModalForm()}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ModalForm;
