import { Task } from "../types/types";

export const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  if (!tasks) return [];
  return JSON.parse(tasks);
};

export const addItemToLocalStorage = (task: {
  title: string | null;
  description: string | null;
}) => {
  const tasks: Task[] = getTasksFromLocalStorage();
  const id = tasks[tasks.length - 1]?.id ? tasks[tasks.length - 1]?.id + 1 : 1;
  tasks.push({ ...task, id });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const removeItemFromLocalStorage = (id: number) => {
  const tasks: Task[] = getTasksFromLocalStorage();
  const filteredTasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(filteredTasks));
};
