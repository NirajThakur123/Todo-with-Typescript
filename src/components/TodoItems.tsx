import type { listTodoType, todoItemType } from "@/types/types";
import { Button } from "./ui/button";

const TodoItems = ({ item, handleDelete, handleEdit }: todoItemType) => {
  return (
    <>
      <div>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className={`text-lg ${item.isCompleted ? "line-through" : ""}`}>
            {item.todo}
          </span>
          <div className="flex items-center gap-6">
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
