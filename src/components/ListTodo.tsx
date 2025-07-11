import type { listTodoType, propsType } from "@/types/types";
import TodoItems from "./TodoItems";
import { useFormContext } from "./context/FormContext";
import { useEffect } from "react";

const ListTodo = <T extends listTodoType>({
  listTodo,
  setListTodo,
  form,
}: propsType<T>) => {
  const { setIsEditing } = useFormContext();
  
  const handleDelete = (id: string) => {
    setListTodo?.((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (id: string) => {
    setIsEditing(id);
    form.setValue(
      "todoItem",
      listTodo.find((item) => item.id === id)?.todo || ""
    );
    form.setFocus("todoItem");
  };
  
  const handleToggleComplete = (id: string) => {
    setListTodo?.((prev) => 
      prev.map((item) => 
        item.id === id 
          ? { ...item, isCompleted: !item.isCompleted } 
          : item
      )
    );
  };

  useEffect(() => {
    const storedData = localStorage.getItem("todoItem");
    storedData && setListTodo(JSON.parse(storedData));
  }, []);

  return (
    <div>
      {listTodo?.map((item) => (
        <TodoItems
          key={item.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleToggleComplete={handleToggleComplete}
          item={item}
        />
      ))}
    </div>
  );
};

export default ListTodo;
