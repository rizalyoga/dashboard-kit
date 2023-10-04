export interface TaskInterface {
  task: string;
  status: string;
  isDone: boolean;
}

export interface AuthInterface {
  email: string;
  password: string;
}

export interface ListMenuInterface {
  name: string;
  link: string;
  icon: React.ReactNode;
  role: string;
}

export interface TicketsDataInterface {
  id: number;
  ticket: string;
  customer_name: string;
  date: string;
  time: string;
  priority: string;
}
