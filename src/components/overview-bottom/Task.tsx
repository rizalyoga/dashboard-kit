import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";
import { listTask } from "../../data/listTask";
import { TaskInterface } from "../../types/type";
import Swal from "sweetalert2";
import ModalFormContainer from "../modal/ModalFormContainer";

const Task = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [listTasks, setListTasks] = useState<TaskInterface[]>(listTask);

  const hadnleStatusBackground = (status: string) => {
    switch (status) {
      case "NEW":
        return "bg-green-400 text-xs rounded-md text-white px-2 py-1";
      case "URGENT":
        return "bg-yellow-300 text-xs rounded-md text-white px-2 py-1";
      case "DEFAULT":
        return "bg-slate-300 text-xs rounded-md text-slate-400 px-2 py-1";
      default:
        break;
    }
  };

  const handleModal = () => {
    setOpenModal((open) => !open);
  };

  const createNewTask = (newTask: TaskInterface) => {
    setListTasks([...[newTask], ...listTasks]);
  };

  const isTaskIsDone = (doneTask: string) => {
    setListTasks(
      listTasks.map((prevData) =>
        prevData.task == doneTask ? { ...prevData, isDone: true } : prevData
      )
    );

    setTimeout(() => {
      Swal.fire({
        text: "Are you sure task is done ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3751FF",
        cancelButtonColor: "#52525C",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          const newTasks = listTasks.filter((task) => {
            return task.task != doneTask;
          });

          setListTasks(newTasks);
        } else {
          setListTasks(
            listTasks.map((prevData) =>
              prevData.task == doneTask
                ? { ...prevData, isDone: false }
                : prevData
            )
          );
        }
      });
    }, 200);
  };

  return (
    <>
      <ModalFormContainer
        openModal={openModal}
        handleModal={handleModal}
        createTaskFunction={createNewTask}
      />
      <div className=" bg-white border-2 border-slate-200 rounded-md p-6">
        <div className="flex justify-between items-center">
          <h6 className="font-bold text-lg">Tasks</h6>
          <p
            onClick={() => navigate("/all-tasks")}
            className={
              pathname == "/all-tasks"
                ? "hidden"
                : "text-primmary_blue hover:underline cursor-pointer"
            }
          >
            view all
          </p>
        </div>
        <p className="text-sm text-slate-300">Today</p>
        <div className="flex justify-between items-center mt-6">
          <p className="text-slate-300">create new task</p>

          <BsPlusSquare
            onClick={handleModal}
            className="text-slate-400 bg-slate-200 text-lg cursor-pointer hover:text-slate-700"
          />
        </div>
        <ul className="w-full mt-4 text-sm font-medium text-gray-900 bg-white border-b border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {listTasks.map((task) => (
            <li
              key={task.task}
              className="w-full border-t border-y-gray-200 rounded-t-lg dark:border-gray-600"
            >
              <div className="flex items-center pl-3">
                <input
                  type="checkbox"
                  value=""
                  onChange={() => isTaskIsDone(task.task)}
                  checked={task.isDone}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {task.task}
                </label>
                <span className={hadnleStatusBackground(task.status)}>
                  {task.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Task;
