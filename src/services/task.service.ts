import { TaskRepository } from '../repositories/task.repository'
import { Prisma, Status, Task } from '@prisma/client'

export class TaskService {
  private taskRepository: TaskRepository

  constructor() {
    this.taskRepository = new TaskRepository()
  }

  async createTask(data: Prisma.TaskCreateInput): Promise<Task> {
    
    // Check data length 
    if (!data.title || data.title.length < 3) {
      throw new Error('Title must be at least 3 characters')
    }

    return this.taskRepository.create(data)
  }

  async getAllTasks(status?: Status): Promise<Task[]> {
    if(status){
        return this.taskRepository.findByStatus(status)
    }
    return this.taskRepository.findAll()
  }

  async getTaskById(id: string): Promise<Task> {
    const task = await this.taskRepository.findById(id)

    if (!task) {
      throw new Error('Task not found')
    }

    return task
  }

  async updateTask(id: string, data: Prisma.TaskUpdateInput): Promise<Task> {
    const existing = await this.taskRepository.findById(id)

    if (!existing) {
      throw new Error('Task not found')
    }

    return this.taskRepository.update(id, data)
  }

  async deleteTask(id: string): Promise<void> {
    const existing = await this.taskRepository.findById(id)

    if (!existing) {
      throw new Error('Task not found')
    }

    await this.taskRepository.delete(id)
  }
}