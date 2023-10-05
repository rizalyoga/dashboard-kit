export const formatDate = (inputDate: string): string => {
  // const options: Intl.DateTimeFormatOptions = {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
  // return new Date(inputDate).toLocaleDateString(undefined, options);

  const date = new Date(inputDate);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const formatTime = (inputTime: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  return new Date(inputTime).toLocaleTimeString(undefined, options);
};
