import React from "react";
import TodoCard from "./TodoCard";
import { Task } from "../types/types";

interface TaskListProp {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProp> = ({ tasks }) => {
  if (tasks.length <= 0) {
    return <p className=" text-xl text-gray-700 mx-auto mt-5">No tasks added!</p>;
  }
  return (
    <div className=" grid grid-cols-3 gap-5 min-w-full mt-5">
      {tasks.map((task: Task) => (
        <TodoCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
