import { TicketsDataInterface } from "./../types/type";

export const filterBasedOnPriority = (
  data: TicketsDataInterface[],
  priority: string
) => {
  if (priority == "filter" || priority == "all") {
    return data;
  }

  const newData = data.filter((task) => {
    return task.priority === priority;
  });

  return newData;
};
