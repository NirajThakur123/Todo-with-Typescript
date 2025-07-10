import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import type { listTodoType } from "./types/types";
import { Separator } from "./components/ui/separator";
import { todoSchema } from "./schemas/todo.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import { FormProvider } from "./components/context/FormContext";
import { useForm } from "react-hook-form";

function App() {
  const [listTodo, setListTodo] = useState<listTodoType[]>(() => {
    try {
      const storedData = localStorage.getItem("todoItem");
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      return [];
    }
  });

  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      todoItem: "",
    },
  });

  return (
    <>
      <FormProvider>
        <AddTodo form={form} listTodo={listTodo} setListTodo={setListTodo} />
        <Separator />
        <ListTodo form={form} listTodo={listTodo} setListTodo={setListTodo} />
      </FormProvider>
    </>
  );
}

export default App;
