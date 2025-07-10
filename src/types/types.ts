import type { todoSchema } from "@/schemas/todo.schema";
import type { Dispatch, SetStateAction } from "react";
import type { useForm } from "react-hook-form";
import type z from "zod";

export type propsType<T extends listTodoType> = {
  listTodo: T[];
  setListTodo: Dispatch<SetStateAction<T[]>>;
  form: ReturnType<typeof useForm<z.infer<typeof todoSchema>>>;
}


export interface listTodoType {
  id: string;
  todo: string;
  isCompleted: boolean;
}


export interface todoItemType {
  item: listTodoType;
  handleDelete: (id: string) => void;
  handleEdit: (id: string) => void;
}


export interface FormContextType {
  isEditing: string | undefined;
  setIsEditing: Dispatch<SetStateAction<string | undefined>>;
}