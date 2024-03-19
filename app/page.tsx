"use client";
import { useSearchParams } from "next/navigation";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { getTasksFromLocalStorage } from "./lib/localStorage.services";

export default function Home() {
  const searchParam = useSearchParams();
  const isOpen = searchParam.get("form") === "add";
  const deleted = searchParam.get("form") === "deleted";
  let tasks = getTasksFromLocalStorage();

  return (
    <div className=" max-w-screen-xl flex flex-col justify-center items-center mx-auto mt-8 gap-7">
      <h1 className=" text-4xl font-bold">Task Manager</h1>
      <Header />
      <TaskList tasks={tasks} />
      <AddTodo isOpen={isOpen} />
    </div>
  );
}
