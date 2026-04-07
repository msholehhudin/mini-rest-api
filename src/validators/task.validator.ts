import { Status } from "@prisma/client";
import z from "zod";

export const createTaskSchema = z.object({
    title:  z.string().min(3),
    description: z.string().optional(),
    status: z.enum(Status).optional()
})

export const updateTaskSchema = z.object({
    title:  z.string().optional(),
    description: z.string().optional(),
    status: z.enum(Status).optional()
})

