import { Input } from "@/components/ui/input";
import type { listTodoType, propsType } from "@/types/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { todoSchema } from "@/schemas/todo.schema";
import { Button } from "./ui/button";
import { useFormContext } from "./context/FormContext";
import { useEffect } from "react";

const AddTodo = <T extends listTodoType>({
  setListTodo,
  listTodo,
  form,
}: propsType<T>) => {
  const { isEditing, setIsEditing } = useFormContext();

  const onSubmit = (values: z.infer<typeof todoSchema>) => {
    if (isEditing) {
      setListTodo?.((prev) =>
        prev.map((prevItem) =>
          prevItem.id === isEditing
            ? { ...prevItem, todo: values?.todoItem }
            : prevItem
        )
      );
      setIsEditing(undefined);
    } else {
      const valueToAdd: listTodoType = {
        id: Date.now().toString(),
        todo: values.todoItem,
        isCompleted: false,
      };

      setListTodo?.((prev) => [...prev, valueToAdd as T]);
    }
    form.resetField("todoItem");
  };
  useEffect(() => {
    localStorage.setItem("todoItem", JSON.stringify(listTodo));
  }, [listTodo]);
  return (
    <div className="mt-24 mb-12">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex items-end gap-24 justify-center"
        >
          <FormField
            control={form.control}
            name="todoItem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add Todo</FormLabel>
                <FormControl>
                  <Input
                    className="w-[500px]"
                    placeholder="Enter your todo"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="cursor-pointer">Add</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddTodo;
