import type { listTodoType, todoItemType } from "@/types/types";
import { Button } from "./ui/button";

const TodoItems = ({ item, handleDelete, handleEdit, handleToggleComplete }: todoItemType) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className={`text-lg ${item.isCompleted ? "line-through" : ""}`}>
            {item.todo}
          </span>
          <div className="flex items-center gap-4">
            <Button
              className={`text-white cursor-pointer ${item.isCompleted ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"}`}
              onClick={() => handleToggleComplete(item.id)}
            >
              {item.isCompleted ? "Undo" : "Complete"}
            </Button>
            <Button
              className="text-white cursor-pointer"
              onClick={() => handleEdit(item.id)}
            >
              Edit
            </Button>
            <Button
              className="text-black cursor-pointer hover:text-red-700 bg-red-500"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItems;
