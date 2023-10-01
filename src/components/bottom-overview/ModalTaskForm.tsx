import { useEffect, useState } from "react";
import { TaskInterface } from "./Task";

interface ModalFormProps {
  openModal: boolean;
  handleModal: () => void;
  createNewTask: (newTask: TaskInterface) => void;
}

const ModalTaskForm = ({
  openModal,
  handleModal,
  createNewTask,
}: ModalFormProps) => {
  const [newTask, setNewTask] = useState<TaskInterface>({
    task: "",
    status: "DEFAULT",
  });

  useEffect(() => {
    if (openModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [openModal]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;

    setNewTask({
      ...newTask,
      [e.target.name]: value,
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNewTask(newTask);
    setNewTask({
      task: "",
      status: "DEFAULT",
    });
  };

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
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Task Form
              </h3>
              <form className="space-y-6" onSubmit={onSubmitHandler}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Task
                  </label>
                  <input
                    type="text"
                    name="task"
                    value={newTask.task}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primmary_blue focus:border-primmary_blue block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="New Task"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Status
                  </label>
                  <select
                    value={newTask.status}
                    onChange={handleChange}
                    name="status"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value={"DEFAULT"}>DEFAULT</option>
                    <option value={"NEW"}>NEW</option>
                    <option value={"URGENT"}>URGENT</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primmary_blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create New Task
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ModalTaskForm;
