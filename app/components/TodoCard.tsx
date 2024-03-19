import { Button, Card } from "flowbite-react";
import { Task } from "../types/types";
import { removeItemFromLocalStorage } from "../lib/localStorage.services";
import { useRouter } from "next/navigation";

const TodoCard: React.FC<{ task: Task }> = ({ task }) => {
  const router = useRouter();
  return (
    <Card className="max-w-sm flex flex-col gap-2 justify-center">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900">
        {task.title}
      </h5>
      <p className="font-normal text-gray-700 ">{task.description}</p>
      <Button
        color="failure"
        onClick={() => {
          removeItemFromLocalStorage(task.id);
          router.refresh();
        }}
      >
        Delete
      </Button>
    </Card>
  );
};

export default TodoCard;
