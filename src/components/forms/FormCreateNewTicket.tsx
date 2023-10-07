import { useState } from "react";
import { TicketsDataInterface } from "../../types/type";
import { formatDate, formatTime } from "../../helper/formatDate&Time";
import clsx from "clsx";

interface ModalFormProps {
  createTicketFunction: (newTciket: TicketsDataInterface) => void;
}

const FormCreateNewTicket = ({ createTicketFunction }: ModalFormProps) => {
  const [newTicket, setNewTicket] = useState({
    id: 1,
    ticket: "",
    customer_name: "",
    date: "",
    time: "",
    priority: "low",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const value = e.target.value;

    setNewTicket({
      ...newTicket,
      [e.target.name]: value,
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData = {
      ...newTicket,
      date: formatDate(new Date().toString()),
      time: formatTime(new Date().toString()),
    };

    createTicketFunction(newData);

    setNewTicket({
      id: 1,
      ticket: "",
      customer_name: "",
      date: "",
      time: "",
      priority: "low",
    });
  };

  return (
    <div className={clsx("px-6 py-6", "lg:px-8")}>
      <h3
        className={clsx(
          "mb-4 text-xl font-bold text-gray-900",
          "dark:text-white"
        )}
      >
        Create New Ticket Form
      </h3>
      <form className="space-y-6" onSubmit={onSubmitHandler}>
        <div>
          <label
            className={clsx(
              "block mb-2 text-sm font-medium text-gray-900",
              "dark:text-white"
            )}
          >
            Customer Name
          </label>
          <input
            type="text"
            name="customer_name"
            value={newTicket.customer_name}
            className="select-component-style"
            placeholder="Your Name"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className={clsx(
              "block mb-2 text-sm font-medium text-gray-900",
              "dark:text-white"
            )}
          >
            Ticket Priority
          </label>
          <select
            value={newTicket.priority}
            onChange={handleChange}
            name="priority"
            className="select-component-style"
          >
            <option value={"low"}>Low</option>
            <option value={"normal"}>Normal</option>
            <option value={"high"}>High</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Ticket Detail
          </label>
          <textarea
            name="ticket"
            value={newTicket.ticket}
            className={clsx(
              "bg-gray-50 block w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg",
              "focus:ring-primmary_blue focus:border-primmary_blue",
              "dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            )}
            placeholder="Ticket Detail"
            required
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className={clsx(
            "w-full font-medium rounded-lg text-sm px-5 py-3 text-center text-white bg-primmary_blue",
            "hover:bg-blue-800",
            "focus:ring-4 focus:outline-none focus:ring-blue-300",
            " dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          )}
        >
          Create New Ticket
        </button>
      </form>
    </div>
  );
};

export default FormCreateNewTicket;
