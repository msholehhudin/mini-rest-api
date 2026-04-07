import prisma from '../config/prisma'
import { Prisma, Status, Task } from '@prisma/client'

export class TaskRepository {
  async create(data: Prisma.TaskCreateInput): Promise<Task> {
    return prisma.task.create({ data })
  }

  async findAll(): Promise<Task[]> {
    return prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
    })
  }

  async findById(id: string): Promise<Task | null> {
    return prisma.task.findUnique({
      where: { id },
    })
  }

  async findByStatus(status: Status){
    return prisma.task.findMany({
      where: {status}
    })
  }

  async update(id: string, data: Prisma.TaskUpdateInput): Promise<Task> {
    return prisma.task.update({
      where: { id },
      data,
    })
  }

  async delete(id: string): Promise<Task> {
    return prisma.task.delete({
      where: { id },
    })
  }
}