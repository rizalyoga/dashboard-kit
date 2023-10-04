import { TicketsDataInterface } from "../types/type";

export const sortTicketFunction = async (
  data: TicketsDataInterface[],
  basedSort: string
) => {
  // Sort data based on customer_name
  if (basedSort == "name") {
    const newData = await [...data].sort((a, b) => {
      const nameA = a.customer_name.charAt(0).toUpperCase();
      const nameB = b.customer_name.charAt(0).toUpperCase();
      return nameA.localeCompare(nameB);
    });

    return newData;

    // Sort data based on date
  } else if (basedSort == "date") {
    const newData = await [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });

    return newData;
  } else {
    return data;
  }
};
