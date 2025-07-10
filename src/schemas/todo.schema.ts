import { z } from "zod"

export const todoSchema = z.object({
    todoItem: z.string().min(1,"Todo Item is Required")
})