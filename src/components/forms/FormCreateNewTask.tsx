import { useState } from "react";
import { TaskInterface } from "../../types/type";
import clsx from "clsx";

interface ModalFormProps {
  createTaskFunction: (newTask: TaskInterface) => void;
}

const FormCreateNewTask = ({ createTaskFunction }: ModalFormProps) => {
  const [newTask, setNewTask] = useState<TaskInterface>({
    task: "",
    status: "DEFAULT",
    isDone: false,
  });

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
    createTaskFunction(newTask);

    setNewTask({
      task: "",
      status: "DEFAULT",
      isDone: false,
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
        Create New Task Form
      </h3>
      <form className="space-y-6" onSubmit={onSubmitHandler}>
        <div>
          <label
            className={clsx(
              "block mb-2 text-sm font-medium text-gray-900",
              "dark:text-white"
            )}
          >
            Task
          </label>
          <input
            type="text"
            name="task"
            value={newTask.task}
            className="select-component-style"
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
            className="select-component-style"
          >
            <option value={"DEFAULT"}>DEFAULT</option>
            <option value={"NEW"}>NEW</option>
            <option value={"URGENT"}>URGENT</option>
          </select>
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
          Create New Task
        </button>
      </form>
    </div>
  );
};

export default FormCreateNewTask;
